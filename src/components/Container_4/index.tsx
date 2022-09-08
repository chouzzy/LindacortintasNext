import { Box, Button, Flex, Grid, GridItem, Heading, Image, Link, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import animationData from '../../../public/animations/painter.json';
import Lottie from 'react-lottie'
import { useState, useEffect } from "react";

export function Container_4() { 
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
   const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    }

   const quemSomos = {
      title_1:'Quem somos',
      about_1:'A Lindacor Tintas foi fundada em 1996, em Ribeirão Preto, com a missão de atender com excelência e cuidado os clientes da região. O foco sempre foi o atendimento e qualidade dos produtos, o que proporcionou a inauguração da segunda loja na cidade, em 2009. A capacitação das equipes é prioridade e constante, tal qual a parceria com fornecedores, que desenvolvem linhas de produtos com as mais novas tecnologias.',
      title_2:'A Lindacor Tintas é associada ao grupo Coopertintas',
      about_2:'A Lindacor Tintas foi fundada em 1996, em Ribeirão Preto, com a missão de atender com excelência e cuidado os clientes da região. O foco sempre foi o atendimento e qualidade dos produtos, o que proporcionou a inauguração da segunda loja na cidade, em 2009. A capacitação das equipes é prioridade e constante, tal qual a parceria com fornecedores, que desenvolvem linhas de produtos com as mais novas tecnologias.',
   }

   return (
      <>
      
      <Grid
      id='#quemSomos'
      w='100%'
      fontFamily='Heebo'
      bgImage='static/img/tinta-2c.png'
      bgRepeat='repeat-x'
      justifyContent='center'
      templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)' ]}
      pt={8}
      >
         <Flex w='100%' my='auto'> 
            <Lottie
               options={defaultOptions}
               height={360}
               width={360}
            />
         </Flex>
         
         <Flex minW='60vw'> 
            <VStack color='gray.600' gap={4} p={6} >
               <Image src='static/img/lindacor-logo-2.png' maxW={260} my={4}/>
               <Heading fontSize={['1.5rem','1.4rem','1.4rem','1.4rem']} fontWeight='500' textAlign='center'>{quemSomos.title_1}</Heading>
               <Text fontWeight='400'>{quemSomos.about_1}</Text>
               <Heading fontSize={['1.5rem','1.4rem','1.4rem','1.4rem']} fontWeight='500' textAlign='center'>{quemSomos.title_2}</Heading>
               <Text fontWeight='400'>{quemSomos.about_2}</Text>
            </VStack>
         </Flex>
      </Grid>
      <Flex w='100%' justify='center' flexDir={['column','column','row', 'row']} gap={2} my={12} >
         <Link href={socialMediaLinks.telefone} _hover={{textDecoration: 'none'}}>
            <Button w={64} p={6} fontWeight='400' fontSize='1.4rem' bgColor='yellow.500' color='gray.50'>
               Ligue agora!
            </Button>
         </Link>

         <Link className='zap-tag' href={socialMediaLinks.whatsapp}  _hover={{textDecoration: 'none'}}>
            <Button w={64} p={6} fontWeight='400' fontSize='1.4rem' bgColor='green.500' color='gray.50'>
               Whatsapp
            </Button>
         </Link>
      </Flex>
      </>
   )
}