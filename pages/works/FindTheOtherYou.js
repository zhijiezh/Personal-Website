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
import Unity, { UnityContext } from 'react-unity-webgl'

const unityContext = new UnityContext({
  loaderUrl: '../findTheOtherYouBuild/findTheOtherYou.loader.js',
  dataUrl: '../findTheOtherYouBuild/findTheOtherYou.data',
  frameworkUrl: '../findTheOtherYouBuild/findTheOtherYou.framework.js',
  codeUrl: '../findTheOtherYouBuild/findTheOtherYou.wasm'
})

const WindowsYouLink = '../findTheOtherYouBuild/findTheOtherYou - Windows Build.zip'
const MacYouLink = '../findTheOtherYouBuild/findTheOtherYou - Mac Build.zip'

const Work = () => (
  <Layout title="findTheOtherYou">
    <Container>
      <Title>
        Find the other you <Badge>2022</Badge>
      </Title>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Unity, C#</span>
        </ListItem>
        <ListItem>
          <Meta>Demo</Meta>
          <Box mt={4}>
            <Unity
              style={{ width: '640px', height: '360px' }}
              unityContext={unityContext}
            />
          </Box>
        </ListItem>
        <ListItem>
          <Meta>Game Build</Meta>
          <Link href={WindowsYouLink} isExternal>
            Windows Game Build <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Game Build</Meta>
          <Link href={MacYouLink} isExternal>
            Mac Game Build <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      {/* <Paragraph>
        We created a level with deepwater areas that block Link&apos;s way. In
        order to go through that area, Link leaned to jump over water. He also
        needed to activate the truth stone (the name of a trigger) to create the
        path by himself.
      </Paragraph>
      <Paragraph>
        Link can jump over water if he is facing one, otherwise, he will jump in
        place. Jumping can activate triggers on the ground. When Link is
        jumping, enemies can not reach him.
      </Paragraph>
      <Paragraph>
        In the first room, you have to perform two jumps to pass. As an
        introduction, the first jump is straightforward. Only one block width,
        and you can just try on the new mechanism. No one dies in the first
        jump. However, if you do not change your path during the second jump,
        you will directly fall into the water. You need to move to another point
        to jump. This will also help people think about the importance of the
        jump position and the jump distance. Then it comes to the twist, you
        will find out immediately that you can not jump across the water when
        you go into the second room. At the same time, you will see the triggers
        with a special color in the corner. You will need to use the jump
        mechanism you learned in the previous room to reach the triggers and
        create path four yourself. Finally, you will come across some familiar
        blade traps. You can try to deal with them using the original way or try
        to jump over it.
      </Paragraph>
      <Paragraph>
        Link can jump over water if he is facing one, otherwise, he will jump in
        place. Jumping can activate triggers on the ground. When Link is
        jumping, enemies can not reach him.
      </Paragraph> */}
    </Container>
  </Layout>
)

export default Work
