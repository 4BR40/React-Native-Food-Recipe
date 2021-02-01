import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { View, Text, StyleSheet } from 'react-native';

import HeaderButton from '../components/HeaderButton';

const FiltersScreen = (props) => {
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconName="ios-menu"
            onPress={() => {
              props.navigation.toggleDrawer();
            }}
          ></Item>
        </HeaderButtons>
      ),
    });
  });
  return (
    <View style={styles.screen}>
      <Text>Filter Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FiltersScreen;
