'use client';

import React, { useMemo } from 'react';
import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';
import Carousel from '../Carousel/Carousel';

type MarkdownRendererProps = {
  content: string;
};

type CarouselData = {
  images: string[];
  autoPlay: boolean;
  isVertical: boolean;
};

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const markdown = useMemo(() => {
    return new MarkdownIt({
      html: true,
      linkify: true,
      typographer: true,
      highlight: (str, lang) => {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return hljs.highlight(str, { language: lang }).value;
          } catch {
            // Ignore highlighting errors
          }
        }
        return '';
      },
    });
  }, []);

  const { htmlContent, carousels } = useMemo(() => {
    const carouselData: CarouselData[] = [];
    let processedContent = content;

    const carouselRegex = /:::carousel\s*([^\n]*?)\s*\n((?:[^:]+|:(?!::))*?)\n:::/g;
    let match;
    let carouselIndex = 0;

    while ((match = carouselRegex.exec(content)) !== null) {
      const [fullMatch, options = '', carouselContent] = match;

      const lines = carouselContent
        .trim()
        .split('\n')
        .filter(line => line.trim());

      const images: string[] = [];
      const autoPlay = options.includes('autoplay');
      const isVertical = options.includes('isVertical');

      lines.forEach(line => {
        const trimmedLine = line.trim();
        const mdImageMatch = trimmedLine.match(/!\[.*?\]\((.+?)\)/);

        if (mdImageMatch) {
          images.push(mdImageMatch[1]);
        } else if (
          trimmedLine.startsWith('/') ||
          trimmedLine.startsWith('http')
        ) {
          images.push(trimmedLine);
        }
      });

      if (images.length > 0) {
        carouselData.push({ images, autoPlay, isVertical });
        processedContent = processedContent.replace(
          fullMatch,
          `<!-- CAROUSEL_${carouselIndex} -->`,
        );
        carouselIndex++;
      }
    }

    const htmlContent = markdown.render(processedContent);

    return {
      htmlContent,
      carousels: carouselData,
    };
  }, [content, markdown]);

  const renderContent = () => {
    const parts = htmlContent.split(/<!-- CAROUSEL_(\d+) -->/);
    const elements: React.JSX.Element[] = [];

    for (let i = 0; i < parts.length; i++) {
      if (i % 2 === 0) {
        if (parts[i].trim()) {
          elements.push(
            <div
              key={`content-${i}`}
              className='markdown-content max-w-none text-md'
              dangerouslySetInnerHTML={{ __html: parts[i] }}
            />,
          );
        }
      } else {
        const carouselIndex = parseInt(parts[i]);
        if (carousels[carouselIndex]) {
          elements.push(
            <Carousel
              key={`carousel-${carouselIndex}`}
              images={carousels[carouselIndex].images}
              autoPlay={carousels[carouselIndex].autoPlay}
              isVertical={carousels[carouselIndex].isVertical}
            />,
          );
        }
      }
    }

    return elements;
  };

  return <>{renderContent()}</>;
}
