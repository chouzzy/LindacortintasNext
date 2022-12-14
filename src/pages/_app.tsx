import {AppProps} from 'next/app'
import {ChakraProvider, extendTheme, Heading} from '@chakra-ui/react'

import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { theme } from '../../styles/theme'
import { Global } from '@emotion/react'
import Script from 'next/script'
import { pageView } from 'react-facebook-pixel'
// import Fonts from './Fonts'


const FB_PIXEL_ID = '497161601860940'
// function FacebookPixel() {
//    const router = useRouter()
//    useEffect(() => {
//      import("react-facebook-pixel")
//        .then((x) => x.default)
//        .then((ReactPixel) => {
//          ReactPixel.init('497161601860940');
//          ReactPixel.pageView();
 
//          router.events.on("routeChangeComplete", () => {
//            ReactPixel.pageView();
//          });
//        });
//    });
//    return (
//             <Script id="facebook-pixel">
//               {`
//                 !function(f,b,e,v,n,t,s)
//                 {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
//                 n.callMethod.apply(n,arguments):n.queue.push(arguments)};
//                 if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
//                 n.queue=[];t=b.createElement(e);t.async=!0;
//                 t.src=v;s=b.getElementsByTagName(e)[0];
//                 s.parentNode.insertBefore(t,s)}(window, document,'script',
//                 'https://connect.facebook.net/en_US/fbevents.js');
//                 fbq('init', '497161601860940');
//                 fbq('track', 'PageView');
//               `}
//             </Script>
//           );
//  }

function MyApp({Component, pageProps}: AppProps) {
   const router = useRouter()
   useEffect(() => {
      import('react-facebook-pixel')
        .then((x) => x.default)
        .then((ReactPixel) => {
          ReactPixel.init(`${FB_PIXEL_ID}`)
          ReactPixel.pageView()
  
          router.events.on('routeChangeComplete', () => {
            ReactPixel.pageView()
          })
        })
    }, [router.events])

   // const router = useRouter()

   // useEffect(() => {
   //    import('react-facebook-pixel')
   //      .then((x) => x.default)
   //      .then((ReactPixel) => {
   //        ReactPixel.init('497161601860940') // facebookPixelId
   //        ReactPixel.pageView()
  
   //        router.events.on('routeChangeComplete', () => {
   //          ReactPixel.pageView()
   //        })
   //      })
   //  }, [router.events])

//    const handleRouteChange = () => {
//       pageView()
//     }
    


//    const FacebookPixel = ({ children }) => {
//       const router = useRouter()
    
//       useEffect(() => {
//         // the below will only fire on route changes (not initial load - that is handled in the script below)
//         router.events.on('routeChangeComplete', handleRouteChange)
//         return () => {
//           router.events.off('routeChangeComplete', handleRouteChange)
//         }
//    }, [router.events])
//    return (
//       <Script id="facebook-pixel">
//         {`
//           !function(f,b,e,v,n,t,s)
//           {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
//           n.callMethod.apply(n,arguments):n.queue.push(arguments)};
//           if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
//           n.queue=[];t=b.createElement(e);t.async=!0;
//           t.src=v;s=b.getElementsByTagName(e)[0];
//           s.parentNode.insertBefore(t,s)}(window, document,'script',
//           'https://connect.facebook.net/en_US/fbevents.js');
//           fbq('init', ${FB_PIXEL_ID});
//           fbq('track', 'PageView');
//         `}
//       </Script>
//     )
//   }

   return (
      
      <>    
         {/* <!-- Meta Facebook --> */}
         {/* <!-- Google Tag Manager --> */}
         <Script id="google-tag-manager" strategy="afterInteractive">
            {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5WN8JSC');
            `}
         </Script>
         
         <ChakraProvider theme={theme}>
         <Global
            styles={`
               /* Copied from https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&family=Raleway&display=swap */

               /* latin */
               @font-face {
                  font-family: 'Avenir';
                  font-style: normal;
                  font-weight: 400;
                  font-display: swap;
                  src: url('fonts/AvenirLTProLight.otf') format('otf');
                  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
               }
               `}
            />
         
            <Component {...pageProps}/>
         </ChakraProvider>
      </>
   ) 
}

export default MyApp