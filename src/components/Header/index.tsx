import {View, Text, StyleSheet, Dimensions} from 'react-native'
import { getHeaderTitle } from '@react-navigation/elements'
import { TitleText } from '../Text';
import * as React from "react";
import { Header, Icon } from "@rneui/base";

import Back from '../Back';

export default ({ navigation, route, options, back }) => {
    const title = getHeaderTitle(options, route.name);
    
    return (
      <Header
        backgroundColor="#fff"
        backgroundImageStyle={{}}
        barStyle="default"
        centerComponent={ <TitleText text={title} />}
        centerContainerStyle={{}}
        containerStyle={{ width: Dimensions.get('window').width, }}
        leftComponent={<Back navigation={navigation} route={route}/>}
        leftContainerStyle={{}}
        linearGradientProps={{}}
        placement="left"
        statusBarProps={{}}
      />
    );
  }

