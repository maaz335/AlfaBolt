import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    marginBottom: 50,
  },
  buttonText: {
    fontSize: 20,
  },
  quoteText: {
    fontSize: 20,
    color: 'white',
  },
  appLogoImage: {
    margin: 100,
    borderCurve: 'continuous',
    borderRadius: 15,
    width: 150,
    height: 150,
  },
  loginImage: {
    marginTop: 60,
    marginBottom: 20,
    borderCurve: 'continuous',
    width: 150,
    height: 150,
  },
  loginTextInput: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'grey',
    width: 300,
    marginTop: 20,
    height: 50,
    color: 'black',
    paddingLeft: 20,
  },
  loginTouchable: {
    marginTop: 10,
  },
  loginTouchableText: {
    textAlign: 'right',
    color: 'dodgerblue',
  },
  loginTouchableView: {
    width: 300,
    textAlign: 'right',
    flexDirection: 'row', // This is the key to making it a row
    // Optional: Add other Flexbox properties for alignment and spacing
    justifyContent: 'space-between',
  },
  columnView: {
    padding: 20,
    margin: 100,
    backgroundColor: 'dodgerblue',
    height: 317,
    width: 400,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignContent: 'flex-end',
    justifyContent: 'space-evenly',
  },
  loginButtonPressable: {
    backgroundColor: 'white',
    height: 60,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginScreenButtonView: {
    width: 300,
    marginTop: 20,
  },
  signUpButtonPressable: {
    backgroundColor: 'dodgerblue',
    borderColor: 'white',
    borderWidth: 2,
    height: 60,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1,
    // borderRadius: 8,
    // paddingHorizontal: 10,
    // marginBottom: 10,
  },
  suffixIcon: {
    marginLeft: 8,
    marginTop: 13,
  },
  signUpScreenKeyboardAvoidingView: { flex: 1, backgroundColor: 'white' },
});

export default styles;
