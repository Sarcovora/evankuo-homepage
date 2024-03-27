import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  // AspectRatio,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="BevoBook">
    <Container>
      <Title>
        BevoBook <Badge>2024</Badge> <Meta>Hackathon Winner</Meta>
      </Title>
      <P>
        AI-based application to allow easier access to course registration for
        UT students
      </P>
      <P>
        Some accomplishments we were proud of include getting 50+ users on
        launch and getting the award at UT Austin Formula Hacks 2024: MLH Prize
        for Best AI Application Built with Cloudflare
      </P>
      <P>
        In the future, it would be nice to use Real-Time Registrar Data: because
        of authentication requirements via UT EID/utexas accounts, we had to
        scrape data once on our side for it to be used in the app. Looking
        forward, we hope to integrate BevoBook with UT authentication for live
        and continuous updates to reflect changes on the course registrar.
        Additionally, it would be nice to integrate better LLM&apos;s: as
        students, we used the free LLM&apos;s available to us via CloudFlare,
        but to expand, we would like to use (currently paid) versions of the
        latest, more intelligent LLM&apos;s (eg. ChatGPT 4 and Claude 3 Opus).
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github Repo</Meta>
          <Link href="https://github.com/Honyant/BevoBook" target="_blank">
            view <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Next.js 14, TypeScript, TailWind CSS, shadcn-ui, .tech domain,
            Cloudflare AI API, GPT API, Cosine Similarity, FastAPI, Azure,
            Vercel, and more.
          </span>
        </ListItem>
      </List>

      <ProjectImage src="/images/projects/bevobook/demo.png" alt="Demo" />
      <ProjectImage
        src="/images/projects/bevobook/techStack.png"
        alt="TechStack"
      />
      <ProjectImage src="/images/projects/bevobook/cow.png" alt="Logo" />
    </Container>
  </Layout>
)

export default Work
