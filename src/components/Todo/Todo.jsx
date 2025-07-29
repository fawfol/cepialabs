// src/components/Todo/Todo.jsx
import React, { useState } from "react";
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import List from "./List/List";
import AddOrEdit from "./AddOrEdit/AddOrEdit";

const Todo = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'this job', completed: false },
    { id: 2, text: 'that job', completed: false },
    { id: 3, text: 'my job', completed: true },
    { id: 4, text: 'your job', completed: false },
    { id: 5, text: 'his job', completed: false },
    { id: 6, text: 'her job', completed: true },
    { id: 7, text: 'their job', completed: false },
    { id: 8, text: 'those job', completed: false },
    { id: 9, text: 'these job', completed: true },
    { id: 10, text: 'completed job', completed: true },
    { id: 21, text: 'incomplete job', completed: false },
    { id: 19, text: 'job job', completed: true },
    { id: 166, text: 'remaining job', completed: false },
  ]);
  const [newTodoText, setNewTodoText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
//////////////////Functions for managing Todos//////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

  const handleAddTodo = () => {
    if (newTodoText.trim()) {
      const newTodo = {
        id: Date.now(),//example ID
        text: newTodoText.trim(),
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setNewTodoText(''); //clear after adding
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleEditTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  const handleToggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
/////////////////////FUNCTIN FOR SEARCH/////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////


  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  //filter the todos based on the search term
  const filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
   );
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: '20px', marginTop: '40px' }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Todo List
        </Typography>

        {/*pass props to AddOrEdit for adding new todos*/}
        <AddOrEdit
          newTodoText={newTodoText}
          onNewTodoTextChange={setNewTodoText} //passetter directly
          onAddTodo={handleAddTodo}
        />

        {/*pass props to List for displaying and managing todos*/}
        <List
          todos={filteredTodos} //pass the filtered list
          onDelete={handleDeleteTodo}
          onEdit={handleEditTodo}
          onToggleComplete={handleToggleComplete}
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange} //pass the search handler
        />
      </Paper>
    </Container>
  );
};
export default Todo;
