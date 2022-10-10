import { useSelector } from 'react-redux';
import DataTable from 'libs/ui/src/components/data-table/data-table';
import { DealColumnProps } from '@my-nx-ws/data';
import { getDeals } from '../../selectors/getDeals';

export const DealsTable = () => {
  const columns: DealColumnProps[] = [
    {
      label: 'Deal #',
      name: 'dealnumber',
    },
    {
      label: 'Customer name',
      name: 'customername',
    },
    {
      label: 'Supplier',
      name: 'suppliername',
    },
    {
      label: 'Status',
      name: 'dealstatus',
    },
    {
      label: 'Date Received',
      name: 'datereceived',
    },
    {
      label: 'Amount Financed',
      name: 'amountfinanced',
    },
    {
      label: 'Handler',
      name: 'owner',
    },
    {
      label: 'Comments',
      name: 'comments',
    },
  ];
  const dealsData = useSelector(getDeals);

  return <DataTable data={dealsData} columns={columns} />;
};
