import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I &apos;m a UX developer / engineer
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Zhijie Zhao
          </Heading>
          <p> Working hard to become a UX Developer/ Designer </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/zhijie.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          In its "Vision 2010" Strategy, Philips emphasizes that it is a
          "people-centric company" that strives to consistently deliver their
          brand of "sense and simplicity" products, improving the quality of
          life through meaningful innovations.{' '}
          <NextLink href="/works/wishlist">
            <Link>Wishlist</Link>
          </NextLink>
          .
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1999&emsp;&#32;</BioYear>
          Born in Shanghai (上海), China.
        </BioSection>
        <BioSection>
          <BioYear>2021&emsp;&#32;</BioYear>
          Completed the Bachelor&apos;s Degree in Electrical and Computer Engineering in the University of Michigan - Shanghai Jiao Tong University Joint Institute.
          (上海交通大学密西根学院)
        </BioSection>
        <BioSection>
          <BioYear>present</BioYear>
          Studying UX/HCI at School of Information, University of Michigan.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Jogging, Photography, Movies and Overwatch.
        </Paragraph>
      </Section>
    </Container>
  )
}

export default Page
