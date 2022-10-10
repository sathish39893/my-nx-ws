import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { CustomDrawer, DealsTable } from './components';
import { COLOR_SCHEME } from '../../constants';

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box p={4}>
      <Heading as="h3" size="lg">
        Deals
      </Heading>
      <Box p={2}>
        <Flex direction={'row'} justifyContent="flex-end">
          <Stack direction="row" spacing={2}>
            <Button size="md" colorScheme={COLOR_SCHEME} onClick={onOpen}>
              Add Deal
            </Button>
          </Stack>
        </Flex>
      </Box>
      <Box borderWidth="1px" borderRadius="lg" p={2}>
        <DealsTable />
      </Box>

      <CustomDrawer isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default Home;
