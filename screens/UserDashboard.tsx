import { Image, Text, View } from 'react-native';
import styles from '../components/styles';
import questionnaireImage from '../assets/quest.png';
import subscriptionImage from '../assets/subs.png';


export default function UserDashBoardScreen() {
  return <View style={styles.mainView}>
    <View style={styles.userDashBoardScreenView}>
     <Image style={styles.userDashBoardScreenImage} source={questionnaireImage} />
      <Text style={styles.userDashBoardScreenText}>Search Relevant Lawyer</Text>
    </View>
     <View style={styles.userDashBoardScreenView}>
     <Image style={styles.userDashBoardScreenImage} source={subscriptionImage} />
      <Text style={styles.userDashBoardScreenText}>Buy Subscription</Text>
    </View>
  </View>;
}
