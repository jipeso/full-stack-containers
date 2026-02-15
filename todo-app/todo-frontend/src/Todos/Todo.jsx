import PropTypes from 'prop-types';

const Todo = ({ todo, deleteTodo, completeTodo }) => {
  const handleDelete = () => {
    deleteTodo(todo)
  }

  const handleComplete = () => {
    completeTodo(todo)
  }  

  const doneInfo = (
    <>
      <span>This todo is done</span>
      <span>
        <button onClick={handleDelete}> Delete </button>
      </span>
    </>
  )

  const notDoneInfo = (
    <>
      <span>
        This todo is not done
      </span>
      <span>
        <button onClick={handleDelete}> Delete </button>
        <button onClick={handleComplete}> Set as done </button>
      </span>
    </>
  )

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '70%', margin: 'auto' }}>
      <span>
        {todo.text} 
      </span>
      {todo.done ? doneInfo : notDoneInfo}
    </div>
  )
};

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired
}

export default Todo;