import { render, act } from '@testing-library/react'
import '@testing-library/jest-dom'

import TComponent from '../ui/translateClient.shared'

describe('tests component', () => {
  it('render en', async () => {
    act(async () => {
      const props = { str: 'auth.form.btnText', lng: 'en' }

      render(<TComponent {...props} />)
    })
  })

  it('render ru', async () => {
    act(async () => {
      const props = { str: 'auth.form.btnText', lng: 'ru' }

      render(<TComponent {...props} />)
    })
  })
})
