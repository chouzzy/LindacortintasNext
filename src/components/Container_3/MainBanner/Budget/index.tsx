import { Grid, GridItem, Heading } from "@chakra-ui/react";
import { Maps } from "./Maps";

const divMaps = {
   store_1:{
      address:"🚩 LOJA 1: R. Dr. João Guião, 1056 - Vila Virginia",
      source:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.1360076815504!2d-47.829504085064634!3d-21.186755385913038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9be9217877245%3A0xe17f0f64c1fbd07e!2sR.%20Dr.%20Jo%C3%A3o%20Gui%C3%A3o%2C%201056%20-%20Vila%20Virginia%2C%20Ribeir%C3%A3o%20Preto%20-%20SP%2C%2014030-440!5e0!3m2!1spt-BR!2sbr!4v1648817469914!5m2!1spt-BR!2sbr",
      telefone:'(16) 3637-2108',
      telefoneNumber:'tel:+551636372108',
      whatsapp_1:'',
      whatsapp_2:'(16) 99709-7415',
      whatsapp_1_number:'',
      whatsapp_2_number:'5516997097415'
   },
   store_2:{
      address:"🚩 LOJA 2: Av. Caramuru, 2055 - Jardim Sumare",
      source:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.8928401992703!2d-47.824566185441675!3d-21.19641548440527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9bec08620d2d5%3A0x6fa495639a52a700!2sAv.%20Caramuru%2C%202055%20-%202%20-%20Jardim%20Sumare%2C%20Ribeir%C3%A3o%20Preto%20-%20SP%2C%2014025-303!5e0!3m2!1spt-BR!2sbr!4v1648817586786!5m2!1spt-BR!2sbr",
      telefone:'(16) 3621-2108',
      telefoneNumber:'tel:+551636212108',
      whatsapp_1:'',
      whatsapp_2:'(16) 99143-9381',
      whatsapp_3:'0',
      whatsapp_1_number:'',
      whatsapp_2_number:'5516991439381',
      whatsapp_3_number:'0'
   }
}

export function Budget() { 
  
   return (
      <GridItem colSpan={12} w='100%'  p={[2,4,8,4]} mx='auto' mb={16}>

         <Heading mx='auto' w='100%' textAlign='center' color='white' fontWeight='400' p={4}>CONHEÇA NOSSAS LOJAS</Heading>
         <Grid templateColumns='repeat(12, 1fr)' gap={6} color='datBlue' fontWeight='500' alignItems={'flex-start'}>
            <Maps 
            address={divMaps.store_1.address}
            source={divMaps.store_1.source}
            telefone={divMaps.store_1.telefone}
            telefoneNumber={divMaps.store_1.telefoneNumber}
            whatsapp_1={divMaps.store_1.whatsapp_1} 
            whatsapp_2={divMaps.store_1.whatsapp_2}
               
            whatsapp_1_number={divMaps.store_1.whatsapp_1_number}
            whatsapp_2_number={divMaps.store_1.whatsapp_2_number}
            />

            <Maps 
            address={divMaps.store_2.address} 
            source={divMaps.store_2.source}
            telefone={divMaps.store_2.telefone} 
            telefoneNumber={divMaps.store_2.telefoneNumber} 
            whatsapp_1={divMaps.store_2.whatsapp_1}
            whatsapp_2={divMaps.store_2.whatsapp_2}
            whatsapp_3={divMaps.store_2.whatsapp_3}
               
            whatsapp_1_number={divMaps.store_2.whatsapp_1_number}
            whatsapp_2_number={divMaps.store_2.whatsapp_2_number}
            whatsapp_3_number={divMaps.store_2.whatsapp_3_number}
               
               />
         </Grid>
         
      </GridItem>
   )
}






// const divMaps = {
//    store_1:{
//       address:"🚩 LOJA 1: R. Dr. João Guião, 1056 - Vila Virginia",
//       source:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.1360076815504!2d-47.829504085064634!3d-21.186755385913038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9be9217877245%3A0xe17f0f64c1fbd07e!2sR.%20Dr.%20Jo%C3%A3o%20Gui%C3%A3o%2C%201056%20-%20Vila%20Virginia%2C%20Ribeir%C3%A3o%20Preto%20-%20SP%2C%2014030-440!5e0!3m2!1spt-BR!2sbr!4v1648817469914!5m2!1spt-BR!2sbr",
//       telefone:'(16) 3637-2108',
//       telefoneNumber:'tel:+551636372108',
//       whatsapp_1:'0',
//       whatsapp_2:'(16) 99709-3759',
//       whatsapp_1_number:'0',
//       whatsapp_2_number:'5516997093759'
//    },
//    store_2:{
//       address:"🚩 LOJA 2: Av. Caramuru, 2055 - Jardim Sumare",
//       source:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.8928401992703!2d-47.824566185441675!3d-21.19641548440527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9bec08620d2d5%3A0x6fa495639a52a700!2sAv.%20Caramuru%2C%202055%20-%202%20-%20Jardim%20Sumare%2C%20Ribeir%C3%A3o%20Preto%20-%20SP%2C%2014025-303!5e0!3m2!1spt-BR!2sbr!4v1648817586786!5m2!1spt-BR!2sbr",
//       telefone:'(16) 3621-2108',
//       telefoneNumber:'tel:+551636212108',
//       whatsapp_1:'(16) 99709-2489',
//       whatsapp_2:'(16) 99143-9381',
//       whatsapp_3:'0',
//       whatsapp_1_number:'5516997092489',
//       whatsapp_2_number:'5516991439381',
//       whatsapp_3_number:'5516996092935'
//    }
// }