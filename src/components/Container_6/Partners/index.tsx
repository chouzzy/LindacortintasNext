import { SimpleGrid } from "@chakra-ui/react";
import { LineItem } from "../LineItem";

const partnerLines = [
   {image:'static/img/parceiros-logo/anjo-tintas.png', cols:[4,2,1,3], size:'80%'},
   {image:'static/img/parceiros-logo/atlas.png', cols:[4,2,1,3], size:'80%'},
   {image:'static/img/parceiros-logo/colorgin.png', cols:[4,2,1,3], size:'80%'},
   {image:'static/img/parceiros-logo/dacar.png', cols:[4,2,1,3], size:'80%'},
   {image:'static/img/parceiros-logo/montana.png', cols:[4,2,1,3], size:'80%'},
   {image:'static/img/parceiros-logo/sayerlack.png', cols:[4,2,1,3], size:'72%'},
   {image:'static/img/parceiros-logo/vedacit.png', cols:[4,2,1,3], size:'100%'},
   {image:'static/img/parceiros-logo/construir.png', cols:[4,2,1,3], size:'100%'},
   {image:'static/img/parceiros-logo/eucatex.png', cols:[4,2,2,4], size:'70%', height:['200px','180px','180px','220px']},
   {image:'static/img/parceiros-logo/suvinil2.png', cols:[4,2,2,4], size:'70%', height:['200px','180px','180px','220px']},
   {image:'static/img/parceiros-logo/sherwin-williams.png', cols:[4,2,2,4], size:'100%', height:['200px','180px','180px','220px']},
]

export function Partners() { 
   return (
         <SimpleGrid
         textAlign='center'
         columns={12}
         gap={4}
         px={[12,8,4, 32]}
         >
            {partnerLines.map( item => {
               return (
                  <LineItem key={item.image} LineImage={item.image} columns={item.cols} size={item.size} height={item.height}/>
               )
            })}
         </SimpleGrid>
   )
}