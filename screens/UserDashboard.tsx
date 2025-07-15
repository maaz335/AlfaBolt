import { View } from 'react-native';
import styles from '../components/styles';
import questionnaireImage from '../assets/quest.png';
import subscriptionImage from '../assets/subs.png';
import Container from '../components/container';
import { RootStackParamList } from '../components/Routing';
import { StackNavigationProp } from '@react-navigation/stack';

type userDashScreenNavigation = StackNavigationProp<
  RootStackParamList,
  'UserDashBoardScreen'
>;

export default function UserDashBoardScreen({
  navigation,
}: {
  navigation: userDashScreenNavigation;
}) {
  return (
    <View style={styles.mainView}>
      <Container
        title="Search Relevant Lawyers"
        image={questionnaireImage}
        navigation={navigation}
        navigationTitle="LawyerForm"
      />
      <Container
        title="Buy Subscription"
        image={subscriptionImage}
        navigation={navigation}
        navigationTitle=""
      />
    </View>
  );
}
