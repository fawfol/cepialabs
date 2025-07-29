// src/components/Todo/TodoItem.jsx
import React, { useState } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';

//receives data of specific todo and action handlers from List.jsx
function TodoItem({ todo, onDelete, onEdit, onToggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    if (editedText.trim()) {//empty check
      onEdit(todo.id, editedText.trim());
      setIsEditing(false);
    }
  };

  const handleCancelEdit = () => {
    setEditedText(todo.text);
    setIsEditing(false);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSaveEdit();
    }
    if (event.key === 'Escape') {
      handleCancelEdit();
    }
  };

  return (
    <ListItem
      disableGutters
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 0',
        borderBottom: '1px solid #e0e0e0',
        transition: 'background-color 0.3s ease',
        '&:hover': {
            backgroundColor: '#f5f5f5',
        }
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
        <Checkbox
          checked={todo.completed}
          onChange={() => onToggleComplete(todo.id)} //call parent toggle function
          sx={{ color: todo.completed ? '#4caf50' : '#9e9e9e' }}//complete
        />
        {isEditing ? (
          <TextField
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            onBlur={handleSaveEdit}
            onKeyPress={handleKeyPress}
            autoFocus //automatically focus when entering edit mode
            size="small"
            variant="outlined"
            sx={{ flexGrow: 1, mr: 1 }}
          />
        ) : (
          <ListItemText
            primary={todo.text}
            sx={{
              wordBreak: 'break-word',
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.completed ? '#757575' : 'inherit',
              transition: 'text-decoration 0.3s ease, color 0.3s ease'
            }}
          />
        )}
      </Box>
      <Box sx={{ display: 'flex', gap: '5px' }}>
        {isEditing ? (
          <>
            <IconButton edge="end" aria-label="save" onClick={handleSaveEdit} color="primary">
              <DoneIcon />
            </IconButton>
            <IconButton edge="end" aria-label="cancel" onClick={handleCancelEdit} color="error">
              <CloseIcon />
            </IconButton>
          </>
        ) : (
          <>
            <IconButton edge="end" aria-label="edit" onClick={handleEditClick} color="info">
              <EditIcon />
            </IconButton>
            <IconButton edge="end" aria-label="delete" onClick={() => onDelete(todo.id)} color="error">
              <DeleteIcon />
            </IconButton>
          </>
        )}
      </Box>
    </ListItem>
  );
}

export default TodoItem;
