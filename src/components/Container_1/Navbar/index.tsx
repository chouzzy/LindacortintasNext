import { useBreakpointValue, Grid, GridItem,Link, Image, HStack} from "@chakra-ui/react"
import { ModalMenu } from "./Modal";
import { BsInstagram } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import { SiLinkedin } from "react-icons/si";
import { NavItem } from "./NavItem";
import { useState, useEffect } from "react";
import { ImFacebook2 } from "react-icons/im";

export function Navbar() {
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

   const isMobile = useBreakpointValue({
      base: true,
      sm: true,
      md: true,
      lg: false,
      xl: false
   })

   const navItems= [
   {id:'#Home', text:'Início', active:'active'},
   {id:'#orçamento', text:'Orçamento'},
   {id:'#quemSomos', text:'Quem somos'},
   {id:'#nossasLinhas', text:'Nossas linhas'}, 
   {id:'#contatos', text:'Contatos'}]

   let socialMediaLinks = {
      'instagram':'https://www.instagram.com/lindacortintas/',
      'facebook':'https://www.facebook.com/Lindacor-Tintas-104622232176385',
      'linkedin':'https://www.linkedin.com/company/lindacor-tintas/',
      'whatsapp':`https://wa.me/${whatsNumber}?text=Olá, tudo bem? Acessei o site da Lindacor e gostaria de falar com um atendente.`
   }

   return (
         <Grid
            p={4}
            position='relative'
            bg='none'
            borderBottom='1px solid #00000010'
            boxShadow={'sm'}
            templateColumns={['','','','repeat(12,1fr)','repeat(12,1fr)']}
            w='100%'
            fontFamily='Heebo'
            fontWeight='400'
            textAlign='center'
            alignItems='center'
            color='gray.600'
         >

         <GridItem mr={['auto','','','','auto']} ml={[4,4,'',5,5]} colStart={[0,0,1,1,1]} colEnd={[0,0,3,3,3]}>
            <Image mx='auto' src='static/img/lindacor-logo-2.png' maxW={52} alt='Logo da LindacorTintas'/>
         </GridItem>

         {isMobile?
            <ModalMenu navItems={navItems}/>
         : 
         <>
            <GridItem colStart={[3,3,3,3,3]} mt={4} colEnd={[10,10,10,11,11]} >
            <HStack justifyContent='center' spacing={[0,0,0,4,16]}  fontSize={'1.2rem'}>
                     {navItems.map(item => {
                        return (
                           <NavItem key={item.text} id={item.id} text={item.text} activeClass={item.active}/>
                        )
                     })}
                  
               </HStack>
            </GridItem>

            <GridItem colStart={[10,10,10,11,11]} colEnd={13}>
               <HStack justifyContent='center' alignItems='baseline' spacing={2} fontSize='1.5rem' color='datBlue'>
                  <Link _hover={{color: "#eed150"}} href={socialMediaLinks.instagram}> <BsInstagram /> </Link>
                  <Link _hover={{color: "#eed150"}} href={socialMediaLinks.facebook}> <ImFacebook2/> </Link>
                  <Link  _hover={{color: "#eed150"}} href={socialMediaLinks.linkedin}> <SiLinkedin/> </Link>
                  <Link className='zap-tag' _hover={{color:'green.500', transition:'200ms'}} color='#6cd474'fontSize='1.7rem' href={socialMediaLinks.whatsapp}> <RiWhatsappFill/> </Link>
               </HStack >
            </GridItem>

            {/* <GridItem colStart={11} colEnd={13} mb={2}>
                  <Button borderRadius={3} _hover={{boxShadow:'lg'}} bg='datGreen' color='white'>Loja Daterra</Button>
            </GridItem> */}
            </>
         }
         </Grid>
   )
}