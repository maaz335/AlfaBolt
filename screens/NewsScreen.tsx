import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  Linking,
  StyleSheet,
} from 'react-native';
import axios from 'axios';
import styles from '../components/styles';
import Images from '../components/images';

export default function NewsScreen() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL =
    'https://newsapi.org/v2/everything?q=tesla&from=2025-06-24&sortBy=publishedAt&apiKey=4e35d85095124aee8f4383b76658c8b8';

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(API_URL);
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={localStyles.card}
      onPress={() => Linking.openURL(item.url)}
    >
      {item.urlToImage ? (
        <Image source={{ uri: item.urlToImage }} style={localStyles.image} />
      ) : (
        <Image source={Images.NoImage} style={localStyles.image} />
      )}
      <View style={localStyles.textContainer}>
        <Text style={localStyles.title}>{item.title}</Text>
        <Text style={localStyles.author}>By {item.author || 'Unknown'}</Text>
        <Text style={localStyles.description} numberOfLines={3}>
          {item.description}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.mainView}>
      {loading ? (
        <ActivityIndicator
          size="large"
          color="dodgerblue"
          style={{ marginTop: 20 }}
        />
      ) : (
        <FlatList
          data={articles}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          contentContainerStyle={{ padding: 10 }}
        />
      )}
    </View>
  );
}

const localStyles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
  },
  textContainer: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  author: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#333',
  },
});
