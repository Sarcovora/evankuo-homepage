import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
	return (
		<Container>
			<Box borderRadius='lg' bg="red" p={3} mb={6} align="center">
				Hello, I&apos;m a student studying CS at the University of Texas at Austin!
			</Box>

			<Box display={{md:'flex'}}>
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