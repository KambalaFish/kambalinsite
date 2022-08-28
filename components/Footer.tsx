import { Container, Text } from './index';
import React from 'react';

const Footer = (): React.ReactElement => {
  return (
    <Container as={'footer'} maxWidth={'100%'} height={'6.25rem'} justifyContent={'center'}>
      <Text margin={0} fontSize={'0.9rem'}>
        © {new Date().getFullYear()} Дмитрий Камбалин
      </Text>
    </Container>
  );
};

export default Footer;
