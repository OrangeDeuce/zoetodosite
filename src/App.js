import { Heading } from '@chakra-ui/react';
import { VStack, IconButton, useColorMode } from '@chakra-ui/react'; //1 To import both VStack component and IconButton component
import Addtodo from './components/Addtodo'; //2 To imort Addtodo component
import Todolist from './components/Todolist'; //3 To import Todolist component
import {FaSun, FaMoon} from 'react-icons/fa'; // To import the exact icons from 'fa' folder (font awesome) from react-icons
import { useState, useEffect } from 'react';

function App() {
  const initialTodos = [
    {
        id: 1,
        body: 'Get toys'
    },
    {
        id: 2,
        body: 'Buy Candy'
    }
  ];  

  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('todos')) || []
  );

  useEffect(()=> {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]); 

  

  function deleteTodo(id) {
    const newTodos = todos.filter(todo => {
      return todo.id !== id;
    })
    setTodos(newTodos);
  }

  function addTodo(todo) {
    setTodos([...todos, todo])
  }

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack p={5}> {/* 4 To add first VStack for heading with padding 5 px*/} 
      <IconButton icon={ colorMode ==='light' ? <FaSun /> : <FaMoon /> } 
        isRound='true' 
        size={"lg"} 
        alignSelf="flex-end" 
        onClick={toggleColorMode}
      /> {/* 7 Also add FaSun IconButton!*/}

      <Heading 
        mb="8" 
        fontWeight={"extrabold"} 
        size="2xl" 
        bgGradient="linear(to-r, pink.500, pink.300, blue.500)" 
        bgClip={"text"}
      >
        Zoe's ToDo Today Website
      </Heading> {/* 5 To add the Heading component inside*/}
      <Todolist todos={todos} deleteTodo={deleteTodo} />
      <Addtodo addTodo={addTodo} />
    </VStack>
    
  );
}

export default App;

