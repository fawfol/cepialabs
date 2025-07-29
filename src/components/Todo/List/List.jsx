// src/components/Todo/List/List.jsx
import React from 'react';
import TextField from '@mui/material/TextField';
import MuiList from '@mui/material/List';//avoid namign file by muilist
import Typography from '@mui/material/Typography';
import TodoItem from '../TodoItem';

//list component receives everything from Todo.jsx
const List = ({ todos, onDelete, onEdit, onToggleComplete, searchTerm, onSearchChange }) => {
  return (
    <div>
      {/* Search Box */}
      <TextField
        label="Search Todos"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={onSearchChange}
        sx={{ marginBottom: '20px' }}
      />

      {/* List of Todo Items */}
      <MuiList>
        {todos.length === 0 ? (
          <Typography variant="body1" color="text.secondary" align="center" sx={{ mt: 2 }}>
            {searchTerm ? "No matching todos found." : "No todos yet! Add some above."}
          </Typography>
        ) : (
          todos.map(todo => (
            //pass individual todo data and all action handlers to TodoItem
            <TodoItem
              key={todo.id}//unique keys later
              todo={todo}
              onDelete={onDelete}
              onEdit={onEdit}
              onToggleComplete={onToggleComplete}
            />
          ))
        )}
      </MuiList>
    </div>
  );
};

export default List;

