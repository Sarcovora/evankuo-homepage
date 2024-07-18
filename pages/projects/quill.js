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
  <Layout title="Quill">
    <Container>
      <Title>
        Quill <Badge>Jan 2024</Badge>
      </Title>
      <P>
        Quill is a Modern SaaS-Platform Built With Next.js 14 that allows its
        users to chat with their PDF Documents
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://quill-pi-five.vercel.app/">
            https://quill-pi-five.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Next.js 14, App Router, tRPC, TypeScript, Prisma, Tailwind, Stripe,
            OpenAI API, Pinecone, Kinde, and more
          </span>
        </ListItem>
      </List>

      <ProjectImage
        src="/images/projects/quill/file-upload-preview.jpg"
        alt="File Upload Preview"
      />
      <ProjectImage
        src="/images/projects/quill/dashboard-preview.jpg"
        alt="Dashboard"
      />
    </Container>
  </Layout>
)

export default Work
