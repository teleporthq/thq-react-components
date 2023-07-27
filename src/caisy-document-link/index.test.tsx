import { describe, expect, test, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import DocumentLink from '.'
import { RichTextRenderer } from "@caisy/rich-text-react-renderer"
// import { RichTextRenderer } from '@caisy/rich-text-react-renderer'
import { CONTENT_JSON } from './constants'

afterEach(() => cleanup())

describe('Document Link test', () => {
  test('Should render rich text content', () => {
    render(
      <RichTextRenderer
        node={CONTENT_JSON.content.json}
        overwrites={{documentLink: DocumentLink}}
      />)
    // expect(screen.getByText('Heading')).toBeDefined()
  })

  // test('Should render given format', () => {
  //   render(<DateTimePrimitive date="2021-03-01" format="MM-DD-YYYY" />)
  //   expect(screen.getByText('03-01-2021')).toBeDefined()
  // })

  // test('Should handle invalid date', () => {
  //   render(
  //     <DateTimePrimitive date="invalid date content" format="MM-DD-YYYY" />
  //   )
  //   expect(screen.getByText('Invalid Date')).toBeDefined()
  // })

  // test('Should handle invalid format', () => {
  //   render(<DateTimePrimitive date="2021-03-01" format="invalid format" />)
  //   expect(screen.getByText('invamli1 for0amt')).toBeDefined()
  // })
})