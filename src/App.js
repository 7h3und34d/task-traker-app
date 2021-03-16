import "./App.css";
import { TaskProvider } from "./context";
import { Tasks } from "./components/Tasks";
import { TaskInput } from "./components/TaskInput";

function App() {
  return (
    <main className="app">
      <div className="app-container">
        <TaskProvider>
          <TaskInput />
          <Tasks />
        </TaskProvider>
      </div>
    </main>
  );
}

export default App;
