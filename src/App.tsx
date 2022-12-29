import { 
  ChakraProvider,
  Input,
  Box,
  Button
} from '@chakra-ui/react'


function App() {
  return (
// React.fragment

    <ChakraProvider>
      <Box minHeight='100vh' bg='#0082d1' paddingTop='30px'>
        <center>
          <Box backgroundColor='#ffffff' borderRadius='25px' paddingTop='20px' paddingBottom='20px' width='50%'>
            <center>
              <h1>Faça Login</h1>
            <Input placeholder='email' width='80%' />
            <Input placeholder='password' type='password' width='80%' />
            </center>
              <Button colorScheme='teal' size='sm' width='10%' marginTop='20px' >
                Entrar
              </Button>
          </Box>
        </center>
      </Box>
    </ChakraProvider>
    
  );
}

export default App;
