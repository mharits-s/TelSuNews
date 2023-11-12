import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    Dimensions,
    Linking,
    ScrollView,
} from "react-native";
import { Separator, Button } from '../components/index';

const windowWidth = Dimensions.get("window").width;

class DetailNews extends Component {
    backHomepage = () => {
        this.props.navigation.navigate('Article');
    }
    render() {
        const { route } = this.props;
        const data = route.params.data;

        return (
            <>
            <ScrollView>
                <View style={styles.container}>
                <View style={styles.paddingContainer}>
                        <Text style={styles.title}>{data.title}</Text>
                        <Separator height={4} />
                        <Text style={styles.date}>{data.date}</Text>
                        <Separator height={16} />
                    </View>
                    <Image source={{ uri: data.image }} style={styles.image} />
                    <Separator height={16} />
                    <View style={styles.paddingContainer}>
                        <Text style={styles.content}>{'\u00A0\u00A0\u00A0\u00A0\u00A0'}{data.content}</Text>
                    </View>

                    <Button
                        text="Read More"
                        onPress={() =>
                            Linking.openURL(data.link).catch((err) => console.error("Error", err))
                        }
                    />
                </View>
                
            </ScrollView>
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
    },
    BackgroundArticle: {
        flex: 1,
    },
    image: {
      width: '100%',
      height: 200,
      resizeMode: "stretch",
      borderRadius: 8,
    },
    title: {
      fontSize: 22,
      fontWeight: "bold",
      textAlign: 'center',
      color: '#B20819',
    },
    date: {
        fontSize: 12,
        textAlign: 'center',
        color: '#6B6B6B',
    },
    content: {
      fontSize: 15,
      textAlign: 'justify',
    },
    paddingContainer: {
        padding: 10,
    },
});

export default DetailNews;
