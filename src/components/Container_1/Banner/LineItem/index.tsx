import { Flex, Grid, Image, Text } from "@chakra-ui/react";
import { SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay} from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay ])

interface LineItemProps {
   image:string,
   text:string,
   subText:string
}

export function LineItem({image, text, subText}:LineItemProps) {
   return (
               <Flex mx='auto' maxW={'100vw'} bgImage={image} bgRepeat='no-repeat' bgSize={'cover'} bgPosition='center'
               h={'380px'} position='relative' justifyContent='center' alignItems='center' >

                  <Grid w={['84vw','84vw','72vw','50vw']} my='auto' mt={24} position='absolute'>
                     <Text textAlign='center' color='white'fontSize={['1.8rem','2.5rem','2.8rem','3.5rem']} fontWeight='300'>
                        {text}
                     </Text>
                     <Text textAlign='center' color='white'fontSize={['0.9rem','1.1rem','1.2rem','1.3rem']} fontWeight='300'>
                        {subText}
                     </Text>
                  </Grid>

               </Flex>
   )
}

