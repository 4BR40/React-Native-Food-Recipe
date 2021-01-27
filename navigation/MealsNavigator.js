import React from 'react';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
// import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { createDrawerNavigator } from 'react-navigation-drawer';

import CategoriesScreen from '../srcreens/CategoriesScreen';
import CategoryMealsScreen from '../srcreens/CategoryMealsScreen';
import MealDetailScreen from '../srcreens/MealDetailScreen';

// const MealsNavigator = createStackNavigator({
//   Categories: CategoriesScreen,
//   CategoryMeals: {
//     screen: CategoryMealsScreen,
//   },
//   MealDetail: MealDetailScreen,
// });

const Stack = createStackNavigator();

const MealsNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{ title: 'Categories' }}
      />
      <Stack.Screen
        name="CategoryMeals"
        component={CategoryMealsScreen}
        options={{ title: 'Categories Meals' }}
      />
      <Stack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={{ title: 'Meal detail' }}
      />
    </Stack.Navigator>
  );
}

export default MealsNavigator;
