import { Box, Container, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Container maxW="1440px" p={0}>
      <Stack padding="3" bg="purple.900" w="1440px" maxW="100vw" mb={0.5}>
        <Text
          alignSelf="center"
          color="gray.50"
          fontWeight="semibold"
          mt={3}
          textAlign="center"
        >
          Made with love by Mauricio Ojeda
        </Text>
      </Stack>
    </Container>
  );
};

export default Footer;
