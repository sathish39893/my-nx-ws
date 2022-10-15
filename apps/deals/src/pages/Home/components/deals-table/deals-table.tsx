import { useSelector } from 'react-redux';
import DataTable from 'libs/ui/src/components/data-table/data-table';
import { getDeals } from '../../selectors/getDeals';
import { dealColumns } from './deal-columns';

export const DealsTable = () => {
  const dealsData = useSelector(getDeals);

  return <DataTable tableData={dealsData} columnsData={dealColumns} />;
};
