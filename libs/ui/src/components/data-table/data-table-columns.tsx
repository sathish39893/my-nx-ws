import { InfoIcon, WarningTwoIcon } from '@chakra-ui/icons';
import {
  Avatar,
  AvatarGroup,
  Flex,
  Link,
  Tag,
  TagLeftIcon,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import { createColumnHelper } from '@tanstack/react-table';
import React from 'react';

type Deal = {
  dealnumber?: string;
  customername?: string;
  suppliername?: string;
  status?: string;
  datereceived?: string;
  amountfinanced?: number | null;
  owner?: string[];
  comments?: string;
};

const columnHelper = createColumnHelper<Deal>();

const formatAmount = (amount: number) => {
  const formatter = new Intl.NumberFormat('en-UK', {
    style: 'currency',
    currency: 'GBP',
  });
  return formatter.format(amount);
};

const columns = [
  columnHelper.accessor('dealnumber', {
    id: 'dealnumber',
    header: () => <Text>Deal #</Text>,
    cell: (info: any) => (
      <Flex align="center">
        <Text>
          <Link>{info.getValue()}</Link>
        </Text>
      </Flex>
    ),
  }),
  columnHelper.accessor('customername', {
    id: 'customername',
    header: () => <Text>Customer Name</Text>,
    cell: (info: any) => <Text>{info.getValue()}</Text>,
  }),
  columnHelper.accessor('suppliername', {
    id: 'suppliername',
    header: () => <Text>Supplier Name</Text>,
    cell: (info: any) => <Text>{info.getValue()}</Text>,
  }),
  columnHelper.accessor('status', {
    id: 'status',
    header: () => <Text>Status</Text>,
    cell: (info: any) => (
      <Tag
        size={'md'}
        variant="solid"
        colorScheme={info.getValue() === 'Urgent' ? 'red' : 'blue'}
      >
        <TagLeftIcon
          as={info.getValue() === 'Urgent' ? WarningTwoIcon : InfoIcon}
        />
        {info.getValue()}
      </Tag>
    ),
  }),
  columnHelper.accessor('datereceived', {
    id: 'datereceived',
    header: () => <Text>Date Received</Text>,
    cell: (info: any) => (
      <Text>{new Date(info.getValue().toString() || '').toLocaleString()}</Text>
    ),
  }),
  columnHelper.accessor('amountfinanced', {
    id: 'amountfinanced',
    header: () => <Text>Amount Financed</Text>,
    cell: (info: any) => <Text>{formatAmount(Number(info.getValue()))}</Text>,
  }),
  columnHelper.accessor('owner', {
    id: 'owner',
    header: () => <Text>Owner</Text>,
    cell: (info: any) => (
      <Tooltip label={info.getValue()}>
        <AvatarGroup size="sm" max={2}>
          {info.getValue().map((owner: string, index: React.Key) => (
            <Avatar name={owner} key={index} />
          ))}
        </AvatarGroup>
      </Tooltip>
    ),
  }),
  columnHelper.accessor('comments', {
    id: 'comments',
    header: () => <Text>Comments</Text>,
    cell: (info: any) => (
      <Tooltip label={info.getValue().toString()}>
        <Text textOverflow="ellipsis" overflow="hidden" whiteSpace="nowrap">
          {info.getValue()}
        </Text>
      </Tooltip>
    ),
  }),
];

export default columns;
