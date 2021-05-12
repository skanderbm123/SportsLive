import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import SmallCard from './SmallCard'
import Title from './Title'

const HorizontalList = ({title,data}) => {
    return (
        <>
        <Title size={20}>{title}</Title>
            <FlatList 
                data = {data} 
                keyExtractor = {item => item.id} 
                horizontal 
                showsHorizontalScrollIndicator = {false}
                renderItem =
                    {({item}) => <SmallCard item={item} />}
             />
         </>
    )};

const styles = StyleSheet.create({})

export default HorizontalList;

