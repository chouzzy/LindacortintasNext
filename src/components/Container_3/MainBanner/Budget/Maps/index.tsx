import { Flex, Grid, GridItem, HStack, Text, VStack } from "@chakra-ui/react";
import { ReactComponentElement, ReactElement } from "react";
import { MdCall } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";

interface MapsProps {
address:string,
source:string,
telefone:string,
whatsapp_1:string,
whatsapp_2:string,
}

export function Maps({address, source, telefone, whatsapp_1, whatsapp_2}:MapsProps) { 
   

   return (
      <GridItem textAlign={['center','center','left','left']} p={4} colSpan={[12,12,6,6]} >
         <VStack bg='white' borderRadius='base' p={2}>
            <Text pt={4} fontSize='1.2rem'>{address}</Text>
            <iframe src={source} width="100%" height='400px' loading="lazy"></iframe>
            <Flex w='100%'>
               <Flex w='100%'>
                  <VStack w='100%' justify='center'> <MdCall fontSize='2rem' color='lindacorBlue' /> 
                     <Text> {telefone} </Text> 
                  </VStack>
               </Flex>
               <Flex w='100%' justify='center'>
                  <VStack>
                  <RiWhatsappFill fontSize='2rem' color='#25D366'/>
                  <HStack w='100%' justify='center'> <Text> {whatsapp_1} </Text> </HStack>
                  <HStack w='100%' justify='center'> <Text> {whatsapp_2} </Text> </HStack>
                  </VStack>
               </Flex>
            </Flex>

         </VStack>
      </GridItem>
   )
}