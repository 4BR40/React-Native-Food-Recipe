import React from 'react';
import { Platform } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import CategoriesScreen from '../srcreens/CategoriesScreen';
import CategoryMealsScreen from '../srcreens/CategoryMealsScreen';
import MealDetailScreen from '../srcreens/MealDetailScreen';
import FavoritesScreen from '../srcreens/FavoritesScreen';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const mealsStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        gestureEnabled: false,
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
        },
        headerTintColor:
          Platform.OS === 'android' ? 'white' : Colors.primaryColor,
      }}
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
};

const favStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        gestureEnabled: false,
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
        },
        headerTintColor:
          Platform.OS === 'android' ? 'white' : Colors.primaryColor,
      }}
    >
      <Stack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{ title: 'Favorites' }}
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
};

const tabNavigatorOptions = {
  activeTintColor: Colors.accentColor,
};
const tabMealNavigatorOptions = {
  tabBarIcon: (tabInfo) => {
    return <Ionicons name="ios-restaurant" size={25} color={tabInfo.color} />;
  },
};
const tabFavNavigatorOptions = {
  tabBarIcon: (tabInfo) => {
    return <Ionicons name="ios-star" size={25} color={tabInfo.color} />;
  },
};

const MealsNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={tabNavigatorOptions}>
        <Tab.Screen
          name="Meals"
          component={mealsStackNavigator}
          options={tabMealNavigatorOptions}
        />
        <Tab.Screen
          name="Favorites"
          component={favStackNavigator}
          options={tabFavNavigatorOptions}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MealsNavigator;
