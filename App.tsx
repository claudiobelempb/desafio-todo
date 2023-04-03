import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import ImageCliboard from './src/assets/images/Clipboard.png'
import ImageLogo from './src/assets/images/logo.png'
import ImagePlus from './src/assets/images/plus.png'
import { CardTask } from './src/components/CardTask'
import { InputDefault } from './src/components/InputDefault'
import { colors } from './src/utils'
import { Styles } from './styles'

type Tasks = {
  id: string
  isComplete: boolean
  title: string
}

export default function App() {
  const [tasks, setTasks] = useState<Tasks[]>([])
  const [newTaskTitle, setNewTaskTitle] = useState('')

  function handleCreateNewTask() {
    // Crie uma nova task com um id random, não permita criar caso o título seja vazio.
    if (!newTaskTitle) return
    const newTask = {
      // id: String(Math.random()),React
      id: String(new Date().getTime()),
      title: newTaskTitle,
      isComplete: false,
    }
    setTasks((oldState) => [...oldState, newTask])
    setNewTaskTitle('')
  }

  function handleToggleTaskCompletion(id: string) {
    // Altere entre `true` ou `false` o campo `isComplete` de uma task com dado ID
    const filteredTask = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            isComplete: !task.isComplete,
          }
        : task,
    )
    setTasks(filteredTask)
  }

  function handleRemoveTask(id: string) {
    // Remova uma task da listagem pelo ID
    const filteredTask = tasks.filter((task) => task.id !== id)
    setTasks(filteredTask)
  }

  const isCompleted = tasks.filter((task) => {
    return task.isComplete === true
  })

  return (
    <View style={Styles.Container}>
      <StatusBar style="light" />
      <View style={Styles.Header}>
        <Image source={ImageLogo} />
      </View>

      <View style={Styles.InputContainer}>
        <InputDefault
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={colors.gray300}
          onChangeText={setNewTaskTitle}
          value={newTaskTitle}
        />
        <TouchableOpacity
          style={Styles.ButtonContaine}
          activeOpacity={0.7}
          onPress={handleCreateNewTask}
        >
          <Image source={ImagePlus} />
        </TouchableOpacity>
      </View>
      <View style={Styles.ContainerInfo}>
        <View style={Styles.ContentInfo}>
          <Text style={[Styles.Paragraph, { color: colors.blue }]}>
            Criadas
          </Text>
          <Text style={Styles.Shap}>{tasks.length}</Text>
        </View>
        <View style={Styles.ContentInfo}>
          <Text style={[Styles.Paragraph, { color: colors.purple }]}>
            Concluídas
          </Text>
          <Text style={[Styles.Shap]}>{isCompleted.length}</Text>
        </View>
      </View>
      <View style={Styles.BorderContainer}>
        <Text style={Styles.Border}></Text>
      </View>
      <>
        {tasks.length === 0 ? (
          <View style={Styles.Content}>
            <Image style={Styles.ImageCliboard} source={ImageCliboard} />

            <View>
              <Text style={Styles.Title}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={Styles.SubTitle}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          </View>
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            style={[]}
            data={tasks}
            keyExtractor={(item) => {
              return item.id
            }}
            renderItem={({ item }) => {
              return (
                <CardTask
                  id={item.id}
                  isComplete={item.isComplete}
                  title={item.title}
                  onToggleTaskCompletion={() =>
                    handleToggleTaskCompletion(item.id)
                  }
                  onRemoveTask={() => handleRemoveTask(item.id)}
                />
              )
            }}
          />
        )}
      </>
    </View>
  )
}
