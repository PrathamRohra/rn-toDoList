import React, { useState } from 'react'
import { Modal, Pressable, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { markAsDone, addTasks } from '../redux/todo';

export default function createTaskModal({ modalVisbile, hide }) {
  const dispatch = useDispatch();
  const [task, setTask] = useState('');
  const handleAddTask = () => {
    dispatch(addTasks({ taskName: task }) );
  };
  
  return (
    <Modal 
        visible={modalVisbile}
        onRequestClose={hide}
        style = {styles.modal}
    >
        <TouchableOpacity onPress={hide} style={styles.modalBtn}>
            <Text style={styles.modalBtnText}>Home</Text>
        </TouchableOpacity>
        <TextInput 
            editable
            style={styles.taskInput}
            placeholder='Enter a task'
            onChangeText={setTask}
        />

        <TouchableOpacity onPress={handleAddTask} style={styles.addButton}>
            <Text style={styles.addButtonLabel}>Add Task</Text>
        </TouchableOpacity>
    </Modal>
  )
}

const styles = StyleSheet.create({
    modal: {
        height: 50,
        width: 100,
    },
    modalBtn: {
        backgroundColor: "#5D6B98",
        height: 50,
        alignItems: 'center',
        paddingTop: 15,
    },
    modalBtnText: {
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 15
    },
    taskInput: {
        height: 60,
        backgroundColor: "#F9F9FB",
        borderRadius: 20,
        padding: 5,
        paddingLeft: 25,
        marginTop: 10
    },
    addButton: {
      backgroundColor: '#5D6B98',
      borderRadius: 10,
      padding: 10,
      alignItems: 'center',
      marginTop: 10,
  },
  addButtonLabel: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
  }
})
