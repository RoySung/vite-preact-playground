/** @jsxImportSource preact */
import { describe, it, expect } from 'vitest'
import { h } from 'preact';
import { render } from '@testing-library/preact'
import { Router, Route } from 'preact-router'

import {App} from './app'

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Router>
        <Route path="/" component={App} />
      </Router>
    )
    expect(baseElement).toBeTruthy()
  })

  it('should have a greeting as the title', () => {
    const { getAllByText, baseElement } = render(
      <App/>
    )

    console.log('baseElement.innerHTML', baseElement.innerHTML)
    
    expect(getAllByText(/Welcome to/gi)).toBeTruthy()
  })
})
