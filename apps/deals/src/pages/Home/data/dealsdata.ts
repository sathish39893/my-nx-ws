import { DealProps } from '@my-nx-ws/data';

const dealsData: DealProps[] = [
  {
    dealnumber: 'AF002198',
    customername: 'Customer name',
    suppliername: 'Supplier name',
    status: 'Deal Next Month',
    datereceived: '2022-10-08T15:10',
    amountfinanced: 150000,
    owner: ['Sathish Panthagani', 'Tom Wat', 'Nicholas Moss'],
    comments: 'general comments for deal',
  },
  {
    dealnumber: 'AF002504',
    customername: 'Customer name',
    suppliername: 'Supplier name',
    status: 'Pay-out expected imminently',
    datereceived: '2022-09-15T14:25',
    amountfinanced: 288000,
    owner: ['Kola Tioluwani'],
    comments: 'general comments for deal',
  },
  {
    dealnumber: 'AF002536',
    customername: 'Customer name',
    suppliername: 'Supplier name',
    status: 'Getting ready to pay',
    datereceived: '2022-09-08T09:10',
    amountfinanced: 650000,
    owner: ['Sathish Panthagani'],
    comments:
      'general comments for deal , general comments for deal,  general comments for deal, general comments for deal, general comments for deal',
  },
  {
    dealnumber: 'AF002536',
    customername: 'Customer name',
    suppliername: 'Supplier name',
    status: 'Awaiting info/re-key',
    datereceived: '2022-07-08T10:12',
    amountfinanced: 650000,
    owner: ['Sathish Panthagani'],
    comments:
      'general comments for deal , general comments for deal, general comments for deal',
  },
  {
    dealnumber: 'AF002536',
    customername: 'Customer name',
    suppliername: 'Supplier name',
    status: 'Urgent',
    datereceived: '2022-07-08T10:10',
    amountfinanced: 650000,
    owner: ['Sathish Panthagani'],
    comments:
      'general comments for deal , general comments for deal, general comments for deal',
  },
];

export default dealsData;
