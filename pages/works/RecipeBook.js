import { Container, Badge, Link, List, ListItem, Box, HStack } from '@chakra-ui/react'
import { Title, Meta, MobileWorkImage } from '../../components/work'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'

const Work = () => (
  <Layout title="HumanKind">
    <Container>
      <Title>
        Wishlist <Badge>2021</Badge>
      </Title>
      <Paragraph>
        placeholder
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Solution Overview</Meta>
          <Paragraph>
            placeholder
          </Paragraph>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>placeholder</span>
        </ListItem>
      </List>
      <HStack alignItems={'center'} justifyContent={'space-around'}>
          {/* <MobileWorkImage
            src="/images/works/HumanKind_01.png"
            alt="HumanKind - Welcome Screen"
          />
          <MobileWorkImage
            src="/images/works/HumanKind_02.png"
            alt="HumanKind - Home Screen"
          />  */}
      </HStack>
    </Container>
  </Layout>
)

export default Work
