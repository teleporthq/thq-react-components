import Repeater from './';
import { render, screen } from '@testing-library/react';

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
});
