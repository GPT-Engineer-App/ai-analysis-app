// AI-Powered Analysis App Page Component
import { Box, Container, Heading, Text, SimpleGrid, Icon, VStack } from "@chakra-ui/react";
import { FaRobot, FaChartLine, FaComments, FaNetworkWired, FaDatabase } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={5}>
        <Heading as="h1" size="2xl" textAlign="center">
          AI-Powered Analysis App
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Harness the power of AI to analyze data, interact with customers, and integrate systems seamlessly.
        </Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} py={10}>
        {/* Analysis Agents */}
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <VStack>
            <Icon as={FaChartLine} w={10} h={10} />
            <Heading size="md">Analysis Agents</Heading>
            <Text>Utilize machine learning to predict trends, optimize strategies, and enhance decision-making.</Text>
          </VStack>
        </Box>

        {/* Customer Interaction Agents */}
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <VStack>
            <Icon as={FaComments} w={10} h={10} />
            <Heading size="md">Customer Interaction Agents</Heading>
            <Text>Automate responses and guide users through processes, enhancing customer support capabilities.</Text>
          </VStack>
        </Box>

        {/* Integration Agents */}
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <VStack>
            <Icon as={FaNetworkWired} w={10} h={10} />
            <Heading size="md">Integration Agents</Heading>
            <Text>Connect disparate systems to ensure seamless data flow and communication.</Text>
          </VStack>
        </Box>

        {/* Data Processing Agents */}
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <VStack>
            <Icon as={FaDatabase} w={10} h={10} />
            <Heading size="md">Data Processing Agents</Heading>
            <Text>Automate data entry, cleansing, and formatting to boost efficiency and accuracy.</Text>
          </VStack>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default Index;
