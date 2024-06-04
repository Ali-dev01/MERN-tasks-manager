import { Route, Routes } from "react-router-dom";
import "./App.css";
import TaskStatistics from "./components/tasks-statistics";
import TaskDetails from "./components/task-details/tasksList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TaskStatistics />} />
        <Route path="/:taskName" element={<TaskDetails />} />
      </Routes>
    </div>
  );
}

export default App;
