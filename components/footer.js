import { Box, Link } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      This website is built based on the{' '}
      <Link href="https://www.craftz.dog/" isExternal>
        Takuya Matsuyama's website
      </Link>
      <br />
      &copy; {new Date().getFullYear()} Evan Kuo. All Rights Reserved.
    </Box>
  )
}

export default Footer
