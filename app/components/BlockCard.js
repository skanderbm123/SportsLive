import React from 'react'
import { StyleSheet, Text, View , Image } from 'react-native'
import Title from './Title'
import Subtitle from './Subtitle'

const BlockCard = ({}) => {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/adaptive-icon.png')} style={styles.image}/>
            <View style={styles.contentContainer}>
                <Title>Some title</Title>
                <Subtitle>Some Desc</Subtitle>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container :{ 
        width: '100%',
        height: 300,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#fff'
    },
    image: {
        width: '100%',
        height: 200
    },
    contentContainer: {
        padding: 5 ,

    }

})

export default BlockCard;
