import styles from '../styles/global.scss'

//Components

import Layout from '@/components/Layout'


export default function App({ Component, pageProps }) {
  return( 
  <>
     <Layout>
     <Component {...pageProps} />
     
     </Layout> 

  </>
  )
}
