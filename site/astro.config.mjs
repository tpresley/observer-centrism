import { defineConfig } from 'astro/config'
import sygnal from 'sygnal/astro'
import pagefind from 'astro-pagefind'
import remarkMath from 'remark-math'
import remarkStats from './src/plugins/remark-stats.mjs'
import rehypeKatex from 'rehype-katex'
import rehypeStepAnchors from './src/plugins/rehype-step-anchors.mjs'

export default defineConfig({
  site: 'https://observer-centrism.org',
  base: '/',
  integrations: [sygnal(), pagefind()],
  markdown: {
    remarkPlugins: [remarkStats, remarkMath],
    rehypePlugins: [rehypeKatex, rehypeStepAnchors],
  },
  vite: {
    build: {
      minify: 'terser',
      terserOptions: {
        mangle: {
          reserved: ['Fragment'],
        },
      },
    },
  },
})
