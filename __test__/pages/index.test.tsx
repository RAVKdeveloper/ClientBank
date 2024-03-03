import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Home from '@/app/page';

  
describe('testing render', () => {
    it('should reender', () => {
        render(<Home/>)
    })
})