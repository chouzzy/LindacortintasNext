import { Grid, Image, Text, VStack } from "@chakra-ui/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

export function Lines() {
   const vantagensIcons = [
      {text:'Ótimos preços e as melhores condições pra você fechar negócio.', image:'static/img/money-icon.png', alt:'Icone de promoção de preços'},
      {text:'Garantimos sua entrega com segurança e sem custos, até 50km de distância.', image:'static/img/frete-icon.png', alt:'Icone de promoção de frete'},
      {text:'Qualidade comprovada com certificado pelo órgão responsável', image:'static/img/quality-icon.png', alt:'Icone de comprovação de qualidade'},
      {text:'Atendimento diferenciado, ágil e focado no cliente', image:'static/img/seguro-icon.png', alt:'Icone de um aperto de mãos referenciando a satisfação de nossos clientes'}
   ]

   return (
      <>
      <Grid w='100%' p={4} alignItems='top' color='gray.600' 
      templateColumns={['repeat(2, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)','repeat(4, 1fr)']}>
         {vantagensIcons.map(item => {
            return (
               <VStack key={item.text} maxW={60} textAlign='center' mx='auto'>
                  <Image src={item.image} maxW={[12, 16, 16 ,16]} alt={item.alt}/>
                  <Text fontSize={['0.9rem','1rem','1rem','1.1rem']}>{item.text}</Text>
               </VStack>
            )
         })}
      </Grid>
      </>
   )
}

