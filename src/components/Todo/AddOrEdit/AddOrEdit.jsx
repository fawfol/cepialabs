//src/components/Todo/AddOrEdit/AddOrEdit.jsx
import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';

//receive props from Todo.jsx for input and add action
const AddOrEdit = ({ newTodoText, onNewTodoTextChange, onAddTodo }) => {
  return (
    <Box sx={{ display: 'flex', gap: '10px', marginBottom: '50px' }}>
      <TextField
        label="Add a new todo"
        variant="outlined"
        fullWidth
        value={newTodoText}
        onChange={(e) => onNewTodoTextChange(e.target.value)}//update the state in Todo.jsx
        onKeyPress={(e) => {
          if (e.key === 'Enter') onAddTodo();//trigger add function in Todo.jsx
        }}
        sx={{
            '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#2196f3' },
                '&:hover fieldset': { borderColor: '#1976d2' },
                '&.Mui-focused fieldset': { borderColor: '#3f51b5' },
            },
            '& .MuiInputLabel-root': { color: '#2196f3' },
            '& .MuiInputLabel-root.Mui-focused': { color: '#3f51b5' },
        }}
      />
      <Button
        variant="contained"
        onClick={onAddTodo} //trigger add function in Todo.jsx
        sx={{ backgroundColor: '#2196f3', fontWeight: 'bold', '&:hover': { backgroundColor: '#1976d2', fontWeight : 'bold'} }}
      >ADD</Button>
    </Box>
  );
};

export default AddOrEdit;




