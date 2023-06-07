import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { markAsDone } from '../redux/todo';

export default function displayTasks() {
  const { toDoList } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log(toDoList);
  // }, [toDoList]);

  const handleTaskDone = (task) => {
    dispatch(markAsDone({ key: task.key }));
  };

  return ( 
        <View style={styles.scrolling}>
          <FlatList
            data={toDoList}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.taskContainer} onPress={() => handleTaskDone(item)}>
                <View style={styles.taskView}>
                  {item.done ? (
                    <Image
                      source={require('../assets/checked.png')}
                      style={styles.plusIcon}
                    />
                  ) : (
                    <Image
                      source={require('../assets/unchecked.png')}
                      style={styles.plusIcon}
                    />
                  )}
                  <Text>{item.taskName}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
      </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    borderRadius: 20,
    backgroundColor: '#F9F9FB',
    height: 60,
    padding: 5,
    marginBottom: 10,
  },
  taskView: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
  },
  plusIcon: {
    marginRight: 30,
    marginLeft: 10,
  },
  scrolling: {
    maxHeight: 400
  }
});
