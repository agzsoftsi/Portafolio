import React from "react";
import { Box } from "@chakra-ui/react";

import SectionContainer from "./Sections/SectionsContainer";

export default function View2DPage() {
  return (
    <Box
      minH="100vh"
      transition="all 0.3s ease"
      paddingTop="100px"
      fontFamily="Raleway"
    >
      <SectionContainer />
    </Box>
  );
}
