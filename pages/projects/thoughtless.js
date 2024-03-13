import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Inkdrop">
    <Container>
      <Title>
        Thoughtless <Badge>2024-</Badge>
      </Title>
      <P>
        Many campus organizations use google forms as their member applications
        and consequently have to process the applications on google sheets. My
        team and I noticed that this was a painful process as reading paragraph
        responses in the little cells in google sheets is quite unwieldy.
      </P>
      <P>
        Thoughtless is a web application that seeks to solve this issue by
        taking the clunky output of the google forms and displaying it in an
        easy-to-read fashion as well as providing a way for each reviewer to
        leave indidivual ratings and comments on the responses of each
        applicant.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://thoughtless-teal.vercel.app/">
            https://thoughtless-teal.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Firebase, Firestore NextUI, TailwindCSS</span>
        </ListItem>
      </List>

      <ProjectImage
        src="/images/projects/thoughtless_eyecatch.png"
        alt="Thoughtless"
      />
      <ProjectImage
        src="/images/projects/thoughtless_eyecatch.png"
        alt="Thoughtless"
      />
    </Container>
  </Layout>
)

export default Work
