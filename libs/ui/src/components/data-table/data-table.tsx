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
import { DealProps } from '@my-nx-ws/data';

// import styles from './data-table.module.scss';

export interface ColumnProps {
  label: string;
  name: string;
}

export interface DataTableProps {
  data: DealProps[];
  columns: ColumnProps[];
}

const DataTable = ({ data, columns }: DataTableProps) => {
  const formatAmount = (amount: number) => {
    const formatter = new Intl.NumberFormat('en-UK', {
      style: 'currency',
      currency: 'GBP',
    });
    return formatter.format(amount);
  };

  return (
    <TableContainer>
      <Table variant="striped" size={'sm'}>
        <Thead>
          <Tr>
            {columns.map((column, index) => (
              <Th key={index}>{column.label}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row, index) => (
            <Tr key={index}>
              <Td>
                <Link>{row?.dealnumber}</Link>
              </Td>
              <Td>{row?.customername}</Td>
              <Td>{row?.suppliername}</Td>
              <Td>
                {row?.status === 'Urgent' ? (
                  <Tag size={'md'} variant="solid" colorScheme={'red'}>
                    <TagLeftIcon as={WarningTwoIcon} />
                    {row.status}
                  </Tag>
                ) : (
                  <Text>{row.status}</Text>
                )}
              </Td>
              <Td>{new Date(row?.datereceived || '').toLocaleString()}</Td>
              <Td isNumeric>
                {row?.amountfinanced ? formatAmount(row?.amountfinanced) : ''}
              </Td>
              <Td>
                <Tooltip label={row?.owner?.join(', ')}>
                  <AvatarGroup size="sm" max={2}>
                    {row?.owner?.map((owner, index) => (
                      <Avatar name={owner} key={index} />
                    ))}
                  </AvatarGroup>
                </Tooltip>
              </Td>
              <Td maxW={'sm'}>
                <Tooltip label={row.comments}>
                  <Text
                    textOverflow="ellipsis"
                    overflow="hidden"
                    whiteSpace="nowrap"
                  >
                    {row.comments}
                  </Text>
                </Tooltip>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
