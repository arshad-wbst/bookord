import AsyncStorage from '@react-native-async-storage/async-storage';
const USER_DETAILS = 'user_details';
const TOKENS = 'tokens';

export const setUserDetails = user => {
  AsyncStorage.setItem(USER_DETAILS, JSON.stringify(user));
};
export const setTokens = user => {
  AsyncStorage.setItem(TOKENS, JSON.stringify(user));
};
export const getUserDetails = async () => {
  try {
    let userDetails = await AsyncStorage.getItem(USER_DETAILS);
    userDetails = JSON.parse(userDetails);
    console.log(userDetails, 'Local data');
    return userDetails;
  } catch (error) {
    console.log('Error fetching High Scores', error);
    return null;
  }
};
export const getTokens = async () => {
  try {
    let tokens = await AsyncStorage.getItem(TOKENS);
    tokens = JSON.parse(tokens);
    console.log(tokens, 'token data');
    return tokens;
  } catch (error) {
    console.log('Error fetching High Scores', error);
    return null;
  }
};
export const logout = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {}
};