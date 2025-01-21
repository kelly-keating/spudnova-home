import { DocData } from '.'

export default {
  name: 'Navbar',
  explanation: '',
  code_import: ["import { Navbar } from '@spudnova-ui/components'"],
  code_example: [
    '<Navbar',
    '  left={<div>Left</div>}',
    '  right={<div>Right</div>}',
    '  shadow',
    '/>',
  ],
  customization: {
    keys: ['name', 'type', 'example value'],
    optional: [
      ['left', 'ReactNode', '<div>Left</div>'],
      ['right', 'ReactNode', '<div>Right</div>'],
      ['shadow', 'boolean', 'true'],
      ['bgColor', 'color code', '#000000'],
      ['color', 'color code', '#ffffff'],
    ],
  },
} as DocData<[string, string, string]>
