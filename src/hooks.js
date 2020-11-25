import {
  useFirebase,
  useFirebaseConnect,
  isLoaded,
  isEmpty,
} from "react-redux-firebase";
import { useSelector } from "react-redux";

export const useTodoProvider = (config = {}) => {
  const firebase = useFirebase();
  useFirebaseConnect([
    "todos", // { path: '/todos' } // object notation
  ]);

  const addTodo = () => {
    const sampleTodo = { text: "Sample1", done: false };
    return firebase.push("todos", sampleTodo);
  };

  const path = config.length ? config[0].storeAs || config[0].path : null;
  let data = null;
  data = useSelector((state) => state.firebase.ordered[path]);

  const result = {
    addTodo,
    data: path ? data : null,
    state: {
      loading: !isLoaded(data) && ! isEmpty(data),
      isEmpty: isEmpty(data),
      isReady: isLoaded(data),
    },
  };

  return result;
};
