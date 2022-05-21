import type { NextPage } from 'next';
import { Text, Box, CallToActionButton, Row, Center, Button, Badge, Input, Switch, Checkbox, Radio, Slider } from '../styled_components/index';
import fillSliderTracks from '../dist/slider';
import { ChangeEvent, useEffect, useState } from 'react';
import Head from 'next/head';

const Home: NextPage = () => {

  const [sliderValue, setSliderValue] = useState(30);
  const sliderInputHandler = (e: any) => setSliderValue(e.target.value);

  useEffect(() => {
    fillSliderTracks();
  });

  return (
    <div>
      <Head>
        <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet' />
      </Head>
      <Center p={2.5} className='fancy' m={3} width='max-content' gap='2rem'>
        <Box>
          <Text className='title' mb={0.5}> We are growing our team </Text>
          <Text> Join our fully-remote workforce and empower people to supercharge their productivity. </Text>
        </Box>
        <Button href='https://google.com' target='_blank' as='a' filled hue={255} > Read more <span className='icon'>&#8594;</span> </Button>
      </Center>

      <Text my={2} className='title' align='center'> Buttons </Text>

      <Center gap='2rem'>
        <Button filled > Install </Button>
        <Button href='#' as='a' filled hue={255} > Button as link <span className='icon'>&#8594;</span> </Button>
        <Button as={'button'} filled hue={155} direction='row-reverse'> Filled button <span className='icon'>&#8594;</span> </Button>
        <Button href='#' as='a'> Normal link <span className='icon'>&#8594;</span> </Button>
        <Button href='#' as='a' color='dodgerblue'> Colored link  </Button>
      </Center>

      <Text my={2} mt={5} className='title' align='center'> Inputs </Text>

      <Center p={3} gap="3rem" >
        <code>ctrl + k</code>
        <select name="color" id="color">
          <option value="red">red echemane </option>
          <option value="blue">blue</option>
          <option value="yellow">yellow</option>
        </select>

        <Switch />
        <Switch disabled />
        <Switch disabled checked />

        <Checkbox />
        <Checkbox disabled />
        <Checkbox disabled checked />

        <Radio name='gender' value='male' />
        <Radio name='gender' value='female' />

        <Slider min={0} max={100} value={sliderValue} onInput={sliderInputHandler} />

        <div className="icon">
          <i className='bx bxs-color'></i>
        </div>
        <div className="icon filled">
          <i className='bx bx-home-alt-2' ></i>
        </div>
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
