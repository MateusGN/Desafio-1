import React, { useDebugValue, useState } from "react";
import { StyleSheet, View } from "react-native";

import { Header } from "../components/Header";
import { Task, TasksList } from "../components/TasksList";
import { TodoInput } from "../components/TodoInput";

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    const newTask = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    };

    setTasks((oldTasks) => [...oldTasks, newTask]);
  }

  function handleToggleTaskDone(id: number) {
    setTasks((oldTasks) => {
      let newTasks = [...oldTasks];
      newTasks.forEach((value) => {
        if (value.id === id) value.done = !value.done;
      });
      return newTasks;
    });
  }

  function handleRemoveTask(id: number) {
    console.log(tasks);
    setTasks((oldTasks) => {
      let newTasks = [...oldTasks];
      newTasks = newTasks.filter((value) => value.id !== id);
      return newTasks;
    });
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList
        tasks={tasks}
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBEBEB",
  },
});
