import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Box,
  HStack,
  UnorderedList
} from '@chakra-ui/react'
import { Title, Meta, MobileWorkImage, WorkImage } from '../../components/work'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const repoLink = 'https://github.com/zhijiezh/SI649-final-proj'
const webLink =
  'https://share.streamlit.io/zhijiezh/si649-interactive-communicative-visualization/interactive.py'
const articleLink =
  'https://www.washingtonpost.com/news/wonk/wp/2015/09/03/i-called-this-place-americas-worst-place-to-live-then-i-went-there/'
const staticPdfLink = "../RedLakeCounty-static.pdf"

const Work = () => (
  <Layout title="The Red Lake County">
    <Container>
      <Title>
        Red Lake County is not perfect but definitely not the worst{' '}
        <Badge>2021</Badge>
      </Title>
      <Paragraph>
        In this data visualization project, I focus on communicative
        visualization. I designed visualization to accompany the article{' '}
        <Link href={articleLink} isExternal>
          I called this place 'Americas worst place to live.' Then I went there.{' '}
          <ExternalLinkIcon mx="2px" />
        </Link>{' '}
        I created both a static data visualization poster and an interactive
        website. In the project you will see data visualizations for the
        following topics:
      </Paragraph>
      <UnorderedList>
        <ListItem>Does Red Lake County have good natural amenities?</ListItem>
        <ListItem>Education and Economy.</ListItem>
        <ListItem>
          Red Lake County has done a great job in decreasing the unemployment
          rate.
        </ListItem>
      </UnorderedList>
      <Paragraph>
        I also used a parallel coordinates graph to implement a playground where
        readers can explore the pattern hidden inside the data by themselves.
        This is also called a Martini Glass Infographics Structure.
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, Altair, streamlit</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href={repoLink} isExternal>
            Github Repo <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Demo</Meta>
          <Link href={staticPdfLink} isExternal>
            The static data visualization <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Demo</Meta>
          <Link href={webLink} isExternal>
            The interactive data visualization <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <WorkImage
        src="/images/works/RedLakeCounty_static.png"
        alt="RedLakeCounty - static data vis"
      />
      <WorkImage
        src="/images/works/RedLakeCounty_01.png"
        alt="RedLakeCounty - Natural Amenities Scale"
      />
      <WorkImage
        src="/images/works/RedLakeCounty_02.png"
        alt="RedLakeCounty - Education and Economy"
      />
      <WorkImage
        src="/images/works/RedLakeCounty_03.png"
        alt="RedLakeCounty - Improvement in unemployment"
      />
      <WorkImage
        src="/images/works/RedLakeCounty_04.png"
        alt="RecipeBook - Patterns hidden inside"
      />
    </Container>
  </Layout>
)

export default Work
