import { Container, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "./Logo";
import MenuLinks from "./MenuLinks";
import MenuToggle from "./MenuToggle";

const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Container maxW="1440px" p={0}>
      <Stack
        as="nav"
        direction="row"
        bg="purple.900"
        h="65px"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="1440px"
        p={3}
        mb={8}
        maxW="100vw"
      >
        <Logo alignSelf="center" justify="left" />
        <MenuToggle toggle={toggle} isOpen={isOpen} />
        <MenuLinks isOpen={isOpen} />
      </Stack>
    </Container>
  );
};

export default NavBar;
