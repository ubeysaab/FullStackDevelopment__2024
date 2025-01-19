
- [Redux Terms and Concepts](#redux-terms-and-concepts)
  - [Terminology](#terminology)
    - [Actions](#actions)
    - [Actions Creators](#actions-creators)
    - [Reducers](#reducers)
    - [Store](#store)
    - [Dispatch](#dispatch)
    - [Selectors](#selectors)
    - [Slice](#slice)
  - [Redux Application Data Flow](#redux-application-data-flow)


## Redux Terms and Concepts
the basic idea behind Redux: a single centralized place to contain the global state in your application, and specific patterns to follow when updating that state to make the code predictable.


The **state**, the source of truth that drives our app
The **view**, a declarative description of the UI based on the current state
The **actions**, the events that occur in the app based on user input, and trigger updates in the state

### Terminology
There are some important Redux terms that you'll need to be familiar with before we continue:
#### Actions 
An **action** is a plain JavaScript object that has a type field. You can think of an **action** as an **event** that describes something that happened in the application.
The `type` field should be a string that gives this action a descriptive name, like `"todos/todoAdded"`. We usually write that type string like `"domain/eventName"`, where *the first part is the feature or category that this action belongs to, and the second part is the specific thing that happened*.
An action object can have other fields with additional information about what happened. By convention, we put that information in a field called `payload`.


#### Actions Creators 
An action creator is a function that creates and returns an action object. We typically use these so we don't have to write the action object by hand every time:

```JavaScript
const addTodo = text => {
  return {
    type: 'todos/todoAdded',
    payload: text
  }
}

```

#### Reducers 
<!-- where logic can been returned  -->
A reducer is a function that receives the current `state` and an `action` object, decides how to update the state if necessary, and returns the new state: `(state, action) => newState`. **You can think of a reducer as an event listener which handles events based on the received action (event) type**.

**Reducers must always follow some specific rules:**
- They should only calculate the new state value based on the state and action arguments
- They are not allowed to modify the existing `state`. Instead, they must make immutable updates, by copying the existing `state` and making changes to the copied values.
- They must be "pure" - they cannot do any asynchronous logic, calculate random values, or cause other "side effects"

The logic inside reducer functions typically follows the same series of steps:
- Check to see if the reducer cares about this action
   -If so, make a copy of the state, update the copy with new values, and return it
- Otherwise, return the existing state unchanged

#### Store 
<!-- The Only source of the truth keeps track of all teh states and everything -->
The current Redux application `state` lives in an object called the **store** 
The `store` is created by passing in a `reducer`, and has a method called `getState` that returns the current state value:
```js
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({ reducer: counterReducer })

console.log(store.getState())
// {value: 0}


```

>  Redux store runs the root reducer whenever an action is dispatched
#### Dispatch

<!-- used along with the reducer to update information in store  -->
<!-- dispatch when ever you want to update a information  in store then obviously we'll do it by reducer but you can not directly the reducer it will break the flow in that case we do use a hook known as useDispatch in which we say we want to call a very specific reducer and this reducer gets and update in teh store  -->
The Redux `store` has a method called `dispatch`. **The only way to update the `state` is to call `store.dispatch()` and pass in an action object**. The store will run its reducer function and save the new state value inside, and we can call getState() to retrieve the updated value:
```js
store.dispatch({ type: 'counter/increment' })

console.log(store.getState())
// {value: 1}

```

You can think of **dispatching actions as "triggering an event"** in the application. Something happened, and we want the store to know about it. Reducers act like event listeners, and when they hear an action they are interested in, they update the state in response
We typically call action creators to dispatch the right action:

```js
const increment = () => {
  return {
    type: 'counter/increment'
  }
}

store.dispatch(increment())

console.log(store.getState())
// {value: 2}

// it has the data that we want to change ???

```

#### Selectors 
are functions that know how to extract specific pieces of information from a` store state value`. As an application grows bigger, this can help avoid repeating logic as different parts of the app need to read the same data:

<!-- useSelector using to reach out directly to the store  : to bring any information from out of it  -->

```js
const selectCounterValue = state => state.value

const currentValue = selectCounterValue(store.getState())
console.log(currentValue)
// 2
```
#### Slice 
you can think of slice a feature of you application

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