import React from 'react'
import {Box, HStack, Flex, Icon, Text} from '@chakra-ui/react'
import starShield from './icons/starShield'
import tagIcon from './icons/tagIcon'
import refundIcon from './icons/refundIcon'

export default function Features() {
  return (
    <Box fontSize="18px" fontWeight="700" maxW="800px" m="auto" mt="25px" mb="90px" px="50px">
        <Flex direction={{ base: "column", lg: "row" }}>
            <HStack mb="20px">
                <Icon as={starShield} />
                <Text>30 days money back Guarantee</Text>
            </HStack>
            <HStack mb="20px">
                <Icon as={tagIcon} />
                <Text>No setup fees 100% hassle-free</Text>
            </HStack>
            <HStack mb="20px">
                <Icon as={refundIcon} />
                <Text>No monthly subscription Pay once and for all</Text>
            </HStack>
        </Flex>
    </Box>
  )
}
