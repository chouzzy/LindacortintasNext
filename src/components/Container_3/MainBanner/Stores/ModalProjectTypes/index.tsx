import { Box, Button, Collapse, Container, Flex, Grid, GridItem, HStack, Image, List, ListIcon, ListItem, ScaleFade, SlideFade, Text, useBreakpointValue, useDisclosure, VStack } from "@chakra-ui/react";
import { BsChevronDoubleDown } from "react-icons/bs";
import { MdCheckCircle } from "react-icons/md";
import { ServiceListItem } from "./ServiceListItem";
import animationData from "../../../../../../public/animations/production.json";
import Lottie from 'react-lottie'

export function ModalProjectTypes(Props) { 
   const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    }
   return (
      <>
         <Grid w='100%' justifyContent='center' p={0}>

            <GridItem mx='auto'>
               <Button fontSize='1.4rem' bg='none'p={0} color='datGreen' _hover={{color:'datBlue', transition:'200ms'}} onClick={Props.modal.onToggle}>
                  <BsChevronDoubleDown/>
               </Button>

            </GridItem>
         </Grid>
      </>
   )
}