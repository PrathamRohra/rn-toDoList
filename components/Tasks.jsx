import React, { useState } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity, StyleSheet, Image, Modal, Button, Pressable, TextInput } from 'react-native';
import DisplayTasks from './displayTasks';
import CreateTaskModal from './createTaskModal';
import { useSelector, useDispatch } from 'react-redux';
import { addTasks, deleteAll } from '../redux/todo';

export default function Tasks() {
    const [modalVisbile, setModalVisible] = useState(false);
    const { toDoList } = useSelector((state) => state.todo);
    const dispatch = useDispatch();
    const show = () => { setModalVisible(true) }
    const hide = () => { setModalVisible(false); }
    
    const handleDelete = ()=>{
        dispatch(deleteAll());
    }

    // console.log(modalVisbile);
    return(

        <View style={styles.container}>
            <TouchableOpacity style={styles.deleteBtn} onPress={handleDelete}>
                <Image
                    source={require('../assets/deleteIcon.png')}
                    style={styles.icon}
                />
            </TouchableOpacity>

                <View >
                {/**Displaying the dynamic tasks */}
                    <DisplayTasks />
                
                        

                    <TouchableOpacity style={styles.taskContainer} onPress={show}>
                        <View style={styles.taskView}>
                            <Image
                                source={require('../assets/Union.png')}
                                style={styles.plusIcon}
                            />
                            <Text>Add Task</Text>
                        </View>
                    </TouchableOpacity>  

                </View>

            <CreateTaskModal modalVisbile={modalVisbile} hide={hide} />

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        padding: 20
    },
    icon: {
        marginTop: -35,
    },
    deleteBtn:{
        flex: 1,
        alignItems: 'flex-end',
    },
    taskContainer: {
        borderRadius: 20,
        backgroundColor: '#F9F9FB',
        height: 60,
        padding: 5,
    },
    taskView: {
        flex: 1,
        flexDirection: 'row',
        padding: 5,
        alignItems: 'center',
    },
    plusIcon: {
        marginRight: 30,
        marginLeft: 10
    },
})