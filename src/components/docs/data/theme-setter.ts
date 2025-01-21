import { DocData } from '.'

export default {
  name: 'ThemeSetter',
  explanation: '',
  code_import: ["import { ThemeSetter } from '@spudnova-ui/components'"],
  code_example: [
    'const myTheme = {',
    "  secondaryColor: '#97bbb1',",
    "  textColor: '#99ddcb',",
    "  textAlt: '#ef8354',",
    '}',
    '',
    "createRoot(document.getElementById('root')!).render(",
    '  <StrictMode>',
    '    <ThemeSetter theme={myTheme} />',
    '    <App />',
    '  </StrictMode>',
    ')',
  ],
  customization: {
    keys: ['name', 'type', 'example value'],
    required: [['style', '', '']],
  },
} as DocData<[string, string, string]>
