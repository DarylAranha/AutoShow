import {View, Text, StyleSheet, Dimensions} from 'react-native'
import { getHeaderTitle } from '@react-navigation/elements'
import { TitleText } from '../Text';
import * as React from "react";
import { Header, Icon } from "@rneui/base";

import Back from '../Back';

export default ({ navigation, route, options, back, showBack }) => {
    const title = getHeaderTitle(options, route.name);
    // debugger
    return (
      <Header
        backgroundColor="#fff"
        backgroundImageStyle={{}}
        barStyle="default"
        centerComponent={ <TitleText text={title} />}
        centerContainerStyle={{}}
        containerStyle={{ width: Dimensions.get('window').width, }}
        leftComponent={!showBack ? <Back navigation={navigation} route={route}/> : null}
        leftContainerStyle={{}}
        linearGradientProps={{}}
        placement="left"
        statusBarProps={{}}
      />
    );
  }

