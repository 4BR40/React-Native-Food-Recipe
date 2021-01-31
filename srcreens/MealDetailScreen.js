import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MEALS } from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';

const MealDetailScreen = (props) => {
  const mealId = props.route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      title: selectedMeal.title,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Favorite"
            iconName="ios-star"
            onPress={() => {
              console.log('Mark');
            }}
          ></Item>
        </HeaderButtons>
      ),
    });
  });

  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Text>{selectedMeal.complexity}</Text>
      <Text>{selectedMeal.duration}</Text>
      <Text>{selectedMeal.isGlutenFree}</Text>
      <Text>{selectedMeal.isLactoseFree}</Text>
      <Text>{selectedMeal.isVegetarian}</Text>
      <Text>{selectedMeal.isVegan}</Text>
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

export default MealDetailScreen;
