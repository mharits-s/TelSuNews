import { StyleSheet, Text, TouchableOpacity, View, FlatList, Image, Dimensions } from 'react-native';
import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator } from 'react-native';

const windowWidth = Dimensions.get("window").width;

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
    };
  }
  componentDidMount(){
    this.getData();
  }
  backToHomepage = () => {
    this.props.navigation.navigate('Homepage')
  }
  getData = () => {
    fetch('https://raw.githubusercontent.com/dauditts/pm-static-api/main/articles.json')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json.articles, isLoading : false});
      })
      .catch((error) => {
        console.error(error);
      });
  };
  renderItem = ({ item }) => {
    const {navigation} = this.props;
    return (
        <>
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('DetailNews', {data: item})}>
            <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
                <Image source={{ uri: item.image }} style={styles.thumbnail} />
                <View style={{ flexDirection: "column"}}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.date}>{item.date}</Text>
                </View>
            </View>
        </TouchableOpacity>
        <View style={styles.itemBorder}></View>
        </>
    )
  }

  render() {
    if (this.state.isLoading){
      <View style={styles.container}>
        <ActivityIndicator size="large" color='blue' />
      </View>
    }else{
      return (
          <View style={{ flex: 1 }}>
            <StatusBar style="auto" />
            <FlatList
                data={this.state.data}
                renderItem={this.renderItem}
                keyExtractor={(item) => item.id}
            />
          </View>
      );
    }
  }
}

export default News;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
    },
    item: {
      padding: 24,
      backgroundColor: '#1B1B1B',
    },
    itemBorder: {
      borderWidth: 0.5,
      borderColor: "#D9D9D9",
    },
    thumbnail: {
      width: 84,
      height: 84,
      borderRadius: 8,
    },
    title: {
      fontSize: 16,
      width: windowWidth - 150,
      marginLeft: 12,
      fontWeight: '600',
      color: "#FFFFFF",
    },
    date: {
        fontSize: 12,
        fontWeight: "regular",
        marginLeft: 12,
        color: "#BFBFBF",
    }
  });