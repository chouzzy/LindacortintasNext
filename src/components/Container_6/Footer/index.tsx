import { Flex, Grid, HStack, Image, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { BsInstagram } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import { SiLinkedin } from "react-icons/si";
import { SocialMedia } from "../../Container_1/Navbar/Modal/Social Media";

interface FooterProps {
   media: {
      instagram: string,
      facebook: string,
      linkedin: string,
      whatsapp: string
   }
}

export function Footer({ media }: FooterProps) {
   const emailLink = 'mailto:atendimento@lindacortintas.com.br?subject=Contato via site Lindacor Tintas' 
   return (
      <>
         <Grid
            justifyContent='center'
            mx='auto'
            p={4}
            gap={4}
            my={8}
            bgGradient='linear(135deg,
        #ffffffc7,
        #d6a2d3c7)'
            borderRadius={40}
            templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(3, 1fr)', 'repeat(3, 1fr)',]}
         >
            <Image mx='auto' src='static/img/lindacor-logo-2.png' maxW={32} />

            <Link  _hover={{textDecoration:'none', color:'#4267B2'}} href={emailLink}>
               <VStack justifyContent='center'>
                  <MdEmail color='#e1bd1fe6' fontSize='2rem' />
                  <Text>atendimento@lindacortintas.com.br</Text>
               </VStack>
            </Link>

            <HStack px={4} fontSize='1.6rem' spacing={3} textAlign='center' justifyContent='center'>
               <SocialMedia mediaColor='#E1306C' icon={<BsInstagram />} mediaLink={media.instagram} />
               <SocialMedia mediaColor='#4267B2' icon={<ImFacebook2 />} mediaLink={media.facebook} />
               <SocialMedia mediaColor='#4267B2' icon={<SiLinkedin />} mediaLink={media.linkedin} />
               <SocialMedia tag='zap-tag' mediaColor='#25D366' icon={<RiWhatsappFill />} mediaLink={media.whatsapp} />
            </HStack>
         </Grid>

         <Flex align='center' flexDir={['column', 'row', 'row', 'row']} color='white' mx='auto' gap={[4, 12, 24, 24]}>
            <Flex><Text>created by </Text> <Text color='black'>awer.co</Text></Flex>
            <Flex align='center'><MdEmail fontSize='2rem' color='#e1bd1fe6' /> <Text px={2}> contato@awer.co </Text></Flex>
         </Flex>

         <Flex id='#contatos' align='center' color='white' mx='auto' my={8}>
            <Flex align='center'><Text px={2}> Lindacor Tintas ® - Todos os direitos reservados </Text></Flex>
         </Flex>
      </>

   )
}