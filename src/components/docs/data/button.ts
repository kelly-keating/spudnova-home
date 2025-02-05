import { DocData } from '.'

export default {
  name: 'Button',
  explanation: '',
  code_import: ["import { Button } from '@spudnova-ui/components'"],
  code_example: [
    '<Button onClick={() => console.log("Clicked")}>',
    '  Welcome!',
    '</Button>',
  ],
  customization: {
    keys: ['name', 'type', 'default value', 'example value'],
    required: [['onClick', 'function', ' ', '() => console.log("Clicked")']],
    optional: [
      ['children within Button', 'ReactNode', 'Click Me!', 'Button Text'],
      ['submit', 'boolean', 'false', ' '],
      ['disabled', 'boolean', 'false', ' '],
      [
        'variant',
        '"primary" | "danger" | "ghost" | "success"',
        '"primary"',
        ' ',
      ],
    ],
  },
} as DocData<[string, string, string, string]>
