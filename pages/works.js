import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { GridItem, WorkGridItem } from '../components/grid-item'
import Section from '../components/section'
import Layout from '../components/layouts/article'

import thumbTicTacToe from '../public/images/works/tic-tac-toe.png'
import thumbRandomQuoteMachine from '../public/images/works/RandomQuoteMachine.png'
import thumbMarkdownPreviewer from '../public/images/works/MarkdownPreviewer.png'
import thumbJavaScriptCalculator from '../public/images/works/JavascriptCalculator.png'
import thumbDrumMachine from '../public/images/works/DrumMachine.png'
import thumbPomodoroTimer from '../public/images/works/PomodoroTimer.png'

import thumbHumanKind from '../public/images/works/HumanKind.png'
import thumbWishlist from '../public/images/works/Wishlist.png'
import thumbRecipeBook from '../public/images/works/RecipeBook.png'
import thumbRedLakeCounty from '../public/images/works/RedLakeCounty.png'

const descriptionHumanKind =
  'A donation platform that facilitates smaller, direct donations to neighbors in need. '

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="Wishlist"
              title="Wishlist"
              thumbnail={thumbWishlist}
              category="Front-end"
            >
              An mobile app where you can creat wishlists and view your friends'
              wishlists.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="HumanKind"
              title="HumanKind"
              thumbnail={thumbHumanKind}
              category="UX Design"
            >
              {descriptionHumanKind}
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="RecipeBook"
              title="Recipe Book"
              thumbnail={thumbRecipeBook}
              category="Front-end"
            >
              A recipe book website that holds your recipes.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="RedLakeCounty"
              title="Red Lake County is not perfect but definitely not the worse"
              thumbnail={thumbRedLakeCounty}
              category="Data Vis"
            >
              Data visualization for the critique on Red Lake County.
            </WorkGridItem>
          </Section>
          <Section>
            <GridItem
              id="tic-tac-toe"
              href="https://codepen.io/zhijiezh/full/mdOgjGm"
              title="Tic Tac Toe"
              thumbnail={thumbTicTacToe}
              category="Front-end"
            >
              React Tutorial with extra improvements
            </GridItem>
          </Section>
          <Section>
            <GridItem
              id="RandomQuoteMachine"
              href="https://codepen.io/zhijiezh/full/yLVjLWd"
              title="Random Quote Machine"
              thumbnail={thumbRandomQuoteMachine}
              category="Front-end"
            >
              Little cards that inspires your day
            </GridItem>
          </Section>
          <Section>
            <GridItem
              id="DrumMachine"
              href="https://codepen.io/zhijiezh/full/PobdaxV"
              title="Build a Drum Machine"
              thumbnail={thumbDrumMachine}
              category="Front-end"
            >
              Drum simulator that brings rhythm everywhere
            </GridItem>
          </Section>
          <Section>
            <GridItem
              id="MarkdownPreviewer"
              href="https://codepen.io/zhijiezh/full/xxRjMXz"
              title="Markdown Previewer"
              thumbnail={thumbMarkdownPreviewer}
              category="Front-end"
            >
              Display your markdown!
            </GridItem>
          </Section>
          <Section>
            <GridItem
              id="JSCalculator"
              href="https://codepen.io/zhijiezh/full/BaQGrjv"
              title="JavaScript Calculator"
              thumbnail={thumbJavaScriptCalculator}
              category="Front-end"
            >
              Just a calculator that looks better
            </GridItem>
          </Section>
          <Section>
            <GridItem
              id="PomodoroTimer"
              href="https://codepen.io/zhijiezh/full/vYybNEZ"
              title="Pomodoro Timer"
              thumbnail={thumbPomodoroTimer}
              category="Front-end"
            >
              The 25 + 5 timer that boosts your efficiency
            </GridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
