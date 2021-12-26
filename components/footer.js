import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm" pt={20}>
      <Box>
      &copy; {new Date().getFullYear()} Zhijie Zhao. All Rights Reserved.
      </Box>
      <a href="https://www.craftz.dog/" target="_blank">
        Credit: Takuya Matsuyama
      </a>
    </Box>
  )
}

export default Footer
