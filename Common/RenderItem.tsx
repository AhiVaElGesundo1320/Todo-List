//Native Components
import { View, Text, TouchableOpacity, Task } from 'react-native'
//Styles
import styles from '@/Styles/Style'
import React from 'react'
//Type interface
import { Tasks } from './TodoList'


interface Item {
    item: Tasks | any
    markDone: (task: Task | any) => void 
    deleteFunction: (task: Task | any) => void
}



export default function RenderItem({item, markDone, deleteFunction}:Item) {

    return (
        <View style={styles.itemContainer}>
            <TouchableOpacity onPress={() => markDone(item)}>
                <Text style={item.done === false ? styles.text : styles.textDone}>{item.title}</Text>
                <Text style={item.done === false ? styles.text : styles.textDone}>{new Date(item.date).toDateString()}</Text>
            </TouchableOpacity>
            {
                item.done === true ?
                    <TouchableOpacity
                        onPress={() => deleteFunction(item)}
                        style={styles.doneButton}
                    >
                        <Text style={styles.whiteText}>Eliminar</Text>
                    </TouchableOpacity>
                    : null
            }
        </View>
    )
}