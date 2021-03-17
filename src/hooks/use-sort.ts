import * as React from 'react';
import { sortArray } from 'lib/array';

export const useSort = <Item extends object, Keys extends keyof Item & string>(
  items: Array<Item>,
  defaultSortCriteria: SortKeyState<Keys>
) => {
  const [state, dispatch] = React.useReducer(
    sortKeyReducer,
    defaultSortCriteria
  );

  const { order, key } = state as SortKeyState<Keys>;

  const sortedItems = React.useMemo(() => {
    return sortArray(items, key, order);
  }, [items, order, key]);

  return {
    order,
    key,
    sortedItems,
    sortBy: (key: Keys) =>
      dispatch({
        type: 'sort',
        key,
      }),
  };
};

interface SortKeyState<Keys extends string> {
  key: Keys;
  order: 'desc' | 'asc';
}

type SortKeyAction<Keys extends string> = {
  type: 'sort';
  key: Keys;
};

const sortKeyReducer = <Keys extends string>(
  state: SortKeyState<Keys>,
  action: SortKeyAction<Keys>
): SortKeyState<Keys> => {
  if (state.key === action.key) {
    return {
      ...state,
      order: state.order === 'asc' ? 'desc' : 'asc',
    };
  } else {
    return {
      key: action.key,
      order: 'asc',
    };
  }
};
