import { Button, useBreakpointValue, Grid, GridItem,Link, Image, Box, HStack, SimpleGrid} from "@chakra-ui/react"

import {Link as Slink} from 'react-scroll'
import { BsInstagram } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";

import { RiWhatsappFill, RiMenuLine } from "react-icons/ri";
import { SiLinkedin } from "react-icons/si";

interface NavItemProps {
   id:string,
   activeClass?:string,
   text:string,
   navColor?:string 
}

export function NavItem({id, activeClass, text, navColor,}:NavItemProps) {
   return (
         <Slink  activeClass={activeClass} to={id} spy={true} smooth={true} offset={-100} duration={500}>
            <Box cursor='pointer' color={navColor} _hover={{color: "#eed150", transition:'500ms'}} flex='1'> {text}</Box>
         </Slink>
   )
}