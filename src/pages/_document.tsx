import Document, {Html, Head, Main, NextScript} from 'next/document'
import React from 'react'
import Pixel from '../components/Pixel'

export default class MyDocument extends Document {
   render() {
      return (
         <Html>
         <Head>
         <meta name="description" content="Na Lindacor Tintas, nós trabalhos com as melhores marcas e com preços melhores preços! Solicite já seu orçamento!"></meta>
         {/* <!-- HTML Meta Tags --> */}
         <meta name="description" content="Colorindo o mundo com nossa cor!"/>
          <meta name="keywords" content="venda, revenda, Venda, Revenda, tintas, lindacor, lindacor tintas, tinta, lata de tinta, pintura, pincel, pintar"/>

         {/* <!-- Facebook Meta Tags --> */}
         <meta property="og:url" content="https://www.lindacortintas.com.br/"/>
         <meta property="og:type" content="website"/>
         <meta property="og:title" content="Lindacor Tintas - Colorindo o mundo com nossa cor!"/>
         <meta property="og:description" content="Colorindo o mundo com nossa cor!"/>
         <meta property="og:image" content="https://www.lindacortintas.com.br/static/img/lindacor-logo-2.png"/>

         {/* <!-- Twitter Meta Tags --> */}
         <meta name="twitter:card" content="summary_large_image"/>
         <meta property="twitter:domain" content="lindacortintas.com.br"/>
         <meta property="twitter:url" content="https://www.lindacortintas.com.br//"/>
         <meta name="twitter:title" content="Lindacor Tintas - Colorindo o mundo com nossa cor!"/>
         <meta name="twitter:description" content="Colorindo o mundo com nossa cor!"/>
         <meta name="twitter:image" content="https://www.lindacortintas.com.br/static/img/lindacor-logo-2.png"/>


         <link rel="preconnect" href="https://fonts.googleapis.com"/>
         <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700&family=Nanum+Gothic:wght@400;700;800&display=swap" rel="stylesheet"/>
         <link rel="shortcut icon" href="/static/img/logo icon.png" />
         <React.Fragment>
         {/* <!-- Facebook Pixel Code --> */}
            <script dangerouslySetInnerHTML={{ __html: `!function(f,b,e,v,n,t,s)
               {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
               n.callMethod.apply(n,arguments):n.queue.push(arguments)};
               if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
               n.queue=[];t=b.createElement(e);t.async=!0;
               t.src=v;s=b.getElementsByTagName(e)[0];
               s.parentNode.insertBefore(t,s)}(window, document,'script',
               'https://connect.facebook.net/en_US/fbevents.js');
               fbq('init', '497161601860940');
               fbq('track', 'PageView');` }}
            />
            <noscript dangerouslySetInnerHTML={{ __html: `<img height="1" width="1" style="display:none"
               src="https://www.facebook.com/tr?id=497161601860940&ev=PageView&noscript=1" />` }}
            />
         {/* <!-- End Facebook Pixel Code --> */}
         {/* <!-- Facebook Pixel Code --> */}
            <script dangerouslySetInnerHTML={{ __html: `
               (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
               new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
               j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
               'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
               })(window,document,'script','dataLayer','GTM-5WN8JSC');
               ` }}
            />
         {/* <!-- End Facebook Pixel Code --> */}
         </React.Fragment>
         </Head>
            <body>
               <Main/>
               <NextScript/>
               <noscript
                  dangerouslySetInnerHTML={{
                     __html: `
                     <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5WN8JSC"
                     height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
                  }}
               />
            </body>
         </Html>
      )
   }
}
