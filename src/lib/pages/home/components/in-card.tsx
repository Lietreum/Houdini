import { Box, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import backgroundImage from '../../../../assets/coop.webp';

interface WotwBoxProps {
  title: string;
  description: string;
}



const WotwBox: React.FC<WotwBoxProps> = ({ title, description }) => {
  return (
    <Box
      mb={{ base: "1rem", md: "2rem" }}  
      p={{ base: "1.5rem", md: "2rem 1.75rem" }} 
      borderRadius="lg"
      border="1px solid #727272"
      display="flex"
      flexDirection="column"
      minH="225px"
      w={{ base: "100%", sm: "90%", md: 400 }}  
      maxW="500px"
      position="relative"
      overflow="hidden"
      backgroundSize={{ base: "200%", md: "180%" }}  
      backgroundImage={`linear-gradient(to bottom, rgba(11, 12, 14, 0.55) 0%, #27272ba1 200px), url(${backgroundImage})`}
      backgroundRepeat="no-repeat"
      backgroundPosition="54% 0%"
    >
      <Text color="white" fontWeight="bold" fontSize={{ base: "lg", md: "xl" }} mb={3}>
        {title}
      </Text>
      <Text fontSize={{ base: "sm", md: "md" }} color="white" mb={3}>
        {description}
      </Text>
      <Link
        as={RouterLink} 
        {...{ to: "https://www.instagram.com/zekestuffs/" }}
        target="_blank"                // Opens link in a new tab
        rel="noopener noreferrer"      // Security best practice
        fontSize={{ base: "xs", md: "sm" }}
        fontWeight="medium"
        color="teal.500"
        _hover={{
          textDecoration: "underline",
          textDecorationThickness: "2px",
          textUnderlineOffset: "2px",
        }}
        _active={{
          textDecoration: "none",
        }}
        _focus={{
          outline: "none",
        }}
      >
        Start exploring &rarr;
      </Link>
    </Box>
  );
};

export default WotwBox;
