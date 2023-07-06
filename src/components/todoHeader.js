import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/taskSlice';

export default function TodoHeader() {
    const [todo, setTodo] = useState('');
    const dispatch = useDispatch();

    const onSubmit = () => {
        if (todo.trim().length === 0) {
            Alert.alert('Please enter task');
            console.log('empty')
            setTodo('')
            return;
        }
        dispatch(addTodo({ task: todo }))
        // dispatch({ type: 'ADD_TASk', payload: todo })
        setTodo('')
    }
    return (
        <View>
            <Text style={{
                fontSize: 20, fontWeight: 'bold', textAlign: 'center',
                marginTop: 60
            }}>
                Todo List
            </Text>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <TextInput
                    style={{
                        borderColor: 'black',
                        borderWidth: 1,
                        padding: 10, margin: 10, width: '80%', borderRadius: 5
                    }}
                    onChangeText={(text) => setTodo(text)}
                    value={todo}
                    placeholder='Add Todo'
                />

                <TouchableOpacity style={{
                    backgroundColor: 'grey',
                    padding: 10, margin: 10, width: '80%', borderRadius: 4
                }}
                    onPress={() => onSubmit()}
                >
                    <Text style={{ textAlign: 'center', color: '#fff' }}>Add</Text>
                </TouchableOpacity>
            </View>
            {/* <Button style={{ width: '70%' }} title='Add Todo'></Button> */}
        </View>
    )
}

const style = StyleSheet.create({});
