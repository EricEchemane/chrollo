import type { NextPage } from 'next';
import { Text, Box, CallToActionButton, Row, Center } from '../styled_components/index';

const Home: NextPage = () => {
  return (
    <div>
      <Center p={2} className='fancy' m={3} width='max-content' gap='2rem'>
        <Box>
          <Text className='title' mb={1}> We are growing our team </Text>
          <Text> Join our fully-remote workforce and empower people to supercharge their productivity. </Text>
        </Box>
        <CallToActionButton cursorPointer>Read more </CallToActionButton>
      </Center>
    </div>
  );
};

export default Home;
