import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { GridItem } from "../components/grid-item";
import Section from "../components/section";

import thumbTicTacToe from '../public/images/works/tic-tac-toe.png'

const Works = () => {
  return(
    <Container>
      <Heading as="h3" fontSize={20} mb ={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1,1,2]} gap={6}>
        <Section>
          <GridItem id="tic-tac-toe" href="https://codepen.io/zhijiezh/full/mdOgjGm" title="React tic-tac-toe" thumbnail={thumbTicTacToe}>
            The react official tutorial
          </GridItem>
        </Section>
        <Section>
          <GridItem id="tic-tac-toe" href="https://codepen.io/zhijiezh/full/mdOgjGm" title="React tic-tac-toe" thumbnail={thumbTicTacToe}>
            The react official tutorial
          </GridItem>
        </Section>
        <Section>
          <GridItem id="tic-tac-toe" href="https://codepen.io/zhijiezh/full/mdOgjGm" title="React tic-tac-toe" thumbnail={thumbTicTacToe}>
            The react official tutorial
          </GridItem>
        </Section>
        <Section>
          <GridItem id="tic-tac-toe" href="https://codepen.io/zhijiezh/full/mdOgjGm" title="React tic-tac-toe" thumbnail={thumbTicTacToe}>
            The react official tutorial
          </GridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works