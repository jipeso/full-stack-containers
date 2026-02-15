import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react'
import Todo from '../Todo'

describe('Todo', () => {
  let mockDelete, mockComplete
  
  beforeEach(() => {
    mockDelete = vi.fn()
    mockComplete = vi.fn()
  })

  it('renders todo', () => {
    const todo = { text: 'Testing todo', done: false }

    render(
      <Todo
        todo={todo}
        deleteTodo={mockDelete}
        completeTodo={mockComplete}
      />
    )

    expect(screen.getByText('Testing todo')).toBeDefined()
    expect(screen.getByText('This todo is not done')).toBeDefined()
    expect(screen.getByText('Set as done')).toBeDefined()
  })
})