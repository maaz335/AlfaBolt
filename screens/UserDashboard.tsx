import { View } from 'react-native';
import styles from '../components/styles';
import questionnaireImage from '../assets/quest.png';
import subscriptionImage from '../assets/subs.png';
import Container from '../components/container';

export default function UserDashBoardScreen() {
  return (
    <View style={styles.mainView}>
      <Container title="Search Relevant Lawyers" image={questionnaireImage} />
      <Container title="Buy Subscription" image={subscriptionImage} />
    </View>
  );
}
