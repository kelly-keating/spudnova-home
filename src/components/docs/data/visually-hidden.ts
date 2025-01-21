import { DocData } from '.'

export default {
  name: 'VisuallyHidden',
  explanation:
    'A component that hides its children from the generic user, but not screen reader.',
  code_import: ["import { VisuallyHidden } from '@spudnova-ui/components'"],
  code_example: [
    '<a href="/" aria-label="Home - Spudnova UI">',
    '  <img',
    '    src="/logos/spudnova_title.svg"',
    '    alt="Spudnova Logo"',
    '  />',
    '  <VisuallyHidden>Home - Spudnova UI</VisuallyHidden>',
    '</a>',
  ],
  customization: {
    keys: ['name', 'type', 'default value'],
    required: [['children within VisuallyHidden', 'ReactNode', '']],
    optional: [['as', '"span" | "div" | "label', '"span"']],
  },
} as DocData<[string, string, string]>
