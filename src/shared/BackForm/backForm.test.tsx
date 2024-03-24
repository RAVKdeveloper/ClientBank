import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { BackForm } from './backForm.shared'

describe('tests BackForm', () => {
  it('render', () => {
    render(
      <BackForm
        image={
          'https://esa-res.online.sberbank.ru/CMS/PRELOGINBANNERS/images/default/slide2_19122023.jpg'
        }
      >
        hello
      </BackForm>,
    )

    expect(screen.getByText(/hello/i)).toBeInTheDocument()
  })
})
