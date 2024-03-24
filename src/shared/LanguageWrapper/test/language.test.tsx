import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Providers } from '@/src/service/Redux/Provider/Provider'

import { LanguageWrapper } from '../language.shared'

describe('tests component', () => {
  it('render with en', () => {
    render(
      <Providers lng='en'>
        <LanguageWrapper lng='en'>hello</LanguageWrapper>
      </Providers>,
    )

    const element = screen.getByText(/hello/i)

    expect(element).toBeInTheDocument()
  })

  it('render with ru', () => {
    render(
      <Providers lng='ru'>
        <LanguageWrapper lng='ru'>привет</LanguageWrapper>
      </Providers>,
    )

    const element = screen.getByText(/привет/i)

    expect(element).toBeInTheDocument()
  })
})
