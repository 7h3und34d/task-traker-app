import "./App.css";
import { TaskProvider } from "./context";
import { TaskForm } from "./components/TaskForm";
import { Tasks } from "./components/Tasks";

function App() {
  return (
    <main className="app">
      <TaskProvider>
        <TaskForm />
        <Tasks />
      </TaskProvider>
    </main>
  );
}

export default App;
