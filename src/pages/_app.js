import '@/src/common/styles/globals.css'
import { ParallaxProvider } from 'react-scroll-parallax'
import Layout from '../common/components/layout/layout'

export default function App({ Component, pageProps }) {
  return (
    <ParallaxProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ParallaxProvider>
  )
}
