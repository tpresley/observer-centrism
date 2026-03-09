import { defineConfig } from 'astro/config'
import sygnal from 'sygnal/astro'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

export default defineConfig({
  integrations: [sygnal()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
})
