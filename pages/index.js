// import NextLink from 'next/link'
import {
  // Link,
  Container,
  Heading,
  Box,
  // SimpleGrid,
  // Button,
  // List,
  // ListItem,
  useColorModeValue,
} from '@chakra-ui/react'

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
      </Box>
    </Container>
  )
}

export default Page
