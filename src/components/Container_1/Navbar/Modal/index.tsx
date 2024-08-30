import { useDisclosure, Box, Button, Collapse, useBreakpointValue, Grid, GridItem, Image, Heading, Text, VStack, Flex, Link, HStack} from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { BsInstagram } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";

import { RiWhatsappFill, RiMenuLine } from "react-icons/ri";
import { SiLinkedin } from "react-icons/si";
import { NavItem } from "../NavItem";
import { SocialMedia } from "./Social Media";


export function ModalMenu(ModalMenuProps) {

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
      'email':'mailto:atendimento@lindacortintas.com.br?subject=Contato via site Lindacor Tintas&cc=vendas2caramuru@lindacortintas.com.br',
      'instagram':'https://www.instagram.com/lindacortintas/',
      'facebook':'https://www.facebook.com/Lindacor-Tintas-104622232176385',
      'linkedin':'https://www.linkedin.com/company/lindacor-tintas/',
      'whatsapp':`https://wa.me/${whatsNumber}?text=Olá, tudo bem? Acessei o site da Lindacor e gostaria de falar com um atendente.`
   }
   const { isOpen, onToggle } = useDisclosure()

   return (
      <>
         <Button  w='50px' right='0' mr={[4,4,12,0,12]} fontSize='1.4rem' top='0' mt={[14,16,16,16,16]} position='absolute' bg='datBlue' color='white' onClick={onToggle}><RiMenuLine/></Button>
         <Collapse in={isOpen} animateOpacity>
            <Box
               w='100vw'
               color='datBlue'
               rounded='md'
               shadow='md'
            >
               <VStack textTransform='uppercase' fontFamily='Heebo' fontSize='1.05rem' pt={4}>

                  {ModalMenuProps.navItems.map( item => {
                     return (
                        <NavItem key={item.id} id={item.id} text={item.text} activeClass={item.active} navColor={item.color}/>
                     )
                  })}
                  <HStack p={2} fontSize='1.6rem' spacing={3} textAlign='center' borderTop='1px solid #b8d432' w='36vw' justifyContent='center'>
                        <SocialMedia mediaColor='#ffbc1c' icon={<MdEmail/>} mediaLink={socialMediaLinks.email}/>
                        <SocialMedia mediaColor='#E1306C' icon={<BsInstagram/>} mediaLink={socialMediaLinks.instagram}/>
                        <SocialMedia mediaColor='#4267B2' icon={<ImFacebook2/>} mediaLink={socialMediaLinks.facebook}/>
                        <SocialMedia mediaColor='#4267B2' icon={<SiLinkedin/>} mediaLink={socialMediaLinks.linkedin}/>
                        <SocialMedia tag='zap-tag' mediaColor='#25D366' icon={<RiWhatsappFill/>} mediaLink={socialMediaLinks.whatsapp}/>
                  </HStack>
               </VStack>
            </Box>
         </Collapse>
         </>
      )}