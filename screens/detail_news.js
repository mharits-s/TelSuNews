import React, { Component } from 'react';
import { StyleSheet, Text,View, Image, Linking, ScrollView,} from 'react-native';
import { Separator, Button } from '../components/index';

class DetailNews extends Component {
    backToNewspage = () => {
        this.props.navigation.navigate('News');
    }
    render() {
        const { route } = this.props;
        const data = route.params.data;

        return (
            <>
            <ScrollView style={{backgroundColor: '#1B1B1B'}}>
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
                </View>
                
            </ScrollView>
            <View style={{backgroundColor: '#1B1B1B'}}>
            <Button
                text="Read More"
                onPress={() =>
                    Linking.openURL(data.link).catch((err) => console.error("Error", err))
                }
            />
            </View>
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: '#1B1B1B',
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
      color: '#D4AF37',
    },
    date: {
        fontSize: 12,
        textAlign: 'center',
        color: '#BFBFBF',
    },
    content: {
      fontSize: 15,
      textAlign: 'justify',
      color: '#FFFFFF',
    },
    paddingContainer: {
        padding: 10,
    },
});

export default DetailNews;
