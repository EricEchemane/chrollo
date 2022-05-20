import type { NextPage } from 'next';
import { Text, Box, CallToActionButton, Row, Center, Button, Badge, Input } from '../styled_components/index';

const Home: NextPage = () => {
  return (
    <div>
      <Center p={2.5} className='fancy' m={3} width='max-content' gap='2rem'>
        <Box>
          <Text className='title' mb={0.5}> We are growing our team </Text>
          <Text> Join our fully-remote workforce and empower people to supercharge their productivity. </Text>
        </Box>
        <Button href='https://google.com' target='_blank' as='a' filled hue={255} > Read more <span className='icon'>&#8594;</span> </Button>
      </Center>

      <Text my={2} className='title' align='center'> Buttons </Text>

      <Center gap='2rem'>
        <Button href='#' as='a' filled hue={255} > Button as link <span className='icon'>&#8594;</span> </Button>
        <Button as={'button'} filled hue={155} direction='row-reverse'> Filled button <span className='icon'>&#8594;</span> </Button>
        <Button href='#' as='a'> Normal link <span className='icon'>&#8594;</span> </Button>
        <Button href='#' as='a' color='dodgerblue'> Colored link  </Button>
      </Center>

      <Center p={3} gap="3rem">
        <div>Hello <Badge>4</Badge> </div>
        <Input placeholder='Username' small />
        <Input placeholder='Password' small type={'password'} />
        <Input placeholder='Number' small type={'number'} />
        <Input placeholder='Username' />
        <Input placeholder='Password' type={'password'} />
        <Input placeholder='Number' type={'number'} />
        <Input placeholder='Textarea' as='textarea' />
      </Center>
    </div>
  );
};

export default Home;
