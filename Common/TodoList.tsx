//Native Components
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList
} from 'react-native'
//Styles
import styles from '@/Styles/Style'
import React from 'react'
//Render Function for Flat List
import RenderItem from './RenderItem'
//AsyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface Tasks {
    title: String
    date: Date
    done: Boolean,
    id: Number
}

let id = 0


export default function TodoList() {


    const [inputText, setInputText] = React.useState('')
    const [listTasks, setListTasks] = React.useState<Tasks[]>([])

    React.useEffect(() => {
        getData()

    }, [])
    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('my-Tasks');
            if (value !== null) {
                const tasks = JSON.parse(value);
                setListTasks(tasks)
            }
        } catch (e) {
            // error reading value
        }
    };

    const storeData = async (value: Tasks[]) => {
        try {
            await AsyncStorage.setItem('my-Tasks', JSON.stringify(value));
        } catch (e) {
            // saving error
        }
    };


    const addTask = () => {
        setListTasks([
            ...listTasks,
            {
                title: inputText,
                date: new Date,
                done: false,
                id: id++
            },
        ])
        setInputText('')
        storeData(listTasks)
    }

    const markDone = (task: Tasks) => {
        const temporal = [...listTasks]
        const findIndex = temporal.findIndex(el => el.title === task.title)
        const td = temporal[findIndex]
        td.done = !td.done
        setListTasks(temporal);
        storeData(temporal)
    }

    const deleteFunction = (task: Tasks) => {
        const temporal = [...listTasks]
        const findIndex = temporal.findIndex(el => el.title === task.title)
        temporal.splice(findIndex, 1)
        setListTasks(temporal)

        //setListTasks(
        //    listTasks.filter(el => el.title !== task.title)
        //)
        storeData(listTasks)
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Lista de Tareas</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    value={inputText}
                    onChangeText={(text) => setInputText(text)}
                    placeholder='Tareas'
                    style={styles.textInput}
                />
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={addTask}
                >
                    <Text style={styles.whiteText}>Agregar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.scrollContainer}>
                <FlatList
                    data={listTasks}
                    renderItem={
                        ({ item }) =>
                            <RenderItem
                                item={item}
                                deleteFunction={deleteFunction}
                                markDone={markDone}
                            />
                    }
                />
            </View>
        </View>
    )
}

