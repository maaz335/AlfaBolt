import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import styles from '../components/styles';
import { useState } from 'react';
import Button from '../components/button';

export default function FlatListScreen({ navigation }: { navigation: any }) {
  const [selectedItem, setSelectedItem] = useState<string>('');

  const data = [
    { id: '1', title: 'C++' },
    { id: '2', title: 'HTML' },
    { id: '3', title: 'React' },
    { id: '4', title: 'React Native' },
    { id: '5', title: 'Flutter' },
  ];

  const renderItem = ({ item }: { item: { id: string; title: string } }) => (
    <TouchableOpacity
      style={styles.FlatListTouchable}
      onPress={() => setSelectedItem(item.id)}
    >
      <Text style={styles.quoteText}>{item.title}</Text>
      {selectedItem === item.id && (
        <Text style={styles.FlatListSelectedText}>Boom!!!</Text>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.FlatListSmall}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>

      <Button
        title="Section List"
        navigation={navigation}
        navigationTitle="SectionList"
        pressableStyle={styles.signUpButtonPressable}
        textStyle={styles.quoteText}
      />
    </View>
  );
}
