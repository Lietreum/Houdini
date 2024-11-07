import { useState } from "react";
import { Box, Input, Button, Text, Link, HStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import emailjs from "emailjs-com";

const SubscribeCard = () => {
  const [email, setEmail] = useState("");
  const [, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccessMessage(null);

    try {
      const templateParams = {
        email: email,
      };

      // Send email via EmailJS service
      await emailjs.send(
        "service_fqq50ps", // Your service ID
        "template_1hpkjde", // Your template ID
        templateParams,
        "9b5XUPhEGPy8UdsWe" // Your public key
      );

      setEmail(""); // Clear input on success
      setSuccessMessage("Subscription successful! Check your inbox for updates."); // Show success message
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      mb="2rem"
      bg="rgb(197, 204, 247)"
      p="2rem 1.75rem"
      borderRadius="md"
      border="1px solid #727272"
      display="flex"
      flexDirection="column"
      minH="225px"
      maxW="500px"
      mx="auto"
      w={{ base: "100%", sm: "90%", md: 400 }}
      boxShadow="0px 10px 0px -5px rgba(0, 0, 0, 0.1), 0px 11px 0px -5px rgba(0, 0, 0, 0.4)"
      textAlign="center"
    >
      <Text fontWeight="bold" fontSize="xl" mb="1rem">
        Fresh frontend news plus dev & design inspiration delivered to your inbox
      </Text>
      <Text fontSize="md" mb="1rem">
        👾 <strong>Hey! Looking for the latest in frontend?</strong> Twice a week, we'll deliver the freshest frontend news, website inspo, cool code demos, videos, and UI animations right to your inbox.
      </Text>
      <Text fontSize="md" mb="1.5rem">
        <strong>Zero fluff, all quality,</strong> to make your Mondays and Thursdays more creative!
      </Text>

      <form onSubmit={handleSubmit}>
        <HStack
          borderRadius="full"
          overflow="hidden"
          bg="white"
          alignItems="center"
          spaceX={0}
        >
          <Input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={handleEmailChange}
            _placeholder={{ color: "gray.500", pr: "1rem" }}
            required
            flex="1"
            border="none"
            borderRadius="full"
            _focus={{ outline: "none" }}
            pl="1.5rem"
            bg="white"
          />
          <Button
            type="submit"
            bg="black"
            color="white"
            borderRadius="0"
            px="2rem"
            _hover={{ bg: "gray.800" }}
          >
            Subscribe
          </Button>
        </HStack>
      </form>

      {error && (
        <Text color="red.500" mt="1rem">
          {error}
        </Text>
      )}

      {successMessage && (
        <div style={successAlertStyle}>
          <Text color="white" fontWeight="bold" fontSize="md">
            {successMessage}
          </Text>
        </div>
      )}

      <Link
        as={RouterLink}
        {...{ to: "https://www.instagram.com/zekestuffs/" }}
        fontSize="sm"
        fontWeight="medium"
        color="black"
        _hover={{ textDecoration: "underline" }}
        alignSelf="flex-start"
        pt="1.5rem"
      >
        Find out more &rarr;
      </Link>
    </Box>
  );
};

// Custom success alert styles
const successAlertStyle: React.CSSProperties = {
  backgroundColor: "#4CAF50", // Green background
  color: "white",
  padding: "0.75rem 1.5rem",
  borderRadius: "8px",
  marginTop: "1rem",
  fontWeight: "bold",
  textAlign: "center",
};

export default SubscribeCard;
