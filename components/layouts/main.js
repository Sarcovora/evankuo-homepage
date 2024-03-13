import Head from 'next/head'
import Navbar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Evan's homepage" />
        <meta name="author" content="Evan Kuo" />
        <meta name="author" content="Sarcovora" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Evan Kuo" />
        <meta name="og:title" content="Evan Kuo" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.evankuo.vercel.app/card.png"
        />
        <title>Evan Kuo</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
