import button from './button'
import navbar from './navbar'
import themeSetter from './theme-setter'
import visuallyHidden from './visually-hidden'

export interface DocData<T> {
  name: string
  explanation: string
  code_import: string[]
  code_example: string[]
  code_custom?: string[]
  customization: {
    keys: T
    required?: T[]
    optional?: T[]
  }
}

export const docsPages = {
  button,
  navbar,
  'theme-setter': themeSetter,
  'visually-hidden': visuallyHidden,
} as Record<string, DocData<string[]>>

export const docsList = {
  blocks: [
    { name: 'Navbar', link: 'navbar', icon: 'navbar.svg' },
    { name: 'Table', link: 'table', icon: 'table.svg' },
  ],
  elements: [
    { name: 'Button', link: 'button', icon: 'button.svg' },
    { name: 'Code', link: 'code', icon: 'code.svg' },
    { name: 'VisuallyHidden', link: 'visually-hidden', icon: 'hidden.svg' },
  ],
  layouts: [{ name: 'FlexGrid', link: 'flex-grid', icon: 'grid.svg' }],
  utilities: [{ name: 'ThemeSetter', link: 'theme-setter', icon: 'theme.svg' }],
}
