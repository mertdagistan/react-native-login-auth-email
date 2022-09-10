import AsyncStorage from "@react-native-async-storage/async-storage";

const GetItem = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (error) {
    // Error retrieving data
  }
};

const SetItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    // Error saving data
  }
};


const RemoveItem = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    // Error saving data
  }
};


export { SetItem, GetItem ,RemoveItem};
