import { View, Text, StyleSheet, Button } from 'react-native'
import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
    Easing,
} from 'react-native-reanimated';

import React from 'react'

export default function Animations() {

    const randomWidth =  useSharedValue(10)
    const config = {
        duration:500,
        easing: Easing.bezier(0.5,0.01,0, 1)
    }

    const style = useAnimatedStyle(() => {
        return {
            width: withTiming(randomWidth.value, config)
        }
    })
  return (
    <View style={styles.container}>
      <Text>Animations</Text>
    <View>
        <Animated.View style={[styles.box, style]}/>
        <Button 
            title='Toggle'
            onPress={() => {
                randomWidth.value = Math.random() * 350
            }}
        />
    </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    box: {
        width: 100,
        height: 80,
        backgroundColor: 'black',
        margin: 30,
      },
})