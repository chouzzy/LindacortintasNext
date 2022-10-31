import { Box, Flex, SimpleGrid, GridItem, Heading, Image, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import animationData from '../../../public/animations/painter.json';
import Lottie from 'react-lottie'
import { LineItem } from "./LineItem";

export function Container_5() { 


   const lines = [
      {image:'static/img/home.png', name:'Linha imobiliária', alt:'Linha imobiliária', cols:[6,3,3,2]},
      {image:'static/img/industry.png', name:'Linha industrial', alt:'Linha industrial', cols:[6,3,3,2]},
      {image:'static/img/can.png', name:'Solventes', alt:'Solventes', cols:[6,3,3,2]},
      {image:'static/img/waterproof.png', name:'Impermeabilizantes', alt:'Impermeabilizantes', cols:[6,3,3,3]},
      {image:'static/img/paint-rollers.png', name:'Acessórios para pinturas', alt:'Acessórios para pinturas', cols:[6,6,6,3]},
   ]

   return (
      <>
      
      <Flex
      id='#nossasLinhas'
      w='100%'
      fontFamily='Heebo'
      boxShadow='lg'
      bgRepeat='repeat-x'
      flexDir="column"
      justifyContent='center'
      py={8}
      >
         <Heading fontWeight='300' textAlign='center' my={4} w='100%'>NOSSAS LINHAS</Heading>

         <SimpleGrid
         textAlign='center'
         columns={6}
         p={[4,4,4,12]}
         gap={[4,4,8,12]}
         >
            {lines.map( item => {
               return (
                  <LineItem key={item.name} LineImage={item.image} alt={item.alt} LineName={item.name} columns={item.cols}/>
               )
            })}
         </SimpleGrid>

      </Flex>
      </>
   )
}