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
  useColorModeValue
} from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from './paragraph'

// For works linked to the outside
export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)


export const WorkGridItem = ({
  children,
  id,
  title,
  thumbnail,
  description
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
          <ModalHeader bgColor={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box alignItems="center">
            <Image
              src={thumbnail}
              alt={title}
              className="grid-item-thumbnail"
              placeholder="blur"
            />
            <Paragraph>
              {description}
            </Paragraph>
            
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
