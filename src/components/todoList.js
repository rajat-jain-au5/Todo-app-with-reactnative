import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from '../redux/taskSlice';
export default function TodoList() {
    const dispatch = useDispatch();

    const todos = useSelector((state) => state.todos)
    console.log(todos)
    const renderItem = ({ item }) => {
        return (
            <View style={styles.item}>
                <Text style={styles.title}>{item.name}</Text>
                <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={() => dispatch(deleteTodo({ id: item.id }))}>

                    <MaterialIcons name="delete-outline" size={30} color="red" />
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            {todos && <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Todo List</Text>}
            <FlatList
                data={todos}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#e9e9e9',
        padding: 20,
        marginHorizontal: 16,
        marginVertical: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // width: '72%'
    },
    title: {
        fontSize: 24
    },
    delete: {
        color: 'red',
        fontSize: 24
    }
});