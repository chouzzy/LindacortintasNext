import { Button, Flex, Grid, GridItem, Image, Link, SimpleGrid, Text, useDisclosure, VStack } from "@chakra-ui/react";
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
      <GridItem colSpan={12} w='100%'  p={[2,4,8,4]} my={[8,8,2,6]}>

         <Grid templateColumns='repeat(12, 1fr)' gap={[0,6,6,0]} pl={[0,0,0,0,0]} color='datBlue' fontWeight='500' alignItems='center'>

            <GridItem textAlign={['center','center','left','left']} colSpan={[12,12,6,6]} >
               <Text
                 fontSize={['3rem','3.2rem','3.8rem','4.8rem']}
                 color='white'
                 fontWeight='300'
                 textAlign='center'
               >
                  {title}
               </Text>

               <SimpleGrid columns={2}  p={8} fontSize='1.5rem'>
                  <Link href={socialMediaLinks.telefone} _hover={{textDecoration: 'none'}}>
                     <Button w={[36,36,36,64]} p={8} fontWeight='400' fontSize='1.4rem' bgColor='#ffc107' color='gray.50'>
                        Ligue agora!
                     </Button>
                  </Link>

                  <Link className='zap-tag' href={socialMediaLinks.whatsapp}  _hover={{textDecoration: 'none'}}>
                     <Button w={[36,36,36,64]} p={8} fontWeight='400' fontSize='1.4rem' bgColor='green.500' color='gray.50'>
                        Whatsapp
                     </Button>
                  </Link>
               </SimpleGrid>
               
            </GridItem>

            <GridItem colSpan={[12,12,6,6]} color='gray.600'>
               <Image mx='auto'  src='static/img/lindacor-logo-2.png' maxW={[270, 360, 400,440]}/>
            </GridItem>
         </Grid>
         
      </GridItem>
   )
}