import {View, Text, StyleSheet, Dimensions} from 'react-native'
import { getHeaderTitle } from '@react-navigation/elements'
import { TitleText } from '../Text';
import React, {useState, useEffect} from "react";
import { Header, Icon } from "@rneui/base";

import Back from '../Back';

export default ({ initalHomeTabs, navigation, route, options, back, showBack, title, updateBackButtonStatus, previousTitle, changeHeaderTitle }) => {

    return (
      <Header
        backgroundColor="#fff"
        backgroundImageStyle={{}}
        barStyle="default"
        centerComponent={ <TitleText text={title} customStyle={{fontSize: 25,}} />}
        centerContainerStyle={{}}
        containerStyle={{ width: Dimensions.get('window').width, }}
        leftComponent={showBack ? <Back navigation={navigation} route={route} updateBackButtonStatus={updateBackButtonStatus} previousTitle={previousTitle}/> : null}
        leftContainerStyle={{}}
        linearGradientProps={{}}
        placement="left"
        statusBarProps={{}}
      />
    );
  }

