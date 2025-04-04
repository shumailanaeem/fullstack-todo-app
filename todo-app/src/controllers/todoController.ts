import { Request, Response } from 'express';
import { QueryResult } from 'pg';
import pool from '../config/database';
import { Todo, CreateTodoDTO, UpdateTodoDTO } from '../types/todo';

export const formatTodo = (todo: Todo): string => {
    return `ID: ${todo.id}\nTask: ${todo.task}\nCompleted: ${todo.completed}\n`;
};

export const getAllTodos = async (req: Request, res: Response): Promise<void> => {
    try {
        const result: QueryResult<Todo> = await pool.query('SELECT * FROM todos ORDER BY id');
        res.setHeader('Content-Type', 'text/plain');
        res.json(result.rows);
    } catch (err) {
        res.status(500).send('Error retrieving todos');
    }
};

export const getTodoById = async (req: Request, res: Response): Promise<void> => {
    try {
        const result: QueryResult<Todo> = await pool.query('SELECT * FROM todos WHERE id = $1', [req.params.id]);
        if (result.rows.length === 0) {
            res.status(404).send('Todo not found');
            return;
        }
        res.setHeader('Content-Type', 'text/plain');
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).send('Error retrieving todo');
    }
};

export const createTodo = async (req: Request<{}, {}, CreateTodoDTO>, res: Response): Promise<void> => {
    try {
        const { task } = req.body;
        const result: QueryResult<Todo> = await pool.query(
            'INSERT INTO todos (task) VALUES ($1) RETURNING *',
            [task]
        );
        res.setHeader('Content-Type', 'text/plain');
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).send('Error adding todo');
    }
};

export const updateTodo = async (req: Request<{ id: string }, {}, UpdateTodoDTO>, res: Response): Promise<void> => {
    try {
        const { task, completed } = req.body;
        const result: QueryResult<Todo> = await pool.query(
            'UPDATE todos SET task = COALESCE($1, task), completed = COALESCE($2, completed) WHERE id = $3 RETURNING *',
            [task, completed, req.params.id]
        );

        if (result.rows.length === 0) {
            res.status(404).send('Todo not found');
            return;
        }

        res.setHeader('Content-Type', 'text/plain');
        res.json(result.rows[0])
    } catch (err) {
        res.status(500).send('Error updating todo');
    }
};

export const deleteTodo = async (req: Request<{ id: string }>, res: Response): Promise<void> => {
    try {
        const result: QueryResult<Todo> = await pool.query('DELETE FROM todos WHERE id = $1 RETURNING *', [req.params.id]);
        if (result.rows.length === 0) {
            res.status(404).send('Todo not found');
            return;
        }
        res.setHeader('Content-Type', 'text/plain');
        res.send(`Deleted Task ID: ${req.params.id}\n`);
    } catch (err) {
        res.status(500).send('Error deleting todo');
    }
}; 