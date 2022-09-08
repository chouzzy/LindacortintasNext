import { Box, Container, Flex, Grid, GridItem, Image, SimpleGrid, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import {Link as Slink} from 'react-scroll'
import { BsArrowUpCircle } from "react-icons/bs";
import {MainBanner  } from "./MainBanner";

export function Container_3() {

   return (
      <Container id='#orçamento' maxW='100vw'
      bgGradient={'linear(300deg, #fc06069c, #323c64)'} p='0' m='0' centerContent>
         <MainBanner/>
      </Container> 
   )
}