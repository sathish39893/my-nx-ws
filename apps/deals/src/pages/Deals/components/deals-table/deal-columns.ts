import { ColumnProps } from '@my-nx-ws/data';

export const dealColumns: ColumnProps[] = [
  {
    header: 'Deal #',
    accessorKey: 'dealnumber',
  },
  {
    header: 'Customer name',
    accessorKey: 'customername',
  },
  {
    header: 'Supplier',
    accessorKey: 'suppliername',
  },
  {
    header: 'Status',
    accessorKey: 'status',
  },
  {
    header: 'Date Received',
    accessorKey: 'datereceived',
  },
  {
    header: 'Amount Financed',
    accessorKey: 'amountfinanced',
  },
  {
    header: 'Handler',
    accessorKey: 'owner',
  },
  {
    header: 'Comments',
    accessorKey: 'comments',
  },
];
