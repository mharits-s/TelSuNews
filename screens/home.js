import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, Linking, StyleSheet} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button } from '../components/index';

class Home extends Component {
    navigateToNews = () => {
    this.props.navigation.navigate('News');
  }

  handleCardPress = (url) => {
    if (url) {
      Linking.openURL(url);
    }
  }

  renderCard = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => this.handleCardPress(item.url)}>
        <View style={styles.card}>
          <Image source={item.icon} style={styles.icon} />
          <View style={{ flexDirection: 'column' }}>
            <Text style={styles.nama}>{item.name}</Text>
            <Text style={styles.desc}>{item.type}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    const Name = "Muhammad Harits Shofwan Adani";
    const NIM = "IF21 - 1203210003";

    const cardData = [
      {
        icon: require('../assets/ITTS.png',),
        name: "ITTelkom Surabaya",
        type: "Institusi",
        url: 'https://www.ittelkom-sby.ac.id',
      },
      {
        icon: require('../assets/Instagram.png'),
        name: "hrts.s",
        type: "Instagram",
        url: 'https://www.instagram.com/hrts.s',
      },
      {
        icon: require('../assets/Behance.png'),
        name: "/hrtsart",
        type: "Behance",
        url: 'https://www.behance.net/hrtsart',
      },
      {
        icon: require('../assets/LinkedIn.png'),
        name: "in/mharits",
        type: "LinkedIn",
        url: 'https://www.linkedin.com/in/mharits',
      },
      {
        icon: require('../assets/GitHub.png'),
        name: "mharits-s",
        type: "GitHub",
        url: 'https://www.github.com/mharits.s',
      },
      {
        icon: require('../assets/Gmail.png'),
        name: "mharits.beyourself@gmail.com",
        type: "Gmail",
        url: 'https://www.mharits.beyourself@gmail.com',
      },
    ];

    return (
      <View style={{ flex: 1 }}>
        <StatusBar style='auto' />
        <Image source={require('../assets/IMG.png')}
          style={{
            width: '100%',
            height: undefined,
            aspectRatio: 1,
          }}
        />
        <View style={{
            position: 'absolute',
            top: 320,
            left: 0,
            right: 0,
            backgroundColor: 'linear-gradient(rgba(255, 255, 255, 0.7), transparent)', 
            flexDirection: 'row',
          }}>
            <Image source={require('../assets/IF.png')} style={{...styles.icon, marginLeft: 7, marginVertical: 7,}}/>
            <View style={{flexDirection: 'column'}}>
              <Text style={{...styles.nama, color: '#1B1B1B', marginTop: 7,}}>{Name}</Text>
              <Text style={{...styles.desc, color: '#1B1B1B', marginBottom: 7,}}>{NIM}</Text>
            </View>
          </View>
          <FlatList
            data={cardData}
            renderItem={this.renderCard}
            keyExtractor={(item, index) => index.toString()} style={{ backgroundColor: '#1B1B1B'}}
          />
        <TouchableOpacity style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <Button
            text="Lihat Berita"
            onPress={this.navigateToNews}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  icon: {
    width: 42,
    height: 42,
    marginRight: 12,
  },
  card: {
    marginVertical: 8,
    marginHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  nama: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'left',
    color: '#FFFFFF',
  },
  desc: {
    textAlign: 'left',
    fontSize: 12,
    color: '#BFBFBF',
  },
});

