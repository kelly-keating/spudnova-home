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
  elements: [
    { name: 'Button', link: 'button' },
    { name: 'VisuallyHidden', link: 'visually-hidden' },
  ],
  layouts: [{ name: 'Navbar', link: 'navbar' }],
  utilities: [{ name: 'ThemeSetter', link: 'theme-setter' }],
}
