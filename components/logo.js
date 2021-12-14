import Image from 'next/image'
import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from "@emotion/styled"


const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transform: translateX(9px) rotate(-45deg);
  }
`

const Logo = () => {
  const footPrintImg = `/images/logo${useColorModeValue('', '-dark')}.png`

  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={footPrintImg} width={20} height={25} alt="logo" />  
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily="M PLUS Rounded 1c"
            fontWeight="bold"
            ml={3}
          >
            Zhijie Zhao
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
