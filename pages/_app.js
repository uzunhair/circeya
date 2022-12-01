import '../styles/globals.scss';
import { Manrope } from '@next/font/google';

const manrope = Manrope({
  weight: '400',
  subsets: ['latin'],
})

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        body {
          font-family: ${manrope.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
