import { Grid, Box, Square } from "@chakra-ui/react";
import IGCard from "./components/ig-card";
import InCard from "./components/in-card";
import SubsCard from "./components/subs-card";
import BlogCard from "./components/blog-card";
import AdsCard from "./components/ads-card";

const Home = () => {
  return (
    <Grid
      templateColumns={{ base: "1fr", lg: "1fr 1fr auto" }} 
      gap={1}
      padding={6}
      ml={10}
    >
      {/* Left Column for IGCard, InCard, and SubsCard */}
      <Box ml={10} >
        <Square  width="80%"> {/* Adjust width as needed */}
          <IGCard title={"Explore My Instagram!"} description={"Discover our curated collection of 500+ free animations, interaction concepts, UI designs, web templates & more."} />
        </Square>
        <Square  width="80%"> {/* Adjust width as needed */}
          <InCard title={"Explore My Linkedin!"} description={"Discover our curated collection of 500+ free animations, interaction concepts, UI designs, web templates & more."} />
        </Square>
        <Square width="80%"> 
          <SubsCard />
        </Square>
      </Box>

      {/* Middle Column for BlogCard */}
      <Box>
        <Box mb={4}>
          <BlogCard />
        </Box>

      </Box>

      {/* Right Column for AdsCard */}
      <Box>
        <AdsCard />
      </Box>
    </Grid>
  );
};

export default Home;
