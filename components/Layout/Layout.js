import Navbar from "../header/NavBar";
import Footer from "../footer/Footer";
import { Container, Stack, VStack } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <>
      <Container maxW="1440px" centerContent p={0}>
        <VStack
          maxW="1440px"
          w="100vw"
          h="100vh"
          justify="center"
          alignItems="center"
        >
          <Stack>
            <Navbar />
          </Stack>
          <Stack h="100%" maxH="896px">
            <main>{children}</main>
          </Stack>
          <Stack alignContent="baseline">
            <Footer />
          </Stack>
        </VStack>
      </Container>
    </>
  );
}
