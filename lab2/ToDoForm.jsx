import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ToDoForm = () => {
  return (
    <View style={styles.form}>
      <TextInput style={styles.input} placeholder="Add a new task..." />
      <Button title="Add" />
    </View>
  );
};

const styles = StyleSheet.create({
  form: { flexDirection: 'row', padding: 10 },
  input: { flex: 1, padding: 5, borderColor: '#ddd', borderWidth: 1, marginRight: 5 }
});

export default ToDoForm;
