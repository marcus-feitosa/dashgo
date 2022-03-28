import { Flex, Text } from "@chakra-ui/react";

export function Header(){
    return(
        <Flex
         as="header"
         w="100%"
         maxWidth={1480}
         h="20"
         mx="auto"
         mt="4"
         px="6"
         align="center"

         >
        <Text
        font-size="3xl"
        font-weight="bold"
        letterSpacing="tight"
        w="64"
        >
            DashGo
            <Text 
            color='pink.500'
            as="span"
            ml="1"
            >
            .</Text>
        </Text>

        <Flex as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={400}
        alignSelf="center"
        
        >


        </Flex>
        </Flex>
    )
    
    }