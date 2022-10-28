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
      'telefone':`tel:+1636372108`
   }

   return (
      <GridItem id='#orçamento' colSpan={12} w='100%' p={[2,4,8,2]} bgImage='static/img/wallpainted3.png' bgPosition={['left','left','left','center']} bgSize='cover' bgRepeat='no-repeat'>

         <Grid templateColumns='repeat(12, 1fr)' h='100%' gap={[6,6,6,0]} pl={[0,0,0,0,0]} mt={2} p={4} color='datBlue' fontWeight='500' alignItems='center'>

            <GridItem textAlign={['center','center','left','left']} colSpan={[12,12,6,6]}>
               <Text
                 fontSize={['3rem','3.2rem','3.8rem','4.8rem']}
                 color='gray.800'
                 fontWeight='300'
                 textAlign='center'
               >
                  {title}
               </Text>

               <HStack w='100%' spacing={16} justifyContent='center'>
                  <Link className='liga-tag' href={socialMediaLinks.telefone} _hover={{textDecoration: 'none'}}>
                     <Button w={[28,36,36,56]} className='liga-tag' p={6} fontWeight='400' fontSize={['1.1rem','1.2rem','1.2rem','1.4rem']} bgColor='#ffc107' color='gray.50'>
                        Ligue agora!
                     </Button>
                  </Link>

                  <Link className='zap-tag' href={socialMediaLinks.whatsapp}  _hover={{textDecoration: 'none'}}>
                     <Button w={[24,36,36,56]} className='zap-tag' p={6} fontWeight='400' fontSize={['1.1rem','1.2rem','1.2rem','1.4rem']} bgColor='green.500' color='gray.50'>
                        Whatsapp
                     </Button>
                  </Link>
               </HStack>
               
            </GridItem>

            <GridItem colSpan={[12,12,6,6]} color='gray.600'>
               <Image border={['2px solid #147aa9','2px solid #147aa9','2px solid #147aa9','3px solid #d1d3d4']} borderRadius={2} boxShadow={'xl'} mx='auto' maxW={['100%','100%','90%','90%']} src='static/img/parceiros-logo/fachada-banner.JPG'/>
            </GridItem>
         </Grid>
         
      </GridItem>
   )
}