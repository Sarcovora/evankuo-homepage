// import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { ProjectsGridItem } from '../components/grid-item'

import thumbThoughtless from '../public/images/projects/thoughtless_eyecatch.png'

const Projects = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <ProjectsGridItem
            id="thoughtless"
            title="Thoughtless."
            thumbnail={thumbThoughtless}
          >
            A web application that makes the application review process easier
            for organizations.
          </ProjectsGridItem>
        </Section>
        {/* <Section> */}
        {/*   <ProjectsGridItem */}
        {/*     id="thoughtless" */}
        {/*     title="Thoughtless." */}
        {/*     thumbnail={thumbThoughtless} */}
        {/*   > */}
        {/*     A web application that makes the application review process easier */}
        {/*     for organizations. */}
        {/*   </ProjectsGridItem> */}
        {/* </Section> */}

        {/* <Section delay={0.1}> */}
        {/*   <ProjectsGridItem */}
        {/*     id="thoughtless" */}
        {/*     title="Thoughtless." */}
        {/*     thumbnail={thumbThoughtless} */}
        {/*   > */}
        {/*     A web application that makes the application review process easier */}
        {/*     for organizations. */}
        {/*   </ProjectsGridItem> */}
        {/* </Section> */}
        {/* <Section delay={0.1}> */}
        {/*   <ProjectsGridItem */}
        {/*     id="thoughtless" */}
        {/*     title="Thoughtless." */}
        {/*     thumbnail={thumbThoughtless} */}
        {/*   > */}
        {/*     A web application that makes the application review process easier */}
        {/*     for organizations. */}
        {/*   </ProjectsGridItem> */}
        {/* </Section> */}
      </SimpleGrid>

      {/* <Section delay={0.2}> */}
      {/*   <Divider my={6} /> */}
      {/**/}
      {/*   <Heading as="h3" fontSize={20} mb={4}> */}
      {/*     Team Projects */}
      {/*   </Heading> */}
      {/* </Section> */}
      {/**/}
      {/* <SimpleGrid columns={[1, 1, 2]} gap={6}> */}
      {/*   <Section delay={0.3}> */}
      {/*     <ProjectsGridItem */}
      {/*       id="thoughtless" */}
      {/*       title="Thoughtless." */}
      {/*       thumbnail={thumbThoughtless} */}
      {/*     > */}
      {/*       A web application that makes the application review process easier */}
      {/*       for organizations. */}
      {/*     </ProjectsGridItem> */}
      {/*   </Section> */}
      {/*   <Section delay={0.3}> */}
      {/*     <ProjectsGridItem */}
      {/*       id="thoughtless" */}
      {/*       title="Thoughtless." */}
      {/*       thumbnail={thumbThoughtless} */}
      {/*     > */}
      {/*       A web application that makes the application review process easier */}
      {/*       for organizations. */}
      {/*     </ProjectsGridItem> */}
      {/*   </Section> */}
      {/**/}
      {/*   <Section delay={0.3}> */}
      {/*     <ProjectsGridItem */}
      {/*       id="thoughtless" */}
      {/*       title="Thoughtless." */}
      {/*       thumbnail={thumbThoughtless} */}
      {/*     > */}
      {/*       A web application that makes the application review process easier */}
      {/*       for organizations. */}
      {/*     </ProjectsGridItem> */}
      {/*   </Section> */}
      {/*   <Section delay={0.3}> */}
      {/*     <ProjectsGridItem */}
      {/*       id="thoughtless" */}
      {/*       title="Thoughtless." */}
      {/*       thumbnail={thumbThoughtless} */}
      {/*     > */}
      {/*       A web application that makes the application review process easier */}
      {/*       for organizations. */}
      {/*     </ProjectsGridItem> */}
      {/*   </Section> */}
      {/* </SimpleGrid> */}
    </Container>
  )
}

export default Projects
