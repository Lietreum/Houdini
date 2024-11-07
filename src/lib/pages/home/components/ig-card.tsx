import { Box, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

interface CardProps {
  title: string;
  description: string;
}

const IGCard: React.FC<CardProps> = ({ title, description }) => {
  return (
    <Box
      className="ig-box"
      mb="2rem"
      bg="white"
      p="2rem 1.75rem"
      borderRadius="lg"  
      border="1px solid #727272"
      display="flex"
      flexDirection="column"
      minHeight="100px"
      w={400}
    >
      <Text fontWeight="bold" fontSize="xl" mb={3}>
        {title}
      </Text>
      <Text fontSize="md" color="gray.600" mb={3}>
        {description}
      </Text>
      <Link
        as={RouterLink}
        {...{ to: "https://www.instagram.com/zekestuffs/" }}
        target="_blank"                // Opens link in a new tab
        rel="noopener noreferrer"      // Security best practice
         fontSize="sm"
        fontWeight="medium"
        color="teal.500"
        _hover={{
          textDecoration: "underline",
          textDecorationThickness: "2px",
          textUnderlineOffset: "2px",
        }}
        _active={{
          textDecoration: "none", // Removes the hover effect when clicked
        }}
        _focus={{
            outline: "none", // Removes the outline when focused (tabbing)
        }}
      >
        Start exploring &rarr;
      </Link>
    </Box>
  );
};

export default IGCard;
