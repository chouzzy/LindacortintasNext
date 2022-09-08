import { Grid } from "@chakra-ui/react";
import { Budget } from "./Budget";
import { Stores } from "./Stores";

export function MainBanner() { 

   return (
      <Grid templateColumns='repeat(12,1fr)'color='gray.600'  >
         <Stores/>
         <Budget/>
      </Grid>
   )
}