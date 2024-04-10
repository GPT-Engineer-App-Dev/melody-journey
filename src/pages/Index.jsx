import { Box, Heading, Text, Image, Button, Link, Flex, Input, Stack, AspectRatio } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="black" color="white" textAlign="center" py={20}>
      {/* Header */}
      <Box bgImage="https://images.unsplash.com/photo-1574517858464-7bfc583d16e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZWQlMjBob3QlMjBjaGlsaSUyMHBlcHBlcnMlMjBjb25jZXJ0fGVufDB8fHx8MTcxMjcxMTQyNHww&ixlib=rb-4.0.3&q=80&w=1080" bgPosition="center" bgSize="cover" py={40}>
        <Image src="https://images.unsplash.com/photo-1530290634303-ec5bd373e292?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZWQlMjBob3QlMjBjaGlsaSUyMHBlcHBlcnMlMjBsb2dvfGVufDB8fHx8MTcxMjcxMTQyNHww&ixlib=rb-4.0.3&q=80&w=1080" alt="RHCP Logo" maxW="400px" mx="auto" />
        <Heading as="h1" size="3xl" mt={8}>
          Red Hot Chili Peppers
        </Heading>
        <Heading as="h2" size="xl" fontWeight="normal">
          World Tour 2023
        </Heading>
      </Box>

      {/* Upcoming Tour Dates */}
      <Box bg="red.600" py={20}>
        <Heading size="2xl" mb={8}>
          Upcoming Tour Dates
        </Heading>
        <Flex justify="center" gap={8} wrap="wrap">
          <Box>
            <Heading size="lg">City</Heading>
            <Text fontSize="2xl">Date</Text>
          </Box>
          <Box>
            <Heading size="lg">City</Heading>
            <Text fontSize="2xl">Date</Text>
          </Box>
          <Box>
            <Heading size="lg">City</Heading>
            <Text fontSize="2xl">Date</Text>
          </Box>
        </Flex>
        <Button colorScheme="black" size="lg" mt={12}>
          See All Dates
        </Button>
      </Box>

      {/* Music Video */}
      <AspectRatio maxW="560px" ratio={16 / 9} mx="auto" my={20}>
        <iframe src="https://www.youtube.com/embed/YlUKcNNmywk" title="YouTube video player" allowFullScreen />
      </AspectRatio>

      {/* About */}
      <Box maxW="3xl" mx="auto" mb={20}>
        <Heading size="xl" mb={4}>
          About Red Hot Chili Peppers
        </Heading>
        <Text fontSize="lg">The Red Hot Chili Peppers are an American rock band formed in Los Angeles in 1983. Their music incorporates elements of alternative rock, funk, punk rock and psychedelic rock. The band's lineup includes Anthony Kiedis (lead vocals), Flea (bass), Chad Smith (drums) and John Frusciante (guitar). One of the best-selling bands of all time, the Red Hot Chili Peppers have sold over 100 million records worldwide.</Text>
      </Box>

      {/* Mailing List */}
      <Box maxW="md" mx="auto" mb={20}>
        <Heading size="xl" mb={4}>
          Join Our Mailing List
        </Heading>
        <Stack direction={["column", "row"]}>
          <Input placeholder="Enter email" bg="white" color="black" borderRadius={0} />
          <Button colorScheme="red" borderRadius={0} px={8} type="submit">
            Sign Up
          </Button>
        </Stack>
      </Box>

      {/* Social Links */}
      <Flex justify="center" gap={8} mb={8}>
        <Link href="#" isExternal>
          <FaFacebook size={32} />
        </Link>
        <Link href="#" isExternal>
          <FaTwitter size={32} />
        </Link>
        <Link href="#" isExternal>
          <FaInstagram size={32} />
        </Link>
        <Link href="#" isExternal>
          <FaYoutube size={32} />
        </Link>
      </Flex>

      <Text>&copy; 2023 Red Hot Chili Peppers. All rights reserved.</Text>
    </Box>
  );
};

export default Index;
