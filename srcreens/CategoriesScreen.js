import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';

import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = (props) => {
  console.log(props)
  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity
        // style={styles.gridItem}
        onPress={() => {
          props.navigation.navigate('CategoryMeals', {
            categoryId: itemData.item.id,
          });
        }}
      >
        <View style={styles.gridItem}>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default CategoriesScreen;
