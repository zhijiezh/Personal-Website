import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  Button,
  useColorModeValue,
  List,
  ListItem,
  Icon,
  SimpleGrid
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { IoLogoGithub, IoLogoLinkedin, IoMail } from 'react-icons/io5'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { GridItem } from '../components/grid-item'

const ResumeAddress = "../Zhijie-Zhao-Resume.pdf"

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
          Hello, I &apos;m a master's student seeking for a SDE Internship (Summer 2022)
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
          <Heading as="h3" fontSize={20} variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Hello, I am Zhijie Zhao, currently a student in School of Information, University of Michigan. My major is Information Science and I am focusing on User-centered agile software development, which involves both user experience (UX) design and front-end development. My hometown is Shanghai, China. I love life and Teddy bears. Here is one of my recent front-end works:{' '}
            <NextLink href="/works/Wishlist">
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
          <Heading as="h3" fontSize={20}  variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1999&emsp;&#32;</BioYear>
            Born in Shanghai (上海), China.
          </BioSection>
          <BioSection>
            <BioYear>2021&emsp;&#32;</BioYear>
            Completed the Bachelor&apos;s Degree in Electrical and Computer
            Engineering in the University of Michigan - Shanghai Jiao Tong
            University Joint Institute. (上海交通大学密西根学院)
          </BioSection>
          <BioSection>
            <BioYear>present</BioYear>
            Studying UX/HCI at School of Information, University of Michigan.
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" fontSize={20}  variant="section-title">
            I ♥
          </Heading>
          <Paragraph>Jogging, Photography, Movies, Overwatch and Teddy bears.</Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" fontSize={20}  variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/zhijiezh" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @zhijiezh
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/zhijie-zhao-4bb2b81b4/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  Zhijie Zhao
                </Button>
              </Link>
              
            </ListItem>
            <ListItem>
              <Link
                href="mailto:jerry_shh@hotmail.com"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoMail} />}
                >
                  jerry_shh@hotmail.com
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="mailto:zhijiezh@umich.edu"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoMail} />}
                >
                  zhijiezh@umich.edu
                </Button>
              </Link>
            </ListItem>
          </List>
          <Box align="center" my={4}>
            <a href={ResumeAddress} target="_blank">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Resume
              </Button>
            </a>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
