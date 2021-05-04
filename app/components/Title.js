import React from 'react'
import { View, Text , StyleSheet } from 'react-native'

const Title = ({children, numberOfLines = 2, size=18}) => {
    return (
            <Text 
                numberOfLines={numberOfLines} 
                style={{fontWeight: 'bold', fontSize : size}}
            >
             {children}    
            </Text>
    )
}
const styles = StyleSheet.create({
    container: {}
})

export default Title
