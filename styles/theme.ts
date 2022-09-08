import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  
   fonts: {
      heading: 'Avenir, Heebo ',
      body:'Avenir, Heebo'
   },
   colors: {
     datBlue: "#323c64 ",
     datShinyBlue: "#516BA5",
     datDarkBlue: "#15274c",
     datGreen:"#a5d320",
     datGreenActive:"#8de90d",
     datGray: "#d1d3d4",
     lindacorYellow:'#eed150',
     lindacorBlue:'#323c64',
     lindacorRed:'#fc0806',
     lindacorCyan:'#147aa9',
   },
   styles: {
     global: {
       // styles for the `body`
        body: {
          bgRepeat:'no-repeat',
          bgSize:'100%',
          bgAttachment:'fixed',
          color: 'gray.900',
          
        },
       // styles for the `a`
        a: {
          // color: 'teal.500',
          _hover: {
            textDecoration: 'none',
          },
        },
     },
   },
 })