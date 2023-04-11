import "./App.css";
import TodoApp from "./components/TodoApp/TodoApp";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <h2>todolist app</h2>
      <TodoApp />
    </div>
  );
};

export default App;
