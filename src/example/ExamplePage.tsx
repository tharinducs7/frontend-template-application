// import { Container } from '@openedx/paragon';
import {
  SimpleGrid, Box, Card, Image, Stack, CardBody, Text, Heading, CardFooter, Button,
} from '@chakra-ui/react';

const ExamplePage: React.FC  = () => (
  <main>
    <div className="py-5">
      <h1>Example Page</h1>
      <p>Hello world hiii</p>
      <SimpleGrid columns={2} spacing={10}>
        <Box bg="tomato" height="auto">
          <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              objectFit="cover"
              maxW={{ base: '100%', sm: '200px' }}
              src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="Caffe Latte"
            />

            <Stack>
              <CardBody>
                <Heading size="md">The perfect latte</Heading>

                <Text py="2">
                  Caffè latte is a coffee beverage of Italian origin made with espresso
                  and steamed milk.
                </Text>
              </CardBody>

              <CardFooter>
                <Button variant="solid" colorScheme="blue">
                  Buy Latte
                </Button>
              </CardFooter>
            </Stack>
          </Card>
        </Box>
        <Box bg="tomato" height="80px" />
        <Box bg="tomato" height="80px" />
        <Box bg="tomato" height="80px" />
        <Box bg="tomato" height="80px" />
      </SimpleGrid>
    </div>
  </main>
);

export default ExamplePage;
