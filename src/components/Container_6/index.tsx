import { Flex, Heading, Text, Button, Link } from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
import { useState, useEffect } from "react";
import { Partners } from "./Partners";
import { Footer } from "./Footer";

export function Container_6() { 



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
      instagram:'https://www.instagram.com/lindacortintas/',
      facebook:'https://www.facebook.com/Lindacor-Tintas-104622232176385',
      linkedin:'https://www.linkedin.com/company/lindacor-tintas/',
      whatsapp:`https://wa.me/${whatsNumber}?text=Olá, tudo bem? Acessei o site da Lindacor e gostaria de falar com um atendente.`,
      telefone:`tel:+1636372108`
   }

   return (
      <>
      
      <Flex
      w='100%'
      fontFamily='Heebo'
      boxShadow='lg'
      bgRepeat='repeat-x'
      flexDir="column"
      bgGradient='linear(135deg,#eed150, #fc060679, #323c64cb)'
      justifyContent='center'
      gap={4}
      pt={8}
      >
         <Heading fontWeight='300' textAlign='center' my={4} w='100%' color='white'>NOSSOS PARCEIROS</Heading>

         <Partners/>

         <Flex w='100%' justify='center' textAlign='center' flexDir={['column','column','row', 'row']} gap={2} >
            <Link href={socialMediaLinks.telefone} _hover={{textDecoration: 'none'}}>
               <Button w={64} p={8} fontWeight='400' fontSize='1.4rem' bgColor='#ffc107' color='gray.50'>
                  Ligue agora!
               </Button>
            </Link>

            <Link className='zap-tag' href={socialMediaLinks.whatsapp}  _hover={{textDecoration: 'none'}}>
               <Button w={64} p={8} fontWeight='400' fontSize='1.4rem' bgColor='green.500' color='gray.50'>
                  Whatsapp
               </Button>
            </Link>
         </Flex>

         {/* Footer */}
         <Footer media={socialMediaLinks}/>

      </Flex>
      </>
   )
}