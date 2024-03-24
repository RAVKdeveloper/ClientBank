import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { LabelFields } from './labelFields.shared'

describe('test LabelField component', () => {
  it('render', () => {
    render(<LabelFields label={'label'} />)

    expect(screen.getByText(/label/i)).toBeInTheDocument()
  })

  it('render with link', () => {
    render(<LabelFields label={'label'} linkText={'link'} urlLink='http' />)

    expect(screen.getByText(/link/i)).toBeInTheDocument()
  })
})
