import { render, screen, cleanup } from '@testing-library/react';
import { describe, it, afterEach, expect } from 'vitest'
import Repeater from './';
import '@testing-library/jest-dom'

afterEach(() => cleanup())

describe('Repeater', () => {
  it('renders items', () => {
    const items = ['item1', 'item2', 'item3'];

    render(
      <Repeater
        items={items}
        renderItem={(item, index) => <div key={index}>{item}</div>}
        renderEmpty={() => <div>No items to display</div>}
      />
    );

    items.forEach(item => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it('renders empty state', () => {
    const items: string[] = [];

    render(
      <Repeater
        items={items}
        renderItem={(item, index) => <div key={index}>{item}</div>}
        renderEmpty={() => <div>No items to display</div>}
      />
    );

    expect(screen.getByText('No items to display')).toBeInTheDocument();
  });

  it('renders even when empty state is not defined', () => {
    const items: string[] = []
    render(<Repeater items={items} renderItem={(item) => <div>{item}</div>}  />)
    expect(document.body.innerHTML).toBe("<div></div>")
  })
});
