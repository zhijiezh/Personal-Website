import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { GridItem, WorkGridItem } from '../components/grid-item'
import Section from '../components/section'
import Layout from '../components/layouts/article'

import thumbTicTacToe from '../public/images/works/tic-tac-toe.png'
import thumbHumanKind from '../public/images/works/HumanKind.png'

const descriptionHumanKind = 'Humankind serves two user types: donors and recipients of donations, or simply, recipients. Each user group has unique needs and behaviors that the design team has taken into consideration. Donors are people who have the financial means to donate to people in need. Their needs are not met by the existing methods of donating. This may be because they are hesitant to trust the management of charity organizations, do not prefer or do not have a method to interact face-to-face with people in need, and may be seeking a more efficient and convenient way of donating in the age of technology. Recipients are people who are in socioeconomic disadvantaged situations and need extra assistance in affording livelihood necessities such as groceries, clothing, and personal care items. Humankind verifies that people who sign up to receive donations qualify for need-based donations. In the onboarding process, recipient users submit their annual income. The submitted annual income will be compared to the livable income for their geographic area as researched and recommended by the Massachusetts Institute of Technology Living Wage Calculator (Massachusetts Institute of Technology 2021). If the reported income is less than the livable income in their geographic area, the user qualifies to receive help. '

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <GridItem
              id="tic-tac-toe"
              href="https://codepen.io/zhijiezh/full/mdOgjGm"
              title="React tic-tac-toe"
              thumbnail={thumbTicTacToe}
            >
              The react official tutorial
            </GridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="HumanKind"
              title="HumanKind"
              thumbnail={thumbHumanKind}
              description={descriptionHumanKind}
            >
              A donation platform that facilitates smaller, direct donations to neighbors in need. 
            </WorkGridItem>
          </Section>
          <Section>
            <GridItem
              id="tic-tac-toe"
              href="https://codepen.io/zhijiezh/full/mdOgjGm"
              title="React tic-tac-toe"
              thumbnail={thumbTicTacToe}
            >
              The react official tutorial
            </GridItem>
          </Section>
          <Section>
            <GridItem
              id="tic-tac-toe"
              href="https://codepen.io/zhijiezh/full/mdOgjGm"
              title="React tic-tac-toe"
              thumbnail={thumbTicTacToe}
            >
              The react official tutorial
            </GridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
