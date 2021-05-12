import React from 'react'
import { StyleSheet, Text, View , Image } from 'react-native'
import Title from './Title'
import Subtitle from './Subtitle'


const FlatCard = ({ item}) => {
    const {thumbnail, title , desc} = item;
    return (
        <View style={styles.container}>
            <Image
                 source={{uri : thumbnail }}
                 style={styles.image}
                />
            <View style={styles.contentContainer}>
                <Title>{title}</Title>
                <Subtitle>{desc}</Subtitle>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        backgroundColor : 'white',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: 10
    },
    image:{
        height: '100%',
        flex: 0.35,
    },
    contentContainer: {
        flex: 0.65,
        paddingHorizontal: 5
    }

})

export default FlatCard;
