import { defineCollection, z } from 'astro:content'

const source = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    section: z.string(),
    tags: z.array(z.string()).default([]),
    order: z.number(),
  }),
})

const derivations = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    status: z.enum(['stub', 'draft', 'provisional', 'rigorous']),
    dependsOn: z.array(z.string()).default([]),
    enablesDerivation: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    summary: z.string(),
    rigorLevel: z.enum(['informal', 'semi-formal', 'formal']),
    sourceSection: z.string().optional(),
    lastUpdated: z.date().optional(),
  }),
})

const predictions = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    status: z.enum(['qualitative', 'semi-quantitative', 'quantitative']),
    testability: z.enum(['currently-tested', 'near-future', 'far-future', 'in-principle']),
    dependsOn: z.array(z.string()).default([]),
    currentEvidence: z.string().optional(),
    distinctiveness: z.enum(['unique', 'shared', 'generic']),
    sourceSection: z.string().optional(),
  }),
})

export const collections = { source, derivations, predictions }
