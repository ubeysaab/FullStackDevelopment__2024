
- [Redux Terms and Concepts](#redux-terms-and-concepts)
  - [1. Store](#1-store)
  - [2. Actions](#2-actions)
  - [3. Reducers](#3-reducers)
- [Setting Up a Store with Redux Toolkit](#setting-up-a-store-with-redux-toolkit)
  - [Exporting Types (TypeScript)](#exporting-types-typescript)
  - [Redux Application Data Flow](#redux-application-data-flow)
  - [CreatAsyncThunk](#creatasyncthunk)


## Redux Terms and Concepts
Redux is essentially a state management library  
that allows you to have Global state in the context of React.  

> This means you can have state that is accessible from any component no matter where they are in the tree.

It's called a state management library  
because it makes it really easy to configure and manage global state  
in your React applications.


### 1. Store

The store is essentially state — the global state  
that's going to be accessible across any component  
no matter where they are in your application.

You define the store however you want —  
it's up to the needs of your application.

Redux Toolkit allows you to easily set this up  
and connect it to your React app.

Usually the store is made up of multiple **slices**,  
each responsible for a domain in the app.

Example:
- A `counter` slice:
- 
  ```ts
  interface CounterState {
    value: number;

    }
  ```

> Each slice holds specific parts of your state, and all slices come together to form the one global store.

### 2. Actions

Actions are what you use to tell Redux
what it should do to the state.

Example:
You have a `value: number` in `counter` state,
so you might have:

* `increment` action: makes the value +1
* `decrement` action: makes the value -1

Actions in Redux have **two properties**:

1. `type` (required): a string like `"increment"`
2. `payload` (optional): any data you want to send to Redux

Example (pseudo-code):

```ts
const increment = {
  type: "increment"
};

const incrementByAmount = {
  type: "incrementByAmount",
  payload: 10
};
```

If you don’t need to send any data (like a simple increment),
you can skip the payload.
If you do (like incrementing by a variable amount),
then you use the payload to pass that value.



### 3. Reducers

Reducers are responsible for taking an action
and depending on the action's `type`,
making the correct update in the Redux store.

Reducers:

* Use the `type` to decide what to do
* Optionally use `payload` to apply the correct changes

A **very important thing** about reducers (and Redux):

> Never directly mutate the state

Reducers must follow **immutability**:

* Make a copy of the current state
* Apply changes to that copy
* Replace the whole state with the new copy

Redux will not work properly if you mutate the state directly.



## Setting Up a Store with Redux Toolkit

Create a folder: `state/`
Inside, create a file: `store.ts`

In `store.ts`:

```ts
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    // reducers go here
  },
});
```

At first, the `reducer` can be an empty object.
Later, when slices are ready, you connect them here.

---

### Exporting Types (TypeScript)

Redux Toolkit + TypeScript = you’ll need to export two types:

```ts
// Root state type based on store.getState
export type RootState = ReturnType<typeof store.getState>;

// App dispatch type based on store.dispatch
export type AppDispatch = typeof store.dispatch;
```

These will help you:

* Type your selectors with `RootState`
* Type your dispatches with `AppDispatch`














### Redux Application Data Flow 

In normal react apps we have "one-way data flow", which describes this sequence of steps to update the app:

1. State describes the condition of the app at a specific point in time
2. The UI is rendered based on that state
3. When something happens (such as a user clicking a button), the state is updated based on what occurred
4. The UI re-renders based on the new state 


For Redux specifically, we can break these steps into more detail:

- Initial Step 
  - A Redux Store is created using a root reducer function
  - The store calls the root reducer once, and save the return value as its initial state.
  - When the UI is first rendered, UI components access the current state of the Redux store, and use that data to decide what to render.They also subscribe to any future store updates so they can know if the state has changed.
- Updates:
  - Something happens in the app, such as a user clicking a button
  - The app code dispatches an action to the Redux store, like `dispatch({type: 'counter/increment'})`
  - The store runs the reducer function again with the previous state and the current action, and saves the return value as the new state
  - The store notifies all parts of the UI that are subscribed that the store has been updated
  - Each UI component that needs data from the store checks to see if the parts of the state they need have changed.
  - Each component that sees its data has changed forces a re-render with the new data, so it can update what's shown on the screen
<!-- - 


Redux uses a "one-way data flow" app structure
State describes the condition of the app at a point in time, and UI renders based on that state
When something happens in the app:
The UI dispatches an action
The store runs the reducers, and the state is updated based on what occurred
The store notifies the UI that the state has changed
The UI re-renders based on the new state


 -->

### CreatAsyncThunk
A function that accepts a `Redux action type string` and a `callback function` that should `return a promise`.
 It generates promise lifecycle action types based on the action type prefix that you pass in, and returns a thunk action creator that will run the promise callback and dispatch the [lifecycle actions](https://medium.com/@MakeComputerScienceGreatAgain/understanding-javascript-promises-e62a0ed1888f#:~:text=The%20Promise%20Lifecycle&text=Pending%3A%20The%20initial%20state%20of,fails%20and%20returns%20an%20error.) based on the returned promise.
