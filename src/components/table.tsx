import {
  FaSort as SortIcon,
  FaSortUp as SortUpIcon,
  FaSortDown as SortDownIcon,
} from 'react-icons/fa';
import * as React from 'react';
import { Card } from './card';
import cx from 'classnames';

const TableImpl = function Table(
  props: React.ComponentPropsWithoutRef<'table'>
) {
  return (
    <Card>
      <table {...props} className={cx('w-full', props.className)} />
    </Card>
  );
};

const TableHead = (props: React.ComponentPropsWithoutRef<'thead'>) => (
  <thead {...props} className={cx('bg-gray-50', props.className)} />
);

const TableBody = (props: React.ComponentPropsWithoutRef<'tbody'>) => (
  <tbody {...props} />
);

const TableRow = (props: React.ComponentPropsWithoutRef<'tr'>) => (
  <tr {...props} className={cx('even:bg-gray-50', props.className)} />
);

interface TableHeadingProps extends React.ComponentPropsWithoutRef<'th'> {
  /**
   * name to be used to provide an accessible name for the column
   */
  columnName?: string;
  onSort?: () => void;
  sortOrder?: 'asc' | 'desc';
  isSortKey?: boolean;
}

const TableHeading = ({
  onSort,
  sortOrder,
  isSortKey,
  children,
  columnName,
  ...props
}: TableHeadingProps) => (
  <th
    {...props}
    className={cx(
      'text-xs px-4 py-4 border-b border-gray-300 font-medium text-gray-500 uppercase',
      (!props.className || !props.className.includes('text-right')) &&
        'text-left',
      props.className
    )}
  >
    {children}
    {onSort && (
      <button
        onClick={onSort}
        className="p-px ml-2 rounded-full focus:outline-none focus-visible:ring-1 focus-visible:ring-gray-500"
        aria-label={columnName ? `Sort by ${columnName}` : 'Sort'}
        type="button"
      >
        {isSortKey ? (
          sortOrder === 'asc' ? (
            <SortDownIcon />
          ) : (
            <SortUpIcon />
          )
        ) : (
          <SortIcon />
        )}
      </button>
    )}
  </th>
);

const TableCell = (props: React.ComponentPropsWithoutRef<'td'>) => (
  <td {...props} className={cx('text-sm px-4 py-3.5', props.className)} />
);

export const Table = Object.assign(TableImpl, {
  Head: TableHead,
  Body: TableBody,
  Tr: TableRow,
  Th: TableHeading,
  Td: TableCell,
});
