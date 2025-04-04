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
todo-app/
├── src/
├── ├── config/
│   │   ├── database.ts
│   ├── controllers/
│   │   ├── todoController.ts
│   ├── routes/
│   │   ├── todoRoutes.ts
|   |── types/
│   │   ├── todo.ts
│   ├── App.ts
├── .env
├── package.json
├── tsconfig.json
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
ToDoList_MobileApp/
│── .expo/                     # Expo-related files (hidden)
│── .idea/                     # Project settings (hidden)
│── assets/                    # Static assets (images, icons, etc.)
│── node_modules/               # Installed dependencies (hidden)
│── src/
│──── components/
│────├── TodoItem.tsx
│    │   ├── TodoInput.tsx
│    ├── hooks/
│    │   ├── useTodos.ts
│    ├── services/
│    │   ├── todoService.ts
│    ├── styles/
│    │    ├── styles.ts
│    └── types/
│    │   ├── todo.ts
│── .gitignore                  # Git ignore file
│── App.tsx                      # Main application entry point
│── app.json                    # Expo configuration
│── index.tsx                    # Entry point (can be for web setup)
│── package-lock.json            # Locks dependencies
│── package.json                 # Project dependencies and scripts

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

### **Fetching Todos**

```js
const fetchTodos = async () => {
  try {
    const response = await axios.get('http://192.168.100.72:3000/todos');
    setTodos(response.data);
  } catch (error) {
    console.error('Error fetching todos:', error);
  }
};
```

### **Adding a Todo**

```js
const addTodo = async () => {
  if (!newTask.trim()) return;
  try {
    const response = await axios.post('http://192.168.100.72:3000/todos', { task: newTask, completed: false });
    setTodos([...todos, response.data]);
    setNewTask('');
  } catch (error) {
    console.error('Error adding todo:', error);
  }
};
```

### **Deleting a Todo**

```js
const deleteTodo = async (id) => {
  try {
    await axios.delete(`http://192.168.100.72:3000/todos/${id}`);
    setTodos(todos.filter(todo => todo.id !== id));
  } catch (error) {
    console.error('Error deleting todo:', error);
  }
};
```

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

