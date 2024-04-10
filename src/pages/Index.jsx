import { Box, VStack, HStack, Heading, Text, Image, Button, Input, Icon, useColorModeValue } from "@chakra-ui/react";
import { FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Header */}
      <Box h="100vh" backgroundImage="https://images.unsplash.com/photo-1523198421516-973dc001a953?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxleGNpdGVkJTIwY3Jvd2QlMjBhdCUyMGElMjByb2NrJTIwY29uY2VydHxlbnwwfHx8fDE3MTI3MTEzNTh8MA&ixlib=rb-4.0.3&q=80&w=1080" backgroundSize="cover" backgroundPosition="center" position="relative">
        <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" textAlign="center">
          <Heading as="h1" size="4xl" color="white" textShadow="0 0 10px rgba(0,0,0,0.5)" mb={8}>
            The Band
          </Heading>
          <Button colorScheme="red" size="lg" fontWeight="bold" boxShadow="0 0 10px rgba(0,0,0,0.5)">
            Get Tickets
          </Button>
        </Box>
      </Box>

      <Box maxW="6xl" mx="auto" py={20} px={4}>
        {/* About Section */}
        <VStack align="start" spacing={8} mb={20}>
          <Heading as="h2" size="2xl">
            About The Band
          </Heading>
          <Text fontSize="xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor enim vitae eros interdum, in eleifend nisi vehicula. Donec finibus sem a nisi malesuada, vel ullamcorper risus pellentesque. Curabitur lobortis eros vel ante tincidunt, sed volutpat velit posuere.</Text>
        </VStack>

        {/* Tour Dates Section */}
        <VStack align="start" spacing={8} mb={20}>
          <Heading as="h2" size="2xl">
            Upcoming Tour Dates
          </Heading>
          <Text fontSize="xl">Tour dates coming soon!</Text>
        </VStack>

        {/* Mailing List Section */}
        <VStack align="start" spacing={8} mb={20}>
          <Heading as="h2" size="2xl">
            Join Our Mailing List
          </Heading>
          <HStack>
            <Input placeholder="Enter your email" size="lg" borderColor={useColorModeValue("gray.300", "gray.600")} />
            <Button leftIcon={<FaEnvelope />} colorScheme="red" size="lg" fontWeight="bold">
              Sign Up
            </Button>
          </HStack>
        </VStack>

        {/* Social Media Section */}
        <HStack spacing={8}>
          <Icon as={FaFacebook} w={8} h={8} />
          <Icon as={FaTwitter} w={8} h={8} />
          <Icon as={FaInstagram} w={8} h={8} />
          <Icon as={FaYoutube} w={8} h={8} />
        </HStack>
      </Box>
    </Box>
  );
};

export default Index;
