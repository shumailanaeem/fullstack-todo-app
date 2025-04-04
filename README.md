# To-Do App

This is a full-stack To-Do application built with a **Node.js backend (Express, PostgreSQL)** and a **React Native (Expo) frontend**. The app allows users to create, view, update, and delete tasks.

## 🚀 Features

- ✅ Create new tasks
- 📋 View the task list
- 🔄 Update task status (completed/pending)
- 🗑️ Delete tasks
- 🔌 Backend API for task management
- 📱 React Native frontend (Expo) for mobile UI

---

## 🏗️ Backend (Node.js, Express, PostgreSQL)

### 📂 Folder Structure

```
todo-app/             # Root directory of the project
├── src/              # Main source code directory
│   ├── config/       # Configuration files
│   │   ├── database.ts    # Database connection setup (e.g., PostgreSQL, MongoDB)
│   ├── controllers/  # Business logic to handle requests
│   │   ├── todoController.ts  # Controller for handling todo-related logic (CRUD operations)
│   ├── routes/       # API route definitions
│   │   ├── todoRoutes.ts  # Defines routes for todo-related API endpoints
│   ├── types/        # TypeScript types and interfaces
│   │   ├── todo.ts   # Defines the structure of a Todo item
│   ├── App.ts        # Main application entry point (initializes Express server)
├── .env              # Environment variables (database URL, API keys, etc.)
├── package.json      # Project metadata, dependencies, and scripts
├── tsconfig.json     # TypeScript configuration file
```

### 🛠️ Installation & Setup

1. **Clone the repository**
   ```sh
   git clone <repo_url>
   cd todo-app
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Set up PostgreSQL Database**
   - Create a database named `todo_db`
   - Apply the schema (if needed)
4. **Start the server**
   ```sh
   npm start
   ```
5. **API Endpoints**
   - `GET /todos` → Get all tasks
   - `POST /todos` → Add a new task
   - `PUT /todos/:id` → Update task
   - `DELETE /todos/:id` → Delete task

---

## 📱 Frontend (React Native + Expo)

### 📂 Folder Structure

```
ToDoList_MobileApp/   # Root directory of the React Native Expo project
│── .expo/            # Expo-related files (hidden, managed by Expo)
│── .idea/            # Project settings (for IDEs like WebStorm, hidden)
│── assets/           # Static assets such as images, icons, and fonts
│── src/              # Main source code directory
│   ├── components/   # Reusable UI components
│   │   ├── TodoInput.ts   # Component for adding new todos
│   │   ├── TodoItem.ts    # Component for displaying a single todo item
│   ├── services/     # API service functions to interact with the backend
│   │   ├── todoService.ts  # Handles API requests (GET, POST, DELETE)
│   ├── styles/       # Styling files
│   │   ├── styles.ts  # Common styles for the app
│   ├── config/       # Stores backend API URL and environment variables
│   │   ├── .env      
│   ├── hooks/        # Custom hooks for state management
│   │   ├── useTodos.ts  # Manages API calls and state for todos
│   ├── types/        # TypeScript types and interfaces
│   │   ├── todo.ts   # Defines the structure of a Todo item
├── .env              # Environment variables (API URL, etc.)
│── .gitignore        # Git ignore file to exclude unnecessary files from version control
│── App.tsx           # Main application entry point
│── app.json          # Expo configuration file
│── index.tsx         # Entry point (can be used for web-based setup)
│── package-lock.json # Locks dependencies for consistency
│── package.json      # Project metadata, dependencies, and scripts


```

### 🛠️ Installation & Setup

1. **Navigate to the frontend folder**
   ```sh
   cd ToDoList_MobileApp
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Start the Expo development server**
   ```sh
   npx expo start
   ```
4. **Running on a Device**
   - Scan the QR code from the Expo app (Android/iOS)
   - Use an emulator/simulator

---

## 🔗 API Integration in React Native


// Fetching Todos
const fetchTodos = async (setTodos: React.Dispatch<React.SetStateAction<Todo[]>>): Promise<void> => {
  try {
    const response = await axios.get<Todo[]>(API_URL);
    setTodos(response.data);
  } catch (error) {
    console.error('Error fetching todos:', error);
  }
};

// Adding a Todo
const addTodo = async (
  newTask: string,
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
  todos: Todo[],
  setNewTask: React.Dispatch<React.SetStateAction<string>>
): Promise<void> => {
  if (!newTask.trim()) return;

  try {
    const response = await axios.post<Todo>(API_URL, { task: newTask, completed: false });
    setTodos([...todos, response.data]);
    setNewTask('');
  } catch (error) {
    console.error('Error adding todo:', error);
  }
};

// Deleting a Todo
const deleteTodo = async (id: number, setTodos: React.Dispatch<React.SetStateAction<Todo[]>>, todos: Todo[]): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    setTodos(todos.filter((todo) => todo.id !== id));
  } catch (error) {
    console.error('Error deleting todo:', error);
  }
};

export { fetchTodos, addTodo, deleteTodo };

---

## 🛠️ Technologies Used

- **Backend:** Node.js, Express, PostgreSQL
- **Frontend:** React Native, Expo
- **Networking:** Axios

---

## 🏆 Future Improvements

- 🔐 Authentication (Login/Register)
- 📅 Due date & reminders
- 🌙 Dark mode support

---

## 📝 License

This project is **open-source** and available under the MIT License.

---

### 👨‍💻 Developed by [Shumaila Naeem](https://github.com/shumailanaeem) 🚀

