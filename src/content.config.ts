// 1. Import utilities from `astro:content`
import { defineCollection, reference, z } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Define your collection(s)
const blog = defineCollection({ 
    loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/blogs" }),
    schema: z.object({
        is_draft: z.boolean(),
        title: z.string(),
        image: z.object({
            src: z.string(),
            alt: z.string(),
        }),
        tags: z.array(z.string()),
        excerpts: z.string(),
        publish_date: z.coerce.date(),
        update_date: z.coerce.date().optional(),
         // Reference a single author from the `authors` collection by `id`
        author: reference('authors').default('Anonymous'),
        // Reference an array of related posts from the `blog` collection by `slug`
        relatedPosts: z.array(reference('blog')).optional(),
        time_read: z.string(),
        featured: z.boolean()
    })
});

const authors = defineCollection({
    loader: glob({ pattern: '**/[^_]*.json', base: 'src/content/authors'}),
    schema: z.object({
        name: z.string(),
        portfolio: z.string().url(),
    })
})

// 4. Export a single `collections` object to register your collection(s)
export const collections = { blog, authors };