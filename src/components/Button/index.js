import React from 'react';
import theme from '../../theme';

import {
  Container,
  Title
} from './styles';

export const Button = ({ onpress, title, type }) => {
  return (
    <Container onPress={onpress} style={{ backgroundColor: type == 'red' ? theme.colors.Red : theme.colors.Green }}>
      <Title>{title}</Title>
    </Container>
  );
}