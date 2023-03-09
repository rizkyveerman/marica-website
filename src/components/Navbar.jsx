import React from "react";
import Link from "next/link";
import {
  Box,
  Flex,
  Stack,
  HStack,
  Text,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import Button from "./Button";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const routes = [
  {
    pathname: "Home",
    link: "/",
  },
  {
    pathname: "Library",
    link: "/library",
  },
  {
    pathname: "Pricing",
    link: "/pricing",
  },
  {
    pathname: "Berlangganan",
    link: "/subscription",
  },
];

const Navbar = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Box maxW="1280px" p="16px">
      <Flex
        bg="#EAEFFA"
        justifyContent="space-between"
        alignItems="center"
        borderRadius="16px"
        p="8px"
      >
        <Box>
          <Text>Marica</Text>
        </Box>
        <HStack as="nav">
          {routes.map((route) => (
            <Box key={route.pathname} _hover={{ color: "#6379f2" }} p="12px">
              <Link href={route.link}>{route.pathname}</Link>
            </Box>
          ))}
        </HStack>
        <Flex p="8px" borderRadius="16px" bg="#DEE8FF" gap="8px">
          <Button type="secondary">Masuk</Button>
          <Button type="primary">Buat Akun</Button>
        </Flex>
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          onClick={isOpen ? onClose : onOpen}
          display={{ base: "inline-flex", md: "none" }}
        />
      </Flex>
      {isOpen ? (
        <Box>
          <Stack as="nav">
            {routes.map((route) => (
              <Box key={route.pathname} _hover={{ color: "#6379f2" }} p="12px">
                <Link href={route.link}>{route.pathname}</Link>
              </Box>
            ))}
          </Stack>
          <Flex p="8px" borderRadius="16px" bg="#DEE8FF" gap="8px">
            <Button type="secondary">Masuk</Button>
            <Button type="primary">Buat Akun</Button>
          </Flex>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
