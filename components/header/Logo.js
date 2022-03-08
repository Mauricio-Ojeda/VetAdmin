import { Stack, Text } from "@chakra-ui/react";

export default function Logo(props) {
  return (
    <Stack direction="row" {...props} spacing={0}>
      <Text color="pink.300" fontSize="lg" fontWeight="bold" p={0}>
        V
      </Text>
      <Text color="gray.50" fontSize="lg" fontWeight="bold">
        et
      </Text>
      <Text color="pink.300" fontSize="lg" fontWeight="bold">
        A
      </Text>
      <Text color="gray.50" fontSize="lg" fontWeight="bold">
        dmin
      </Text>
    </Stack>
  );
}
