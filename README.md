# Todo List App

A simple Todo List app built with React and Vite. You can add, edit, and delete tasks, and your tasks are saved in the browser, so they stay after you refresh the page.

## Features

- Add a new task
- Edit an existing task (the button changes from Submit to Update)
- Delete a task with the × button
- Duplicate tasks are blocked ("Already Exist" alert)
- Empty tasks are ignored
- Tasks are saved in `localStorage` and loaded again on refresh

## Tech Stack

- [React](https://react.dev/) (hooks: `useState`, `useEffect`)
- [Vite](https://vitejs.dev/)
- CSS

## Getting Started

### 1. Clone the project

```bash
git clone <your-repo-url>
cd <project-folder>
```

### 2. Install packages

```bash
npm install
```

### 3. Run the app

```bash
npm run dev
```

Open the link shown in the terminal (usually `http://localhost:5173`).

## Project Structure

```
src/
├── pages/
│   └── Todo/
│       ├── Todo.jsx
│       └── Todo.css
├── App.jsx
└── main.jsx
```

> Change the paths above if your folders are different.

## How It Works

| State | Purpose |
|---|---|
| `todoList` | Array of all tasks |
| `text` | Current value of the input box |
| `editIndex` | `null` when adding, or the index of the task being edited |

| Function | Purpose |
|---|---|
| `saveTodoList` | Adds a new task |
| `editRow` | Puts the selected task in the input and switches to edit mode |
| `updateTodoList` | Saves the changed task |
| `deleteRows` | Removes a task using `filter` |

Saving data:

- On page load, `useState` reads the tasks from `localStorage`.
- Every time `todoList` changes, `useEffect` saves it to `localStorage`.

```
Add / Edit / Delete → todoList changes → useEffect runs → saved in localStorage
Refresh page        → useState reads localStorage      → tasks appear again
```

## Notes

- Data is saved only in the same browser on the same computer.
- If you clear the browser data, the tasks are removed.

## Future Improvements

- Mark a task as completed
- Filter tasks (All / Completed / Pending)
- Use unique IDs instead of the array index
- Connect a backend and database

## Author

Made with ❤️ by Atul Aditya