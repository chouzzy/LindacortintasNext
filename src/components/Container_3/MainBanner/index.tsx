import { Grid } from "@chakra-ui/react";
import { Budget } from "./Budget";
import { Stores } from "./Stores";

export function MainBanner() { 

   return (
      <Grid w='100%' templateColumns='repeat(12,1fr)'color='gray.600'  >
         <Budget/>
      </Grid>
   )
}