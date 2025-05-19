import { Grid, Box, Square } from "@chakra-ui/react";
import IGCard from "./components/ig-card";
import InCard from "./components/in-card";
import SubsCard from "./components/subs-card";
// import BlogCard from "./components/blog-card";
import AdsCard from "./components/ads-card";
import React, { Suspense } from "react";
const BlogCard = React.lazy(() => import("./components/blog-card"));

const Home = () => {
  return (
    <Grid
      templateColumns={{ base: "1fr", lg: "1fr 1fr auto" }}
      gap={1}
      padding={6}
      ml={10}
    >
      {/* Left Column for IGCard, InCard, and SubsCard */}
      <Box ml={10}>
        <Square width="80%">
          {" "}
          {/* Adjust width as needed */}
          <IGCard
            title={"Explore My Projects!"}
            description={
              "Here’s a bunch of random stuff I built while avoiding real responsibilities. Might be useful, might crash your browser. Who knows? "
            }
          />
        </Square>
        <Square width="80%">
          {" "}
          {/* Adjust width as needed */}
          <InCard
            title={"Explore My Design Playground"}
            description={
              "I mess around with colors and pixels. Sometimes it looks cool. Sometimes it doesn't. But hey, at least it's original."
            }
          />
        </Square>
        <Square width="80%">
          <SubsCard />
        </Square>
      </Box>

      {/* Middle Column for BlogCard */}
      <Box>
        <Box mb={4}>
          <Suspense fallback={<div>Loading...</div>}>
            <BlogCard />
          </Suspense>
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
