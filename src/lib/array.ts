export const sortArray = <Item extends object>(
  array: Array<Item>,
  sortKey: keyof Item,
  order: 'asc' | 'desc'
): Array<Item> => {
  const result = array.slice();

  result.sort((a, b) => {
    const aValue = a[sortKey];
    const bValue = b[sortKey];

    let result = 0;

    if (aValue < bValue) {
      result = -1;
    }
    if (aValue > bValue) {
      result = 1;
    }

    return order === 'asc' ? result : -result;
  });

  return result;
};
