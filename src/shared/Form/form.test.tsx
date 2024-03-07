import React from 'react';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { FormBox } from './form.shared'


describe('test FormBox component', () => {

    it('render', () => {

       render(<FormBox>hello</FormBox>)

       expect(screen.getByText(/hello/i)).toBeInTheDocument()

    })

})