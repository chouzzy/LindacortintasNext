import Head from 'next/head'
import { Container_1 } from '../components/Container_1'
import { Container_2 } from '../components/Container_2'
import { Container_3 } from '../components/Container_3'
import { Container_4 } from '../components/Container_4'
import { Container_5 } from '../components/Container_5'
import { Container_6 } from '../components/Container_6'
import WhatsButton from '../components/WhatsButton'

export default function Home () {
   return (
      <>
         <Head>
                      {/* <!-- HTML Meta Tags --> */}
          <meta name="description" content="A Lindacor Tintas foi fundada em 1996, em Ribeirão Preto, com a missão de atender com excelência e cuidado os clientes da região."/>
          <meta name="keywords" content="tintas, lindacor, linda cor, cor, parede, suvinil, galão, pintor"/>

         {/* <!-- Facebook Meta Tags --> */}
         <meta property="og:url" content="https://www.lindacortintas.com.br/"/>
         <meta property="og:type" content="website"/>
         <meta property="og:title" content="Lindacor Tintas - Pintando o mundo desde 1996"/>
         <meta property="og:description" content="A Lindacor Tintas foi fundada em 1996, em Ribeirão Preto, com a missão de atender com excelência e cuidado os clientes da região."/>
         <meta property="og:image" content="https://www.lindacortintas.com.br/static/img/lindacor-logo-2.png"/>

         {/* <!-- Twitter Meta Tags --> */}
         <meta name="twitter:card" content="summary_large_image"/>
         <meta property="twitter:domain" content="blendquimica.com.br"/>
         <meta property="twitter:url" content="https://www.lindacortintas.com.br/"/>
         <meta name="twitter:title" content="Lindacor Tintas - Pintando o mundo desde 1996"/>
         <meta name="twitter:description" content="A Lindacor Tintas foi fundada em 1996, em Ribeirão Preto, com a missão de atender com excelência e cuidado os clientes da região."/>
         <meta name="twitter:image" content="https://www.lindacortintas.com.br/static/img/lindacor-logo-2.png"/>
            <title>Lindacor Tintas</title>
         </Head>
         <Container_1/>
         <Container_2/>
         <Container_3/>
         <Container_4/>
         <Container_5/>
         <Container_6/>
         <WhatsButton/>
      </>

   )
}