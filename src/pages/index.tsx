import {Flex, Button, Stack} from '@chakra-ui/react'
import { Input } from '../components/Form/Input'


export default function Home() {
  return (
    <Flex w='100vw' h='100vw' align='center' justify='center'>
      <Flex 
      as="form"
      width="100%"
      maxWidth={360}
      bg='gray.800'
      p='8'
      borderRadius={8}
      flexDir='column'
      >
     
     
      <Stack spacing='4'>
        <Input type='email' name="email" label="Email"/>
        <Input type='password' name="password" label="Senha"/>
     
        </Stack>
        <Button type="submit" mt='6' colorScheme={'orange'} size='lg'>Entrar</Button>

      </Flex>
    </Flex>
  )
}
