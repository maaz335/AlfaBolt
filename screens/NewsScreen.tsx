import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  Linking,
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
      style={styles.card}
      onPress={() => Linking.openURL(item.url)}
    >
      {item.urlToImage ? (
        <Image source={{ uri: item.urlToImage }} style={styles.image} />
      ) : (
        <Image source={Images.NoImage} style={styles.image} />
      )}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.author}>By {item.author || 'Unknown'}</Text>
        <Text style={styles.description} numberOfLines={3}>
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
