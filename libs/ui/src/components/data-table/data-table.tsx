import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import {
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Icon,
} from '@chakra-ui/react';
import { ColumnProps, DealProps } from '@my-nx-ws/data';
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import { useMemo, useState } from 'react';
import columns from './data-table-columns';
import { MdFirstPage, MdLastPage } from 'react-icons/md';

// import styles from './data-table.module.scss';

export type DataTableProps = {
  tableData: DealProps[];
  columnsData: ColumnProps[];
};

const DataTable = ({ tableData }: DataTableProps) => {
  const data = useMemo(() => tableData, [tableData]);
  const [sorting, setSorting] = useState<SortingState>([]);

  const tableInstance = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
    onSortingChange: setSorting,
  });

  const {
    getHeaderGroups,
    getRowModel,
    setPageIndex,
    previousPage,
    nextPage,
    getCanNextPage,
    getCanPreviousPage,
    getPageCount,
  } = tableInstance;

  return (
    <Box>
      <TableContainer>
        <Table variant="striped" size={'sm'}>
          <Thead>
            {getHeaderGroups().map((headerGroup) => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <Th
                    key={header.id}
                    colSpan={header.colSpan}
                    cursor="pointer"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {{
                      asc: '',
                      desc: '',
                    }[header.column.getIsSorted() as string] ?? null}
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody>
            {getRowModel().rows.map((row) => (
              <Tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <Td key={cell.id} maxW={'sm'}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </Td>
                  );
                })}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Box mt="2" display="flex" flexDirection="row" justifyContent="flex-end">
        <ButtonGroup size="sm" isAttached>
          <Button
            onClick={() => setPageIndex(0)}
            disabled={!getCanPreviousPage()}
          >
            <Icon as={MdFirstPage} aria-label="First"></Icon>
          </Button>
          <IconButton
            icon={<ChevronLeftIcon />}
            aria-label="Previous"
            disabled={!getCanPreviousPage()}
            onClick={() => previousPage()}
          />
          <IconButton
            icon={<ChevronRightIcon />}
            aria-label="Next"
            disabled={!getCanNextPage()}
            onClick={() => nextPage()}
          />
          <Button
            disabled={!getCanNextPage()}
            onClick={() => setPageIndex(getPageCount() - 1)}
          >
            <Icon as={MdLastPage} aria-label="Last"></Icon>
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
};

export default DataTable;
