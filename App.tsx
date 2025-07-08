import { Image, StyleSheet, Text, View, Pressable} from "react-native";
import myImage from './assets/app_logo.jpeg';


function App() {
  

  return (
   <View style={styles.container}>
    <Image
      style={styles.tinylogo}
     source={myImage}
    />
    <Text style={styles.text}>
      "Explore the expert lawyers with ease"</Text>
      <View style={styles.view2}>
        <Pressable style={styles.Pressable} ><Text style={styles.text}>Login</Text></Pressable>
        <Pressable style={styles.Pressable2} ><Text style={styles.text2}>Sign Up</Text></Pressable>
      </View>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
  text2: {
    fontSize: 20,
    color: 'white',
  },
  tinylogo: {
    margin: 140,
    borderCurve: 'continuous',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'black',
    width: 150,
    height: 150,
  },
  view2: {
    padding: 20,
    margin: 100,
    backgroundColor: 'dodgerblue',
    height: 317,
    width: 400,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  
    alignContent: 'flex-end',
    justifyContent: 'flex-end',
  },
    button: {
    backgroundColor: 'white',
    padding: 10,
    
  },
  Pressable: {
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    height: 60,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Pressable2: {
    backgroundColor: 'dodgerblue',
    borderColor: 'white',
    borderWidth: 2,
    marginTop: 40,
    marginBottom: 60,
    padding: 10,
    height: 60,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;
