import { Flex, Image, SimpleGrid, Text, useBreakpointValue } from "@chakra-ui/react";
import { LineItem } from "../LineItem";

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Scrollbar, Pagination, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const partnerLines = [
   { image: 'static/img/parceiros-logo/suvinil2.png', cols: [6, 3, 4, 4], size: '70%', height: ['200px', '180px', '180px', '220px'] },
   { image: 'static/img/parceiros-logo/sherwin-williams.png', cols: [6, 6, 4, 4], size: '100%', height: ['200px', '180px', '180px', '220px'] },
   { image: 'static/img/parceiros-logo/eucatex.png', cols: [6, 3, 4, 4], size: '70%', height: ['200px', '180px', '180px', '220px'] },
   { image: 'static/img/parceiros-logo/anjo-tintas.png', cols: [6, 3, 3, 3], size: '80%' },
   { image: 'static/img/parceiros-logo/atlas.png', cols: [6, 3, 3, 3], size: '80%' },
   { image: 'static/img/parceiros-logo/colorgin.png', cols: [6, 3, 3, 3], size: '80%' },
   { image: 'static/img/parceiros-logo/dacar.png', cols: [6, 3, 3, 3], size: '80%' },
   { image: 'static/img/parceiros-logo/montana.png', cols: [6, 3, 3, 3], size: '80%' },
   { image: 'static/img/parceiros-logo/sayerlack.png', cols: [6, 3, 3, 3], size: '72%' },
   { image: 'static/img/parceiros-logo/vedacit.png', cols: [6, 3, 3, 3], size: '100%' },
   { image: 'static/img/parceiros-logo/construir.png', cols: [6, 3, 3, 3], size: '100%' },
]

export function Partners() {

   const slides = useBreakpointValue({
      base: 1,
      sm: 1,
      md: 3,
      lg: 3,
      xl: 4
   })

   return (
      // <SimpleGrid
      // textAlign='center'
      // columns={[6,6,6,12]}
      // gap={4}
      // px={[12,8,4, 32]}
      // >
      //    {partnerLines.map( item => {
      //       return (
      //          <LineItem key={item.image} LineImage={item.image} columns={item.cols} size={item.size} height={item.height}/>
      //       )
      //    })}
      // </SimpleGrid>
      <Flex maxW={'100%'} alignContent={'center'} justifyContent={'center'}>
         <Flex maxWidth={['90vw', '90vw', '90vw', '90vw', '90vw']} my='auto' >
            {/* SWIPER */}
            <Swiper
               modules={[Navigation, Pagination, Scrollbar, A11y]}
               spaceBetween={50}
               slidesPerView={slides}
               navigation
               loop
               pagination
            >
               {partnerLines.map((partner) => {
                  return (

                     <SwiperSlide key={partner.image}>
                        <Flex
                           h='100%'
                           key={partner.image}
                           position={'relative'}
                           justifyContent={'center'}
                           _hover={{ bgColor: 'redSide', transition: '500ms' }}
                        >
                           <Image
                              cursor={'pointer'}
                              maxW={60}
                              pb={8}
                              src={`${partner.image}`}
                              objectFit={'contain'}
                              objectPosition={'center'}
                           />
                        </Flex>
                     </SwiperSlide>
                  )
               })}
               <Flex w={0}>.</Flex>
            </Swiper>
         </Flex>
      </Flex>
   )
}