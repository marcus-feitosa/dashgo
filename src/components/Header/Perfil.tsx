import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile(){
    return(
        <Flex
            align="center"
            >
                <Box mr='4' textAlign="right">
                    <Text>Marcus Feitosa</Text>
                    <Text color="gray.300" fontSize="small">
                        marcusfeitosa@gmail.com
                        </Text>
                </Box>
                <Avatar size="md" name="Marcus Feitosa" src=""/>
            </Flex>
    );
}