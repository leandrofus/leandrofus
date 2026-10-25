import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    order: z.number().default(0),
    lang: z.enum(['es', 'en']),
    deliverables: z.array(z.string()).optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    category: z.string(),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    featured: z.boolean().default(false),
    client: z.boolean().default(false),
    year: z.number().optional(),
    order: z.number().default(0),
    lang: z.enum(['es', 'en']),
  }),
});

const site = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/site' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    badge: z.string().optional(),
    lang: z.enum(['es', 'en']),
    ctaPrimary: z.object({
      text: z.string(),
      href: z.string(),
    }).optional(),
    ctaSecondary: z.object({
      text: z.string(),
      href: z.string(),
    }).optional(),
    stats: z.array(
      z.object({
        value: z.string(),
        label: z.string(),
      })
    ).optional(),
  }),
});

const skills = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/skills' }),
  schema: z.object({
    lang: z.enum(['es', 'en']),
    title: z.string(),
    subtitle: z.string().optional(),
    badge: z.string().optional(),
    groups: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        items: z.array(
          z.object({
            name: z.string(),
            level: z.string(),
            highlight: z.boolean().default(false),
          })
        ),
      })
    ),
  }),
});

const process = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/process' }),
  schema: z.object({
    lang: z.enum(['es', 'en']),
    title: z.string(),
    subtitle: z.string().optional(),
    steps: z.array(z.object({ title: z.string(), text: z.string() })),
    note: z.string().optional(),
  }),
});

export const collections = {
  process,
  services,
  projects,
  site,
  skills,
};
