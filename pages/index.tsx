import type { NextPage } from 'next';
import { Text } from '../styled_components/index';

const Home: NextPage = () => {
  return (
    <div>
      <Text m={4} className='title'> Text component </Text>
    </div>
  );
};

export default Home;
