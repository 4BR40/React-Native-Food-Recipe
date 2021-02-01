import React from 'react';
import { Platform } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CategoriesScreen from '../srcreens/CategoriesScreen';
import CategoryMealsScreen from '../srcreens/CategoryMealsScreen';
import MealDetailScreen from '../srcreens/MealDetailScreen';
import FavoritesScreen from '../srcreens/FavoritesScreen';
import FiltersScreen from '../srcreens/FiltersScreen';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();

const MealsStackNavigator = () => {
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

const FavStackNavigator = () => {
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

const FilterStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Filters"
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
        name="Filters"
        component={FiltersScreen}
        options={{ title: 'Filter Meals' }}
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
const MainTabNavigator = () => {
  return (
    <Tab.Navigator tabBarOptions={tabNavigatorOptions}>
      <Tab.Screen
        name="Meals"
        component={MealsStackNavigator}
        options={tabMealNavigatorOptions}
      />
      <Tab.Screen
        name="Favorites"
        component={FavStackNavigator}
        options={tabFavNavigatorOptions}
      />
    </Tab.Navigator>
  );
};

const drawerOptions = {
  activeTintColor: Colors.accentColor,
  labelStyle: {
    fontFamily: 'open-sans-bold',
  },
};
const drawerHomeOptions = {
  drawerLabel: 'Meals',
};

const drawerFilterOptions = {
  drawerLabel: 'Filters',
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContentOptions={drawerOptions}>
      <Drawer.Screen
        name="Home"
        component={MainTabNavigator}
        options={drawerHomeOptions}
      />
      <Drawer.Screen
        name="Filter"
        component={FilterStackNavigator}
        options={drawerFilterOptions}
      />
    </Drawer.Navigator>
  );
};

const MealsNavigator = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default MealsNavigator;
