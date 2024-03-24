import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

import { act } from 'react-dom/test-utils'

import { Providers } from '@/src/service/Redux/Provider/Provider'

import { AuthForm } from '../authForm.entity'

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
    }
  },
}))

const onChange = jest.fn()

describe('test authForm component', () => {
  it('render with ru', () => {
    act(async () => {
      render(
        <Providers lng='ruL'>
          <AuthForm />
        </Providers>,
      )
    })
  })

  it('render with en', () => {
    act(async () => {
      render(
        <Providers lng='enL'>
          <AuthForm />
        </Providers>,
      )
    })
  })

  it('onChange events', async () => {
    await act(async () => {
      render(
        <Providers lng='ruL'>
          <AuthForm />
        </Providers>,
      )

      // await userEvent.type(screen.getByRole('textbox'), 'Next js and ts')
      await userEvent.click(screen.getByRole('button'))
    })
  })
})
