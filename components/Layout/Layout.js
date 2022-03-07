import Navbar from "../header/NavBar";
import Footer from "../footer/Footer";
import { Container } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <>
      <Container maxW="container.xl" centerContent p={0}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </Container>
    </>
  );
}
