import { SectionList, Text, TouchableOpacity, View } from 'react-native';
import styles from '../components/styles';
import { RootStackParamList } from '../components/Routing';
import { StackNavigationProp } from '@react-navigation/stack';
import { useState } from 'react';
import Button from '../components/button';

type SectionListNavigation = StackNavigationProp<
  RootStackParamList,
  'FlatList'
>;

export default function SectionListScreen({
  navigation,
}: {
  navigation: SectionListNavigation;
}) {
  const [selectedItem, setSelectedItem] = useState<string>('');

  const sections = [
    {
      title: 'Programming Languages',
      data: [
        { id: '1', title: 'C++' },
        { id: '2', title: 'HTML' },
        { id: '3', title: 'React' },
        { id: '4', title: 'React Native' },
        { id: '5', title: 'Flutter' },
      ],
    },
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

  const renderSectionHeader = ({ section }: { section: { title: string } }) => (
    <Text style={[styles.SectionListHeaderText]}>{section.title}</Text>
  );

  return (
    <View style={styles.container}>
      <View style={styles.FlatListSmall}>
        <SectionList
          sections={sections}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
          keyExtractor={item => item.id}
        />
      </View>

      <Button
        title=""
        navigation={navigation}
        navigationTitle=""
        pressableStyle={styles.signUpButtonPressable}
        textStyle={styles.quoteText}
      />
    </View>
  );
}
