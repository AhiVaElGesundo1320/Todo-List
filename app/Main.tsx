import { View, Text } from 'react-native'
import React from 'react'
import TodoList from '@/Common/TodoList'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function Main() {
    return (
        <SafeAreaProvider>
            <View>
                <TodoList />
            </View>
        </SafeAreaProvider>
    )
}