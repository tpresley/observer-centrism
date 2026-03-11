import { defineConfig } from 'astro/config'
import sygnal from 'sygnal/astro'
import pagefind from 'astro-pagefind'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

const isProd = process.env.NODE_ENV === 'production'

export default defineConfig({
  site: 'https://tpresley.github.io',
  base: isProd ? '/observer-centrism' : '/',
  integrations: [sygnal(), pagefind()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
})
