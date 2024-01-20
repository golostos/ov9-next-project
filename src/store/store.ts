import tasksReducer from "@/components/tasks/TasksSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        tasks: tasksReducer
    }
})

export default store