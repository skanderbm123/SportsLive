import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import FlatCard from './FlatCard';
import SmallCard from './SmallCard'
import Title from './Title'

const VerticalList = ({title,data}) => {
    return (
        <View>
            <Title size={20}>{title}</Title>
            <View style={styles.container}>
                {data.map(item => <FlatCard item={item} key={item.id}  />)}
            </View>
        </View>
    )};

const styles = StyleSheet.create({
    container:{}
})

export default VerticalList;

