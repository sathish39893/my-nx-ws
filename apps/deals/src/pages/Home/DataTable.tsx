import { WarningTwoIcon } from '@chakra-ui/icons';
import {
  Avatar,
  AvatarGroup,
  Table,
  TableContainer,
  Tag,
  TagLeftIcon,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

import { useSelector } from 'react-redux';
import { RootState } from '../../store';

interface columnProps {
  label: string;
  name: string;
}

const DataTable = () => {
  const columns: columnProps[] = [
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
  const dealsData = useSelector((state: RootState) => state.deal);

  return (
    <TableContainer>
      <Table variant="striped" size={'sm'}>
        <Thead>
          <Tr>
            {columns.map((column) => (
              <Th>{column.label}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {dealsData.map((row) => (
            <Tr>
              <Td>{row?.dealnumber}</Td>
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
              <Td isNumeric>£ {row?.amountfinanced}</Td>
              <Td>
                <AvatarGroup size="sm" max={2}>
                  {row?.owner?.map((owner) => (
                    <Avatar name={owner} />
                  ))}
                </AvatarGroup>
              </Td>
              <Td maxW={'sm'} textOverflow="ellipsis">
                <Text noOfLines={1}>{row.comments}</Text>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
export default DataTable;
