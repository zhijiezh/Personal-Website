import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { GridItem, WorkGridItem } from '../components/grid-item'
import Section from '../components/section'
import Layout from '../components/layouts/article'

import thumbTicTacToe from '../public/images/works/tic-tac-toe.png'
import thumbHumanKind from '../public/images/works/HumanKind.png'

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
