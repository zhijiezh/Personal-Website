import { Container, Badge, Link, List, ListItem, Box, HStack, UnorderedList } from '@chakra-ui/react'
import { Title, Meta, MobileWorkImage, WorkImage } from '../../components/work'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const repoLink = "https://github.com/zhijiezh/ng-course-recipe-book"
const webLink = "https://ng-course-recipe-book-1a6c1.web.app/"

const Work = () => (
  <Layout title="Recipe Book">
    <Container>
      <Title>
        Recipe Book <Badge>2021</Badge>
      </Title>
      <Paragraph>
      Here is an Angular project that implements a recipe book where users can create and save recipes. They can also add the ingredients to their shopping carts.
      </Paragraph>
      <UnorderedList mt={4}>
        <ListItem>Support login and signup through Firebase.</ListItem>
        <ListItem>Create, update, delete and edit your recipes.</ListItem>
        <ListItem>Add ingredients into your shopping cart.</ListItem>
        <ListItem>Using NgRx to support data storage.</ListItem>
      </UnorderedList>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Angular, Firebase</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href={repoLink} isExternal>
            Github Repo <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Demo</Meta>
          <Link href={webLink} isExternal>
           The recipe book website <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <WorkImage src="/images/works/RecipeBook_03.png" alt="RecipeBook - signup"/>
      <WorkImage src="/images/works/RecipeBook_01.png" alt="RecipeBook - Recipe List"/>
      <WorkImage src="/images/works/RecipeBook_02.png" alt="RecipeBook - Shopping Cart"/>
    </Container>
  </Layout>
)

export default Work
