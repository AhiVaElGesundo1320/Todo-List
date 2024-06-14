import { View, Text, useColorScheme, StyleSheet, Button } from 'react-native'

import React from 'react'

export default function Example() {
    const themeColor = useColorScheme()
    const [color, setColor] = React.useState(false)

    const handleChangeTheme = () => {
        setColor(!color)
        console.log(color === false ? 'light' : 'dark')
    }

    const themeTextStyle = themeColor === 'light' && color === false ? styles.lightThemeText : styles.darkThemeText
    const themeContainterStyle = themeColor === 'light' && color === true ? styles.lightContainer : styles.darkContainer

    return (
        <View>
            <View style={[styles.container, themeContainterStyle]}>
                <Text style={[styles.text, themeTextStyle]}>Hola jeje</Text>
                <Button
                    title='Dark Theme'
                    onPress={handleChangeTheme}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 200,
        borderRadius: 10,
        margin: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
    },
    lightContainer: {
        backgroundColor: '#d0d0c0',
    },
    darkContainer: {
        backgroundColor: '#242c40',
    },
    lightThemeText: {
        color: '#242c40',
    },
    darkThemeText: {
        color: '#d0d0c0',
    },
});