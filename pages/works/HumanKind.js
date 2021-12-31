import { Container, Badge, Link, List, ListItem, Box, HStack } from '@chakra-ui/react'
import { Title, Meta, MobileWorkImage, VideoEmbeded } from '../../components/work'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'

const demoLink =
  'https://drive.google.com/file/d/1S_qsXbD6uURNKjSlJddzwdGnWjbGSxK4/preview'

const Work = () => (
  <Layout title="HumanKind">
    <Container>
      <Title>
        HumanKind <Badge>2021</Badge>
      </Title>
      <Paragraph>
        A donation platform that facilitates smaller, direct donations to
        neighbors in need.
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Solution Overview</Meta>
          <Paragraph>
            Humankind serves two user types: donors and recipients of donations,
            or simply, recipients. Each user group has unique needs and
            behaviors that the design team has taken into consideration. Donors
            are people who have the financial means to donate to people in need.
            Their needs are not met by the existing methods of donating. This
            may be because they are hesitant to trust the management of charity
            organizations, do not prefer or do not have a method to interact
            face-to-face with people in need, and may be seeking a more
            efficient and convenient way of donating in the age of technology.
            Recipients are people who are in socioeconomic disadvantaged
            situations and need extra assistance in affording livelihood
            necessities such as groceries, clothing, and personal care items.
            Humankind verifies that people who sign up to receive donations
            qualify for need-based donations. In the onboarding process,
            recipient users submit their annual income. The submitted annual
            income will be compared to the livable income for their geographic
            area as researched and recommended by the Massachusetts Institute of
            Technology Living Wage Calculator (Massachusetts Institute of
            Technology 2021). If the reported income is less than the livable
            income in their geographic area, the user qualifies to receive help.
          </Paragraph>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Figma</span>
        </ListItem>
      </List>
      <HStack alignItems={'center'} justifyContent={'space-around'}>
          <MobileWorkImage
            src="/images/works/HumanKind_01.png"
            alt="HumanKind - Welcome Screen"
          />
          <MobileWorkImage
            src="/images/works/HumanKind_02.png"
            alt="HumanKind - Home Screen"
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
