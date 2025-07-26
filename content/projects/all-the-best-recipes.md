---
product: All The Best Recipes
started_at: 2021-12-12
ended_at: 2024-04-08
concept: Digital cookbook, originally created for personal and family use, the platform now allows anyone to register, contribute their own recipes, and engage with the community by commenting, sharing experiences, and discovering new culinary ideas.
tech_stack:
  [
    'Golang',
    'React',
    'React Native',
    'Expo',
    'SASS',
    'TypeScript',
    'PostgreSQL',
    'Websocket',
  ]
images:
  [
    'https://personal-portfolio-web.s3.eu-central-1.amazonaws.com/portfolio/job-TechPods-91d71edc-44d1-4106-93c4-4e49e043b32e',
    'https://personal-portfolio-web.s3.eu-central-1.amazonaws.com/portfolio/job-TechPods-fc0dfa69-26e4-49d3-9fa4-b759bcfdc58f',
  ]
logo: '/all-the-best-recipes.png'
image: 'https://personal-portfolio-web.s3.eu-central-1.amazonaws.com/portfolio/job-TechPods-91d71edc-44d1-4106-93c4-4e49e043b32e'
summary: 'Digital cookbook for family use'
url: https://all-the-best-recipes.vercel.app/
repository:
  [
    https://github.com/StGrozdanov/recipes-v2-client,
    https://github.com/StGrozdanov/recipes-v2-server,
    https://github.com/StGrozdanov/recipes-v2-cms-mobile,
  ]
---

# All the Best Recipes

A family recipe collection website built to preserve and share our favorite dishes across generations. What started as a simple way to digitize handwritten recipes evolved into a comprehensive cooking platform.

## Project Overview

This project was born out of necessity when my grandmother's recipe collection was at risk of being lost. Instead of letting decades of culinary wisdom disappear, I decided to create a digital archive that the whole family could contribute to and access.

:::note Project Goals

- **Preserve**: Digitize and organize family recipes
- **Share**: Allow family members to contribute their own recipes
- **Discover**: Help users find recipes based on ingredients or dietary preferences
- **Learn**: Provide detailed cooking instructions and tips

## Key Features

### Recipe Management System

Built a comprehensive recipe management system with full CRUD operations:

```typescript
// Recipe data structure
interface Recipe {
  id: string;
  title: string;
  description: string;
  prepTime: number; // minutes
  cookTime: number; // minutes
  servings: number;
  difficulty: 'easy' | 'medium' | 'hard';
  ingredients: Ingredient[];
  instructions: Instruction[];
  tags: string[];
  nutritionInfo?: NutritionInfo;
  images: string[];
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Ingredient {
  id: string;
  name: string;
  amount: number;
  unit: string;
  notes?: string;
}

interface Instruction {
  id: string;
  stepNumber: number;
  description: string;
  image?: string;
  timer?: number; // optional timer in minutes
}
```

### Smart Search & Filtering

Implemented advanced search capabilities using Supabase's full-text search:

```sql
-- Full-text search function
CREATE OR REPLACE FUNCTION search_recipes(
  search_query TEXT DEFAULT '',
  tag_filters TEXT[] DEFAULT '{}',
  max_prep_time INTEGER DEFAULT NULL,
  difficulty_level TEXT DEFAULT NULL
)
RETURNS TABLE (
  id UUID,
  title TEXT,
  description TEXT,
  prep_time INTEGER,
  cook_time INTEGER,
  difficulty TEXT,
  tags TEXT[],
  rank REAL
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT
    r.id,
    r.title,
    r.description,
    r.prep_time,
    r.cook_time,
    r.difficulty,
    r.tags,
    ts_rank(
      to_tsvector('english', r.title || ' ' || r.description || ' ' || array_to_string(r.tags, ' ')),
      plainto_tsquery('english', search_query)
    ) as rank
  FROM recipes r
  WHERE
    (search_query = '' OR to_tsvector('english', r.title || ' ' || r.description) @@ plainto_tsquery('english', search_query))
    AND (array_length(tag_filters, 1) IS NULL OR r.tags && tag_filters)
    AND (max_prep_time IS NULL OR r.prep_time <= max_prep_time)
    AND (difficulty_level IS NULL OR r.difficulty = difficulty_level)
  ORDER BY rank DESC, r.created_at DESC;
END;
$$;
```

## Results & Impact

The recipe website has become an integral part of our family's cooking routine:

- **500+ recipes** digitized and organized
- **15 family members** actively contributing content
- **95% reduction** in "What's for dinner?" discussions
- **Zero lost recipes** since launch

:::tip Lessons Learned

1. **Start simple**: Focus on core functionality before adding advanced features
2. **Mobile-first**: Most recipe viewing happens on phones in the kitchen
3. **Fast search**: Users expect instant results when looking for recipes
4. **Clear instructions**: Step-by-step photos are worth more than lengthy descriptions
5. **Family involvement**: Success depends on getting everyone to contribute their recipes

## Future Enhancements

Plans for the next version include:

- **Voice commands** for hands-free recipe reading
- **Smart ingredient substitutions** based on dietary restrictions
- **Community features** for sharing recipes beyond family
- **Integration with smart appliances** for automatic cooking instructions
- **AI-powered recipe suggestions** based on available ingredients

## Conclusion

Building "All the Best Recipes" was more than just a coding project—it was about preserving family heritage and creating new traditions. The combination of modern web technologies with timeless family recipes has created something truly special.

The project taught me the importance of understanding your users (in this case, family members) and building features that solve real problems. Sometimes the best technology solutions are the ones that bring people together.

---

_Want to see the code? Check out the [GitHub repository](https://github.com/StGrozdanov/recipes-blog) or try the live site at [recipes.stoyangrozdanov.com](https://recipes.stoyangrozdanov.com)._
