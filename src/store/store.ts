import counterReducer from "@/components/counter/CounterSlice";
import tasksReducer from "@/components/tasks/TasksSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        counter: counterReducer
    }
})

store.subscribe(() => {
    localStorage.setItem('store', JSON.stringify(store.getState()))
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch