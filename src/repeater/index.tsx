interface RepeaterProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => JSX.Element;
  renderEmpty?: () => JSX.Element;
}

const Repeater = <T extends unknown>(props: RepeaterProps<T>) => {
  const { items, renderItem, renderEmpty } = props;

  if (items.length === 0) {
    return renderEmpty ? renderEmpty() : null;
  } else {
    return (
      <>
        {items.map((item, index) => renderItem(item, index))}
      </>
    );
  }
};

export default Repeater
