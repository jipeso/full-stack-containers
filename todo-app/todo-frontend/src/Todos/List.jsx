import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  return (
    <>
      {todos.map((todo, index) => (
        <div key={todo.id}>
          <Todo
            todo={todo}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
          />
          {index < todos.length - 1 && <hr />}
        </div>
      ))}
    </>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired
}

export default TodoList
