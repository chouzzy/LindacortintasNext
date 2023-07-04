import { Box, Flex, GridItem, Heading, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { LineItem } from "./LineItem";

export function Banner() {
   const slides = useBreakpointValue({
      base: 1,
      sm: 1,
      md: 1,
      lg: 1,
      xl: 1
   })

   const isMobile = useBreakpointValue({
      base: true,
      sm: false,
      md: false,
      lg: false,
      xl: false
   })

   const lines = [
      { id: 1, image: 'static/img/banner-cinema.png', text: '', subText: '' },
      { id: 2, image: 'static/img/banner-1.png', text: 'Sensação de casa nova', subText: 'Tire os planos do papel e os coloque na parede' },
      { id: 3, image: 'static/img/banner-2.png', text: 'Tintas de excelente qualidade', subText: 'Aqui você encontra as melhores marcas e ótimos preços!' },
      { id: 4, image: 'static/img/banner-3.png', text: 'Sua casa como você imagina', subText: 'Mas se não pintar nenhuma ideia, nós ajudamos você :)' },
   ]
   const linesMobile = [
      { id: 1, image: 'static/img/banner-cinema-sm.png', text: '', subText: '' },
      { id: 2, image: 'static/img/banner-1.png', text: 'Sensação de casa nova', subText: 'Tire os planos do papel e os coloque na parede' },
      { id: 3, image: 'static/img/banner-2.png', text: 'Tintas de excelente qualidade', subText: 'Aqui você encontra as melhores marcas e ótimos preços!' },
      { id: 4, image: 'static/img/banner-3.png', text: 'Sua casa como você imagina', subText: 'Mas se não pintar nenhuma ideia, nós ajudamos você :)' },
   ]
   return (
      <>

         <Flex w='100%' fontFamily='Heebo' justifyContent='center' color='white' pt='2' >
            <GridItem maxW={'100%'} mx='auto' color='gray.800' bgColor='blackAlpha.800'>
               <>
                  <Swiper
                     spaceBetween={0}
                     slidesPerView={slides}
                     navigation
                     autoplay
                     speed={1200}
                     loop
                     // onSlideChange={() => console.log('slide change')}
                     onSwiper={(swiper) => console.log(swiper)}
                  >

                     {isMobile ?
                        linesMobile.map((line, index) => (
                           <SwiperSlide key={index}>
                              <LineItem image={line.image} text={line.text} subText={line.subText} />
                           </SwiperSlide>
                        ))
                        :
                        lines.map(item => {
                           return (
                              <SwiperSlide key={item.id}>
                                 <LineItem image={item.image} text={item.text} subText={item.subText} />
                              </SwiperSlide>
                           )
                        })
                     }

                  </Swiper>
                  <Flex w='100%' bgColor='white' color='white'>Lindacor Tintas ®</Flex>
               </>
            </GridItem>
         </Flex>
      </>
   )
}