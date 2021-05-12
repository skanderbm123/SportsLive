import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import VerticalList from './VerticalList'

const PoliticalNews = ({data}) => {
    return <VerticalList title='Political News' data={data} />
    
}

const styles = StyleSheet.create({})

export default PoliticalNews;


