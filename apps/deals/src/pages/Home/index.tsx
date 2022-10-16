import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import BarChart from 'libs/ui/src/components/bar-chart/bar-chart';
import { MdBarChart } from 'react-icons/md';
import {
  barChartDataConsumption,
  barChartOptionsConsumption,
} from './data/chartdata';

const Home = () => {
  const textColor = useColorModeValue('secondaryGray.500', 'white');
  return (
    <Box p={4}>
      <Heading as="h3" size="lg" mb={3}>
        Dashboard
      </Heading>

      <Box
        maxW="lg"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow={'md'}
        alignItems="center"
        flexDirection="column"
        w="100%"
      >
        <Flex align="center" w="100%" px="15px" py="10px">
          <Text
            me="auto"
            color={textColor}
            fontSize="xl"
            fontWeight="700"
            lineHeight="100%"
          >
            Weekly Revenue
          </Text>
          <Button
            alignItems="center"
            justifyContent="center"
            w="37px"
            h="37px"
            lineHeight="100%"
            borderRadius="10px"
          >
            <Icon as={MdBarChart} w="24px" h="24px" />
          </Button>
        </Flex>
        <Box h="240px" mt="auto" w="100%">
          <BarChart
            chartData={barChartDataConsumption}
            chartOptions={barChartOptionsConsumption}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
