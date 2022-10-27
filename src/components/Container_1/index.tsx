import { Box, Container, Image } from "@chakra-ui/react";
import { useEffect } from "react";
import { Stores } from "../Container_3/MainBanner/Stores";
import { Banner } from "./Banner";
import { Navbar } from "./Navbar";

export function Container_1() { 
   // useEffect( () => alert('Site em construção 🚜'),[])
   return (
      
      <>
         
         <Container id='#Home' maxW='100vw' p='0' m='0' centerContent>
            <Navbar/>
            <Stores/>
            <Banner/>
         </Container> 
      </>
   )
}