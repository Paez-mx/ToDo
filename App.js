import React, {useState} from 'react';
import { Text, View, StyleSheet, Keyboard, ScrollView } from 'react-native';
import TareaInputField from './components/TareaInputField';
import TareaItem from './components/TareaItem';


export default function App() {
  const [tareas, setTareas] = useState([]);
  const addTarea = (tarea) => {
    if(tarea == null) return;
    setTareas([...tareas, tarea]);
    Keyboard.dismiss();
  }
  const borrarTarea = (deleteIndex) => {
    setTareas(tareas.filter((value, index) => index != deleteIndex));
  }
  const abrirTarea = () => {
    
  }
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>
        To Do List
      </Text>
      <ScrollView style={styles.scrView}>
        {tareas.map((tarea, index) => {
          return(
            <View key={index} style={styles.tareaContainer}>
              <TareaItem index={index +1} tarea={tarea} borrarTarea={() => borrarTarea(index) } />
            </View>
          )
        })}
      </ScrollView>
      <TareaInputField addTarea={addTarea} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  headText: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scrView:{marginBottom:70,},
  tareaContainer:{marginTop:20}
});