/**
 * Rehype plugin that adds short `step-N` anchor spans to Step headings.
 *
 * Astro's built-in rehype-slug generates full slugs like
 * "step-3-three-constraints". This plugin adds a secondary
 * <span id="step-3"></span> inside each heading so that
 * short #step-N links also work (used by the Theorems page).
 */
import { visit } from 'unist-util-visit'

export default function rehypeStepAnchors() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (!/^h[1-6]$/.test(node.tagName)) return

      // Extract text content from the heading
      const text = extractText(node)
      const match = text.match(/^Step\s+(\d+)/)
      if (!match) return

      const stepNum = match[1]
      const shortId = `step-${stepNum}`

      // Don't add if the heading already has this exact id
      if (node.properties?.id === shortId) return

      // Prepend a span with the short anchor id
      node.children.unshift({
        type: 'element',
        tagName: 'span',
        properties: { id: shortId },
        children: [],
      })
    })
  }
}

function extractText(node) {
  if (node.type === 'text') return node.value
  if (node.children) return node.children.map(extractText).join('')
  return ''
}
