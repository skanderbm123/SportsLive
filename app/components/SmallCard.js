import React from 'react'
import { View, Text , StyleSheet, Dimensions } from 'react-native'
import BlockCard from './BlockCard'

const {width} = Dimensions.get('window')

const SmallCard = ({item}) => {
    return <BlockCard item={item} style={styles.container} imageStyle={styles.image}/>  
};

const styles = StyleSheet.create({
    container: {  
        width: width / 2,
        height: 200,
        marginRight: 15
    },
    image : {
        height : 100
    }
})

export default SmallCard;
