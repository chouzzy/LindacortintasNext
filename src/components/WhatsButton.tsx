import { Flex, Link, Text } from "@chakra-ui/react";
import { BsWhatsapp } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";


export default function WhatsButton() {
    
   const [whatsNumber, setWhatsNumber] = useState('')
   useEffect(() => {
      const fetchWhatsNumber = async () => {
         await fetch('/api/random', {method:'get'})
         .then(response => response.json())
         .then(data => {
            setWhatsNumber(data.number)
            console.log(whatsNumber)
         })
      }
      fetchWhatsNumber()
   }, [])
    
    return (
        <Link className="zap-tag" href=`https://wa.me/${whatsNumber}?text=Olá, tudo bem? Acessei o site da lindacor e gostaria de falar com um atendente." target="_blank`>
        
        <Flex zIndex={1} bg='#25D366' color="#fffafa"
        fontSize='1.8rem' borderRadius={'full'} p={4} 
        position='fixed'bottom={8} right={8}
        _hover={{ transition:' 400ms', fontSize:'2.4rem'}}
        cursor='pointer'>
            <BsWhatsapp/>
        </Flex>
        </Link>
    )
}
