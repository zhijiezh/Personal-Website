import { Box, Container } from '@chakra-ui/react'
import Image from 'next/image'
import Navbar from '../navbar'
import Head from 'next/head'
import backPhoto from '../../public/images/back.jpg'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title> Zhijie Zhao - Homepage </title>
      </Head>

      <Navbar path={router.asPath}/>

      <Container maxW="container.md" pt={14}>
        <Box mb={5}>
        <Image
          src= {backPhoto}
          alt="background photo"
          loading="lazy"
          placeholder="blur"
        ></Image>
        </Box>
        {children}
      </Container>
    </Box>
  )
}

export default Main
