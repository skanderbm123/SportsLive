import React from 'react'
import { StyleSheet, Text, View , Image } from 'react-native'
import BlockCard from './BlockCard'

const FeaturedNews = ({}) => {
    return <BlockCard style={{marginVertical : 15}}/>;
};

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

});

export default FeaturedNews;
