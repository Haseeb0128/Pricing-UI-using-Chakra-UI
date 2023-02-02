import React from 'react'
import {Box, Heading, Text} from "@chakra-ui/react";

export default function Header() {
  return (
    <Box textAlign={{base: 'left', md: 'left', lg:'center'}} bg="purple.600" pt="88.45px" pb="246.24px" pl="10px" color="white">
        <Heading fontSize="48px" fontWeight="800">Simple pricing for your business</Heading>
        <Text fontSize="24px" fontWeight="500" pt="16.08px">Plans that are carefully crafted to suit your business.</Text>
    </Box>
  )
}
