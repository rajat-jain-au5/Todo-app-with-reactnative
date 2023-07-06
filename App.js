import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import TodoHeader from './src/components/todoHeader';
import TodoList from './src/components/todoList';
import store from './src/redux/store';
import { Provider } from 'react-redux';


export default function App() {
  const RootApp = () => {
    return (
      <SafeAreaView>
        <TodoHeader />
        <TodoList />
      </SafeAreaView>
    )
  }
  return (
    <Provider store={store} >
      <RootApp />
    </Provider>
  );
}


