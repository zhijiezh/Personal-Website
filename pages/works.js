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
import thumbZelda from '../public/images/works/Zelda.png'
import thumbFindTheOtherYou from '../public/images/works/FindTheOtherYou.png'
import thumbSteinsFishingTale from '../public/images/works/SteinsFishingTale.png'

const descriptionHumanKind =
  'A donation platform that facilitates smaller, direct donations to neighbors in need. '

const categoryList = ['Front-end', 'UX Design', 'Data Vis', 'Game Design']

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
              id="SteinsFishingTale"
              title="Stein's Fishing Tale"
              thumbnail={thumbSteinsFishingTale}
              category={categoryList[3]}
            >
              A little fishing game at the end of the world.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="FindTheOtherYou"
              title="Find The Other You"
              thumbnail={thumbFindTheOtherYou}
              category={categoryList[3]}
            >
              A puzzle/explore game made with Unity.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="Zelda"
              title="Zelda"
              thumbnail={thumbZelda}
              category={categoryList[3]}
            >
              A simple NES game simulation made with Unity.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="Wishlist"
              title="Wishlist"
              thumbnail={thumbWishlist}
              category={categoryList[0]}
            >
              A mobile app where you can creat wishlists and view your friends'
              wishlists.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="HumanKind"
              title="HumanKind"
              thumbnail={thumbHumanKind}
              category={categoryList[1]}
            >
              {descriptionHumanKind}
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="RecipeBook"
              title="Recipe Book"
              thumbnail={thumbRecipeBook}
              category={categoryList[0]}
            >
              A recipe book website that holds your recipes.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="RedLakeCounty"
              title="Red Lake County is not perfect but definitely not the worse"
              thumbnail={thumbRedLakeCounty}
              category={categoryList[2]}
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
              category={categoryList[0]}
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
              category={categoryList[0]}
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
              category={categoryList[0]}
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
              category={categoryList[0]}
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
              category={categoryList[0]}
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
              category={categoryList[0]}
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
