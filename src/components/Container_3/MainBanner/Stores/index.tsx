import { Button, Flex, Grid, GridItem, HStack, Image, Link, SimpleGrid, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { ModalProjectTypes } from "./ModalProjectTypes";

const fullServiceList = [
   {text:'Desenvolvimento da fórmula'},
   {text:'Produção'},
   {text:'Envase'},
   {text:'Compra das embalagens '},
   {text:'Compra dos rótulos'},
   {text:'Registo na ANVISA'},
   {text:'Testes de segurança e eficácia'},
   {text:'Desenv. da arte para as embalagens'},
   {text:'Criação da identidade visual'},
]
const title = <>Solicite já seu orçamento!</>
const fullService = <>Te auxiliamos em <b>todas</b> as etapas da criação do seu cosmético</>
const parcialService = <>O cliente tem a possibilidade de <b>terceirizar</b> algumas etapas do processo</>

export function Stores() {
   
   const [whatsNumber, setWhatsNumber] = useState('')
   useEffect(() => {
      const fetchWhatsNumber = async () => {
         await fetch('/api/random', {method:'get'})
         .then(response => response.json())
         .then(data => {
            setWhatsNumber(data.number)
            console.log(whatsNumber)
         })
      }
      fetchWhatsNumber()
   }, [])

   let socialMediaLinks = {
      'instagram':'https://www.instagram.com/lindacortintas/',
      'facebook':'https://www.facebook.com/Lindacor-Tintas-104622232176385',
      'linkedin':'https://www.linkedin.com/company/lindacor-tintas/',
      'whatsapp':`https://wa.me/${whatsNumber}?text=Olá, tudo bem? Acessei o site da Lindacor e gostaria de falar com um atendente.`,
      'telefone':`tel:+551636372108`
   }

   return (
      <GridItem id='#orçamento' colSpan={12} w='100%' h='100%' p={[1,4,8,8]} bgSize='initial' bgRepeat={'repeat-x'}  bgPosition={'top'} bgColor='white' bgImage='static/img/roll.png'>

         <Grid templateColumns='repeat(12, 1fr)' h='100%' maxW='100vw' mb={8} mt={['20%',0,0,8]} gap={[8,6,6,8]}  color='datBlue' fontWeight='500' alignItems='center'>

            <GridItem h='100%' textAlign={['center','center','left','left']} colSpan={[12,12,6,6]}>
               <Flex h='100%' alignItems={'center'}>
                  <Flex flexDir={'column'} gap={8}>
                     <Text
                     fontSize={['3.3rem','3.2rem','3.8rem','4.8rem']}
                     color='lindacorBlue'
                     fontWeight='500'
                     textAlign='center'
                     >
                        {title}
                     </Text>

                     <Flex flexDir={['column','row','row','row']} w='100%' gap={[4,0,0,0]}>
                        
                        <Flex w='100%' justifyContent={'center'}>
                           <Link className='liga-tag' href={socialMediaLinks.telefone} _hover={{textDecoration: 'none'}}>
                              <Button _hover={{bgColor:'#323c64'}} className='liga-tag' p={6} fontWeight='400' borderRadius={3} w={[80,72,72,64]} fontSize={['1.4rem','1.2rem','1.2rem','1.4rem']} bgColor='#ffc107' color='gray.50'>
                                 LIGUE AGORA!
                              </Button>
                           </Link>
                        </Flex>

                        <Flex w='100%' justifyContent={'center'}>
                           <Link className='zap-tag' href={socialMediaLinks.whatsapp}  _hover={{textDecoration: 'none'}}>
                              <Button _hover={{bgColor:'#323c64'}} className='zap-tag' p={6} fontWeight='400' borderRadius={3} w={[80,72,72,64]} fontSize={['1.4rem','1.2rem','1.2rem','1.4rem']} bgColor='green.500' color='gray.50'>
                                 WHATSAPP
                              </Button>
                           </Link>
                        </Flex>

                     </Flex> 
                  </Flex>
               </Flex> 
            </GridItem>

            <GridItem boxShadow={'md'} colSpan={[12,12,6,6]}color='gray.600'>
               <Image src='static/img/fachada3.jpeg' w='100%' alt='Foto da fachada loja da Lindacor Tintas' />
            </GridItem>
         </Grid>
         
      </GridItem>
   )
}