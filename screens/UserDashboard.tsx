import { View, Alert } from 'react-native';
import styles from '../components/styles';
import Container from '../components/container';
import Images from '../components/images';
import auth from '@react-native-firebase/auth';
import Button from '../components/button';

export default function UserDashBoardScreen({
  navigation,
}: {
  navigation: any;
}) {
  const handleSignOut = async () => {
    try {
      await auth().signOut();
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });
    } catch (error) {
      Alert.alert('Error', 'Failed to sign out. Please try again.');
      console.error('Sign out error:', error);
    }
  };

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

      <Button
        title="Sign Out"
        navigationTitle=""
        navigation={navigation}
        pressableStyle={styles.signOutButton}
        textStyle={styles.signOutButtonText}
        onPress={handleSignOut}
      />
    </View>
  );
}
