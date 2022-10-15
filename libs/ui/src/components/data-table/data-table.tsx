import { WarningTwoIcon } from '@chakra-ui/icons';
import {
  Avatar,
  AvatarGroup,
  Link,
  Table,
  TableContainer,
  Tag,
  TagLeftIcon,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
} from '@chakra-ui/react';
import { ColumnProps, DealProps } from '@my-nx-ws/data';
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useMemo } from 'react';

// import styles from './data-table.module.scss';

export type DataTableProps = {
  tableData: DealProps[];
  columnsData: ColumnProps[];
};

const DataTable = ({ tableData, columnsData }: DataTableProps) => {
  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const formatAmount = (amount: number) => {
    const formatter = new Intl.NumberFormat('en-UK', {
      style: 'currency',
      currency: 'GBP',
    });
    return formatter.format(amount);
  };
  const tableInstance = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const { getHeaderGroups, getRowModel } = tableInstance;

  return (
    <TableContainer>
      <Table variant="striped" size={'sm'}>
        <Thead>
          {getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody>
          {getRowModel().rows.map((row) => (
            <Tr key={row.id}>
              {row.getVisibleCells().map((cell) => {
                let data = flexRender(
                  cell.column.columnDef.cell,
                  cell.getContext()
                );
                const cellValue = cell.getValue();
                const columnName = cell.column.columnDef.header
                  ?.toString()
                  .toLocaleLowerCase();
                if (columnName === 'status' && cellValue === 'Urgent') {
                  data = (
                    <Tag size={'md'} variant="solid" colorScheme={'red'}>
                      <TagLeftIcon as={WarningTwoIcon} />
                      {cellValue?.toString()}
                    </Tag>
                  );
                }
                if (columnName === 'deal #') {
                  data = <Link>{cellValue?.toString()}</Link>;
                }
                if (columnName === 'amount financed') {
                  data = formatAmount(Number(cellValue));
                }
                if (columnName === 'date received') {
                  data = new Date(cellValue?.toString() || '').toLocaleString();
                }
                if (columnName === 'handler') {
                  data = (
                    <Tooltip label={cellValue?.toString()}>
                      <AvatarGroup size="sm" max={2}>
                        {cellValue
                          ?.toString()
                          ?.split(', ')
                          .map((owner, index) => (
                            <Avatar name={owner} key={index} />
                          ))}
                      </AvatarGroup>
                    </Tooltip>
                  );
                }
                if (columnName === 'comments') {
                  data = (
                    <Tooltip label={cellValue?.toString()}>
                      <Text
                        textOverflow="ellipsis"
                        overflow="hidden"
                        whiteSpace="nowrap"
                      >
                        {cellValue?.toString()}
                      </Text>
                    </Tooltip>
                  );
                }
                return (
                  <Td key={cell.id} maxW={'sm'}>
                    {data}
                  </Td>
                );
              })}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
