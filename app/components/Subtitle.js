import React from 'react'
import { View, Text , StyleSheet } from 'react-native'

const Subtitle = ({children, numberOfLines = 2, size=13}) => {
    return (
            <Text 
                numberOfLines={numberOfLines} 
                style={{fontSize : size}}
            >
             {children}    
            </Text>
    )
}
const styles = StyleSheet.create({
    container: {}
})

export default Subtitle;
