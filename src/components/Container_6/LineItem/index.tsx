import { Box, Flex, SimpleGrid, GridItem, Heading, Image, Text, useBreakpointValue, VStack } from "@chakra-ui/react";

interface LineItemProps {
   LineImage:string,
   size:string,
   height:string[],
   columns:number[],
}

export function LineItem({LineImage, columns, size, height}:LineItemProps) { 

   const quemSomos = {
      title_1:'Quem somos',
      about_1:'A Lindacor Tintas foi fundada em 1996, em Ribeirão Preto, com a missão de atender com excelência e cuidado os clientes da região. O foco sempre foi o atendimento e qualidade dos produtos, o que proporcionou a inauguração da segunda loja na cidade, em 2009. A capacitação das equipes é prioridade e constante, tal qual a parceria com fornecedores, que desenvolvem linhas de produtos com as mais novas tecnologias.',
      title_2:'A Lindacor Tintas é associada ao grupo Coopertintas',
      about_2:'A Lindacor Tintas foi fundada em 1996, em Ribeirão Preto, com a missão de atender com excelência e cuidado os clientes da região. O foco sempre foi o atendimento e qualidade dos produtos, o que proporcionou a inauguração da segunda loja na cidade, em 2009. A capacitação das equipes é prioridade e constante, tal qual a parceria com fornecedores, que desenvolvem linhas de produtos com as mais novas tecnologias.',
   }

   return (
            <GridItem colSpan={columns} height={height} bgRepeat='no-repeat' minW={48} bgImage={LineImage} bgSize='contain' minH={40} bgPosition='center'>
            </GridItem>
   )
}