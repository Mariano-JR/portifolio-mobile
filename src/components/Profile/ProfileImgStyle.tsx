import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '15%',
    color: '#323232'
  },

  img: {
    resizeMode: 'contain',
    width: 150,
    height: 150,
  },

  shadow: {
    borderColor: '#04B3C8',
    borderWidth: 3,
    borderRadius: 100,
    elevation: 10
  },

  text: {
    marginTop: 10,
    fontSize: 20
  }
});