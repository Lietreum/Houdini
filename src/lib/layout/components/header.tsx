import { Box, Flex, Text, IconButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import Gojo from "../../../assets/gojoblue.png";

export const Header = () => {
  return (
    <Flex
      as="header"
      position="absolute" // Ensures it stays at the top
      top={0} // Aligns to the top of the page
      left={0} // Aligns to the left of the page
      width="full"
      align="center" // Aligns items to the start vertically
      justifyContent="flex-start" // Aligns items to the left
      px={20}
      py={3}
    >
      {/* Logo Section */}
      <Link to="/" style={{ textDecoration: "none" }}>
        <Box display="flex" alignItems="center">
          <Box
            display="flex"
            alignItems="center"
            marginRight="10px"
            transition="transform 0.2s"
            _hover={{ transform: "scale(1.05)" }}
          >
            <img src={Gojo} alt="Gojo Icon" width="40px" height="40px" />
          </Box>
          <h1>
            <strong>Zeke Craftz</strong>
          </h1>
        </Box>
      </Link>

      {/* Navigation Links */}
      <Flex align="center" gap={6} ml={20}>
        <Link to="">
          <Text
            fontWeight="bold"
            fontSize="sm"
            _hover={{
              textDecoration: "underline",
              textDecorationThickness: "2px",
              textUnderlineOffset: "2px",
            }}
          >
            All Posts
          </Text>
        </Link>

        <Link to="/certificates" style={{ textDecoration: "none" }}>
          <Text
            fontWeight="bold"
            fontSize="sm"
            _hover={{
              textDecoration: "underline",
              textDecorationThickness: "2px",
              textUnderlineOffset: "2px",
            }}
          >
            Demos
          </Text>
        </Link>

        <Link to="/certificates" style={{ textDecoration: "none" }}>
          <Text
            fontWeight="bold"
            fontSize="sm"
            _hover={{
              textDecoration: "underline",
              textDecorationThickness: "2px",
              textUnderlineOffset: "2px",
            }}
          >
            Newsletter
          </Text>
        </Link>

        {/* GitHub Link */}
        <Link to="https://github.com/Lietreum" target="_blank">
          <Flex align="center" gap={1}>
            <IconButton
              as={AiFillGithub}
              aria-label="GitHub Source"
              variant="plain"
              boxSize={6}
              _hover={{ color: "teal.500" }}
            />
            <Text
              fontWeight="bold"
              fontSize="sm"
              _hover={{
                textDecoration: "underline",
                textDecorationThickness: "2px",
                textUnderlineOffset: "2px",
              }}
            >
              Source
            </Text>
          </Flex>
        </Link>
      </Flex>

      {/* Search Section */}
      <Box marginLeft="auto">
        <a href="/gateaway ">Create</a>
        </Box>
    </Flex>
  );
};
