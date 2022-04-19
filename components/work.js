import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge, AspectRatio } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import PropTypes from "prop-types";

export const Title = ({ children }) => (
  <Box>
    <NextLink href="/works">
      <Link>Works</Link>
    </NextLink>
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const WorkImage = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const MobileWorkImage = ({ src, alt }) => (
  <Image borderRadius="lg" w="45%" src={src} alt={alt} />
)

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)

export const VideoEmbeded = ({ src }) => (
  <AspectRatio ratio={640 / 480} mt={4}>
    <iframe
      src={src}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </AspectRatio>
)

