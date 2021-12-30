import NextLink from 'next/link'
import Image from 'next/image'
import {
  Box,
  Text,
  LinkBox,
  LinkOverlay,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useColorModeValue,
  Badge
} from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from './paragraph'
import styled from '@emotion/styled'

const GridBox = styled.span`
  div {
    transition: transform 0.15s ease;
  }
  .code {
    color: #88ccca00;
    transition: color 0.15s ease-out;
  }
  &:hover div {
    transform: scale(1.03);
  }
  &:hover .code{
    color: #88ccca;
  }
`

// For works linked to the outside
export const GridItem = ({ children, href, title, thumbnail, category }) => (
  <Box w="100%" textAlign="center">
    <GridBox>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
          loading="lazy"
          layout="intrinsic"
        />
        <LinkOverlay href={href} target="_blank">
          <Text mt={2} fontSize={20}>
          <span className="code">&lt; </span>{title}<span className="code"> &#47;&gt;</span>
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
        <Badge className='code' variant='outline' boxShadow='none'>{category}</Badge>
      </LinkBox>
    </GridBox>
  </Box>
)

// For works displayed directly inside the site
export const WorkGridItem = ({ children, id, title, thumbnail, category }) => (
  <Box w="100%" textAlign="center">
    <NextLink href={`/works/${id}`}>
    <GridBox>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          layout="intrinsic"
          className="grid-item-thumbnail"
          placeholder="blur"
          loading="lazy"
        />
        <LinkOverlay href={`/works/${id}`}>
          <Text mt={2} fontSize={20}>
          <span className="code">&lt; </span>{title}<span className="code"> &#47;&gt;</span>
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
        <Badge className='code' variant='outline' boxShadow='none'>{category}</Badge>
      </LinkBox>
      </GridBox>
    </NextLink>
  </Box>
)

export const WorkGridItemWithModal = ({
  children,
  id,
  title,
  thumbnail,
  description,
  category
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Box w="100%" textAlign="center" onClick={onOpen} cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
        />
        <Text mt={2} fontSize={20}>
          {title}
        </Text>
        <Text fontSize={14}>{children}</Text>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bgColor={useColorModeValue('#f0e7db', '#202023')}>
          <ModalHeader
            bgColor={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          >
            {title}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box alignItems="center">
              <Image
                src={thumbnail}
                alt={title}
                className="grid-item-thumbnail"
                placeholder="blur"
              />
              <Paragraph>{description}</Paragraph>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
              onClick={onClose}
              m={4}
            >
              Close
            </Button>
            <NextLink href={`/works/${id}`}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Detail
              </Button>
            </NextLink>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)
