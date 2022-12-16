import { Flex, Grid, Link, GridItem, HStack, Text, VStack } from "@chakra-ui/react";
import { ReactComponentElement, ReactElement } from "react";
import { MdCall } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";

interface MapsProps {
address:string,
source:string,
telefone:string,
telefoneNumber:string,
whatsapp_1:string,
whatsapp_2:string,
}

export function Maps({address, source, telefone, telefoneNumber, whatsapp_1, whatsapp_2}:MapsProps) { 
   

   return (
      <GridItem textAlign={['center','center','left','left']} p={4} colSpan={[12,12,6,6]} >
         <VStack bg='white' borderRadius='base' p={2}>
            <Text pt={4} fontSize='1.2rem'>{address}</Text>
            <iframe src={source} width="100%" height='400px' loading="lazy"></iframe>
            <Flex w='100%'>
               <Flex w='100%'>
                  <VStack w='100%'  justify='center'> 
                     <Link className="liga-tag" href={telefoneNumber} _hover={{color:'lindacorCyan', transition:'200ms'}}>
                        <Flex w='100%' justifyContent={'center'}>
                        <MdCall fontSize='2rem' color='lindacorBlue' />
                        </Flex>

                        <Text> {telefone} </Text> 
                     </Link>
                  </VStack>
               </Flex>
               <Flex w='100%' justify='center'>
                  <VStack>
                  <RiWhatsappFill fontSize='2rem' color='#25D366'/>
                     {whatsapp_1=='(16) 99609-2935'?
                        <HStack w='100%' justify='center'> <Link  _hover={{color:'lindacorCyan', transition:'200ms'}} href={`https://wa.me/${whatsapp_1}?text=Olá, tudo bem? Acessei o site da lindacor e gostaria de falar com um atendente.`} target={"_blank"} className="zap-links"> <Text> {whatsapp_1} </Text> </Link> </HStack>
                       :   
                        ""   
                     }
                     <HStack w='100%' justify='center'> <Link  _hover={{color:'lindacorCyan', transition:'200ms'}} href={`https://wa.me/${whatsapp_2}?text=Olá, tudo bem? Acessei o site da lindacor e gostaria de falar com um atendente.`} target={"_blank"} className="zap-links"> <Text> {whatsapp_2} </Text> </Link> </HStack>
                  </VStack>
               </Flex>
            </Flex>

         </VStack>
      </GridItem>
   )
}
