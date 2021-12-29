import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Text,
  HStack,
  LinkBox,
  LinkOverlay,
  Box,
  AspectRatio,
  UnorderedList
} from '@chakra-ui/react'
import {
  Title,
  Meta,
  MobileWorkImage,
  VideoEmbeded
} from '../../components/work'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const repoLink =
  'https://github.com/SI669-Classroom-Fall-2021/si-669-final-project-makersmelx'

const demoLink =
  'https://drive.google.com/file/d/1J_Q34Z9XYR7ui8vmBsagrx-qOhrM3Mb3/preview'

const Work = () => (
  <Layout title="Wishlist">
    <Container>
      <Title>
        Wishlist <Badge>2021</Badge>
      </Title>
      <Paragraph>
        <strong>Wishlist</strong> is rooted in the way people express their
        gratitude and love to others - giving gifts. Our target audience is
        those who want to give gifts to other people but do not know which one
        will be the best for their gift receiver. We can find many apps or
        websites that can help you by providing articles like "The top 10 best
        gifts for your mother" or "The best presents for your boyfriend."
        However, only the person himself knows what he wants. Therefore we want
        to create a wishlist app where everyone can post his wishes on our app.
        Those who want to send a present can check the wishlist of the receiver
        and prepare the ideal gift for him.
      </Paragraph>
      <Paragraph>
        Our ideal users are people who are preparing a gift for a specific
        person. The main problem they face is that they do not precisely know
        what the receiver wants. In our app, we will allow users to post their
        wishlists. Their friends can see those wishlists and choose the items on
        the list. The item will be removed from the list after one of their
        friends picks so that so that people won&apos;t buy the same thing. Of
        course, the receiver will not know who selects the item for him. In this
        way, users do not need to choose gifts, and people can always get what
        they want most. <strong>Wishlist</strong> will save the giver&apos;s
        time and the receiver&apos;s money (so that he won&apos;t have to buy
        the thing he wants on his own).
      </Paragraph>
      <UnorderedList mt={4}>
        <ListItem>Add friends through email address, see your friends' wishlist and claim their wishes.</ListItem>
        <ListItem>Create, update, delete and edit your own wishlist.</ListItem>
        <ListItem>Complete and discard claimed wishes.</ListItem>
        <ListItem>Support authorization, form control, loading control, toast notification and swipelist.</ListItem>
      </UnorderedList>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React Native, TypeScript, Native Base, Firebase, ahook</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href={repoLink} isExternal>
            Github Repo <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <HStack alignItems={'center'} justifyContent={'space-around'} mt={4}>
        <MobileWorkImage
          src="/images/works/Wishlist_01.png"
          alt="Wishlist - Login"
        />
        <MobileWorkImage
          src="/images/works/Wishlist_02.png"
          alt="Wishlist - Signup"
        />
      </HStack>
      <HStack alignItems={'center'} justifyContent={'space-around'} mt={4}>
        <MobileWorkImage
          src="/images/works/Wishlist_03.png"
          alt="Wishlist - Wishlist edition"
        />
        <MobileWorkImage
          src="/images/works/Wishlist_04.png"
          alt="Wishlist - A friend's wishlist"
        />
      </HStack>
      <HStack alignItems={'center'} justifyContent={'space-around'} mt={4}>
        <MobileWorkImage
          src="/images/works/Wishlist_05.png"
          alt="Wishlist - An item in a friend's wishlist"
        />
        <MobileWorkImage
          src="/images/works/Wishlist_06.png"
          alt="Wishlist - Complete his/her wish"
        />
      </HStack>
      <Box mt={4}>
        <Meta>Demo</Meta>
        <VideoEmbeded src={demoLink}></VideoEmbeded>
      </Box>
    </Container>
  </Layout>
)

export default Work
