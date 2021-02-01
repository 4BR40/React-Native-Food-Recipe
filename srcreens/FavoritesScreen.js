import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MEALS } from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';
import MealList from '../components/MealList';


const FavoritesScreen = (props) => {
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
  const favMeals = MEALS.filter((meal) => meal.id === 'm1' || meal.id === 'm2');
  return <MealList listData={favMeals} navigation={props.navigation} />;
};

export default FavoritesScreen;
