import { GridItem, Text } from "@chakra-ui/react";

interface LineItemProps {
   LineImage:string,
   LineName:string,
   columns:number[],
   alt:string
}

export function LineItem({LineImage, LineName, columns, alt}:LineItemProps) { 

   const quemSomos = {
      title_1:'Quem somos',
      about_1:'A Lindacor Tintas foi fundada em 1996, em Ribeirão Preto, com a missão de atender com excelência e cuidado os clientes da região. O foco sempre foi o atendimento e qualidade dos produtos, o que proporcionou a inauguração da segunda loja na cidade, em 2009. A capacitação das equipes é prioridade e constante, tal qual a parceria com fornecedores, que desenvolvem linhas de produtos com as mais novas tecnologias.',
      title_2:'A Lindacor Tintas é associada ao grupo Coopertintas',
      about_2:'A Lindacor Tintas foi fundada em 1996, em Ribeirão Preto, com a missão de atender com excelência e cuidado os clientes da região. O foco sempre foi o atendimento e qualidade dos produtos, o que proporcionou a inauguração da segunda loja na cidade, em 2009. A capacitação das equipes é prioridade e constante, tal qual a parceria com fornecedores, que desenvolvem linhas de produtos com as mais novas tecnologias.',
   }

   return (
            <GridItem colSpan={columns} mx='auto' borderRadius={12} w='100%' boxShadow='2xl' minW={60} bgImage={LineImage} bgSize='cover' minH={40} bgPosition='center' position='relative' >
               <Text bg='white' position='absolute' maxW={60} left='0' right='0' margin='auto' bottom='2' borderRadius={12} fontSize='1.2rem'>
                  {LineName}
               </Text>
            </GridItem>
   )
}