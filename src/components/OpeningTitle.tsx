import { Heading, VStack, Text } from "@chakra-ui/react";

const OpeningTitle = () => {
  return (
    <VStack h="100%" justifyContent="center" spacing={4} align="flex-start">
      <Heading
        as="h1"
        fontSize={{ base: "3xl", md: "4xl", lg: "6xl" }}
        color="brand.600"
        fontWeight="bold"
        bgGradient="linear(to-r, brand.500, brand.900)"
        bgClip="text"
      >
        Latest Movies at a Glance
      </Heading>
      <Text>
        Discover the latest movies, read ratings and descriptions, and find
        exactly what you're looking for!
      </Text>
    </VStack>
  );
};
export default OpeningTitle;
