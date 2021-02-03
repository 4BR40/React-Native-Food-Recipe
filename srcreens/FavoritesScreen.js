import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';


import HeaderButton from '../components/HeaderButton';
import MealList from '../components/MealList';
import mealsReducer from '../store/reducers/meals';


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

  const favMeals = useSelector(state => state.meals.favoriteMeals);

  return <MealList listData={favMeals} navigation={props.navigation} />;
};

export default FavoritesScreen;
