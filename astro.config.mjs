import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from "@astrojs/sitemap";
import partytown from '@astrojs/partytown';

import mdx from '@astrojs/mdx';
import rehypeSlug from 'rehype-slug';
import rehypePrettyCode from 'rehype-pretty-code';

// https://astro.build/config
export default defineConfig({
    site: 'https://www.anilrai.dev',
  	integrations: [
        tailwind(), react(), 
        partytown({
            config: {
                forward: ['dataLayer.push']
            }
        }), 
        sitemap(), 
        mdx({
            syntaxHighlight: false,
            rehypePlugins: [
                /**
                * Adds ids to headings
                */
                rehypeSlug,
                [
                /**
                * Enhances code blocks with syntax highlighting, line numbers,
                * titles, and allows highlighting specific lines and words
                */
        
                rehypePrettyCode,
                {
                    theme: 'github-dark',
                },
                ],
            ],
        })
    ]
});