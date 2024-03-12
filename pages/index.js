import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  // SimpleGrid,
  // Button,
  // List,
  // ListItem,
  Image,
  useColorModeValue,
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a student studying CS at the University of Texas at
        Austin!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Evan Kuo
          </Heading>
          <p>Aspiring Software Engineer and AI/ML Researcher</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/kuo.jpg"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work &amp; Projects
        </Heading>
        <Paragraph>
          Evan is a student at the University of Texas at Austin who is
          interested in full-stack development and AI/ML research. Currently, he
          is a part of the Undergraduate Robot Air Hockey Research Group,
          focusing on training a robotic arm to play air hockey using
          Reinforcement Learning. Additionally, he is an engineering fellow in
          the{' '}
          <Link
            as={NextLink}
            href="https://txproduct.notion.site/Texas-Product-Engineering-Organization-bf30d6c098ac4b3889bb1524194fd4b9"
            passHref
            scroll={false}
          >
            Texas Product Engineering Organization
          </Link>{' '}
          and is working on a web app called{' '}
          <Link
            as={NextLink}
            href="https://thoughtless-teal.vercel.app/"
            passHref
            scroll={false}
          >
            Thoughtless
          </Link>{' '}
          to help organizations process applications easier.
        </Paragraph>
      </Section>
    </Container>
  )
}

export default Page
