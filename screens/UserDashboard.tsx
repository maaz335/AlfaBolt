import { View } from 'react-native';
import styles from '../components/styles';
import Container from '../components/container';
import Images from '../components/images';

export default function UserDashBoardScreen({
  navigation,
}: {
  navigation: any;
}) {
  return (
    <View style={styles.mainView}>
      <Container
        title="Search Relevant Lawyers"
        image={Images.Questionnaire}
        navigation={navigation}
        navigationTitle="LawyerForm"
      />
      <Container
        title="Buy Subscription"
        image={Images.Subscription}
        navigation={navigation}
        navigationTitle=""
      />
    </View>
  );
}
