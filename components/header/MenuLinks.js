import { Box, Stack } from "@chakra-ui/react";
import MenuItem from "./MenuItem";

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
      bg={["purple.800", "purple.800", "purple.900", "purple.900"]}
      h={["500px", "500px", "100%", "100%"]}
      zIndex={2000}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["flex-start", "flex-start", "flex-end", "flex-end"]}
        direction={["column", "column", "row", "row"]}
        pt={[4, 4, 0, 0]}
        h="100%"
      >
        <MenuItem to="/">Iniciar Sesion</MenuItem>
        <MenuItem to="/register">Registrarse</MenuItem>
        <MenuItem to="/register">Registrarse</MenuItem>
        <MenuItem to="/register">Registrarse</MenuItem>
      </Stack>
    </Box>
  );
};

export default MenuLinks;
