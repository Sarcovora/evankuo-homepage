import { Box, Heading, Text, UnorderedList, ListItem } from '@chakra-ui/react'

        //<!-- <Text as="i"> -->
        //<!--   Expected Graduation: May 2026 -->
        //<!--   <br /> -->
        //<!--   <br /> -->
        //<!-- </Text> -->
const Education = () => (
  <Box mb={6}>
    <Heading as="h3" variant="section-title" mb={4}>
      Education
    </Heading>
    <UnorderedList spacing={4}>
      <ListItem>
        <Text>
          <Text as="b">
            <Text as="u">University of Texas at Austin</Text>
          </Text>
          <Text as="abbr"> | </Text>
          <Text as="i">
            B.S. in Computer Science
            <br />
          </Text>
        </Text>
        <br />
        <Text>
          <Text as="b">Relevant Coursework</Text>: Computer Organization &amp;
          Architecture, Robot Learning, Linear Algebra, Probability I, Honors
          Data Structures, Honors Discrete Math, Honors Vector Calculus <br />
          <br />
        </Text>
        <Text>
          <Text as="b">Organizations</Text>: Texas Product Engineering
          Organization, UT Programming Competition, RL Directed Reading Program
        </Text>
      </ListItem>
      <ListItem>
        <Text as="b">
          <Text as="u">
            St. Dominic Savio Catholic High School
            <br />
          </Text>
        </Text>
        <Text as="em">
          Graduated as Valedictorian May 2023
          <br />
          <br />
        </Text>
        <Text>
          <Text as="b">Relevant Coursework</Text>: AP CS Principles, AP CSA, AP
          Physics C: Mechanics, AP Physics C: E&amp;M, AP Calc BC, AP Stats,
          Honors Linear Algebra <br />
          <br />
        </Text>
        <Text>
          <Text as="b">Online Courses</Text>: Coursera: Neural Networks and Deep
          Learning by Andrew Ng, The Concord Consortium: Math Modeling with R,
          BWSI Python Core 2022, BWSI Version Control (Git &amp; GitHub) 2022
        </Text>
      </ListItem>
    </UnorderedList>
  </Box>
)

export default Education
