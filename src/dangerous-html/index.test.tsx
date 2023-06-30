import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import DangerousHTML from '.'

describe('HTML-Embed test', () => {
  test('Should render html-embed', () => {
    render(<DangerousHTML html={'<div> Hello world </div>'} />)
    expect(screen.getByText('Hello world')).toBeDefined()
  })

  test('Does not render if no html is passed', () => {
    render(<DangerousHTML html={''} />)
    expect(document.body.innerHTML).toBe('<div><div style="display: contents;"></div></div>')
  })
})