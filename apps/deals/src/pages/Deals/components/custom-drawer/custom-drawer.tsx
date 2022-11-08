import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Stack,
  FormLabel,
  Input,
  InputGroup,
  Button,
  Select,
  Textarea,
  FormControl,
  InputLeftElement,
  useToast,
} from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { COLOR_SCHEME } from '../../../../constants';
import { addDeal } from '../../dealSlice';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}
interface DealProps {
  dealnumber?: string;
  customername?: string;
  suppliername?: string;
  status?: string;
  datereceived?: string;
  amountfinanced?: number | null;
  owner?: string[];
  comments?: string;
}
const intialDealData = {
  dealnumber: '',
  customername: '',
  suppliername: '',
  status: '',
  datereceived: '',
  amountfinanced: null,
  owner: [],
  comments: '',
};

export const CustomDrawer = ({ isOpen, onClose }: Props) => {
  const [dealData, setdealData] = useState<DealProps>(intialDealData);
  const dispatch = useDispatch();
  const toast = useToast();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    if (id === 'owner') {
      const newowner = dealData?.owner;
      newowner?.push(value);
      setdealData({ ...dealData, owner: newowner });
    } else {
      setdealData({ ...dealData, [id]: value });
    }
  };

  return (
    <Drawer size={'md'} isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px">Add New Deal</DrawerHeader>

        <DrawerBody>
          <Stack spacing="24px">
            <form
              id="add-new-deal-form"
              onSubmit={(e) => {
                e.preventDefault();
                if (dealData.dealnumber) {
                  dispatch(addDeal(dealData));
                  setdealData({ ...intialDealData, owner: [] });
                  toast({
                    title: `Deal added successfully`,
                    status: 'success',
                    isClosable: true,
                  });
                  onClose();
                }
              }}
            >
              <FormControl isRequired>
                <FormLabel htmlFor="dealnumber">Deal #</FormLabel>
                <Input
                  id="dealnumber"
                  placeholder="Enter deal number"
                  onChange={(e) => handleChange(e)}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="customername">Customer Name</FormLabel>
                <Input
                  id="customername"
                  placeholder="Enter customer name"
                  onChange={(e) => handleChange(e)}
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="suppliername">Supplier Name</FormLabel>
                <Input
                  id="suppliername"
                  placeholder="Enter supplier name"
                  onChange={(e) => handleChange(e)}
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="status">Status</FormLabel>
                <Select
                  id="status"
                  defaultValue="Awaiting info/re-key"
                  onChange={(e) => handleChange(e)}
                >
                  <option value="Awaiting info/re-key">
                    Awaiting info/re-key
                  </option>
                  <option value="Urgent">Urgent</option>
                  <option value="Deal Next Month">Deal Next Month</option>
                  <option value="Pay-out expected imminently">
                    Pay-out expected imminently
                  </option>
                  <option value="Getting ready to pay">
                    Getting ready to pay
                  </option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="datereceived">Date Received</FormLabel>
                <Input
                  id="datereceived"
                  type="datetime-local"
                  placeholder="Enter date and time"
                  onChange={(e) => handleChange(e)}
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="amountfinanced">Amount Financed</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    // color="gray.500"
                    children="£"
                  />
                  <Input
                    placeholder="Enter amount"
                    id="amountfinanced"
                    type="number"
                    min={0}
                    onChange={(e) => handleChange(e)}
                  />
                </InputGroup>
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="owner">Handler</FormLabel>
                <Select
                  id="owner"
                  defaultValue="segun"
                  onChange={(e) => handleChange(e)}
                >
                  <option value="segun">Segun Adebayo</option>
                  <option value="kola">Kola Tioluwani</option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="comments">Comments</FormLabel>
                <Textarea id="comments" onChange={(e) => handleChange(e)} />
              </FormControl>
            </form>
          </Stack>
        </DrawerBody>

        <DrawerFooter borderTopWidth="1px">
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button
            type="submit"
            form="add-new-deal-form"
            colorScheme={COLOR_SCHEME}
          >
            Save
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
