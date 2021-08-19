import React from 'react';
import {useTheme} from 'styled-components';

import {Container} from './styles';
import Feather from 'react-native-vector-icons/Feather';
import {TouchableOpacity, View} from 'react-native';
import {HeaderTitleLogo} from '../HeaderTitleLogo';
import {NativeStackHeaderProps} from '@react-navigation/native-stack/lib/typescript/src/types';
interface HeaderPreps extends NativeStackHeaderProps {}
const Header = (props: HeaderPreps) => {
  const {colors} = useTheme();
  const {index} = props.navigation.getState();
  return (
    <Container>
      {index === 0 ? (
        <View />
      ) : (
        <TouchableOpacity onPress={props.navigation.goBack}>
          <Feather name="arrow-left" color={colors.heading} size={25} />
        </TouchableOpacity>
      )}
      <HeaderTitleLogo />
      <View />
    </Container>
  );
};

export default Header;
