BASIC CODE OF REDUX

#Redux is a state management library for JavaScript applications, often used with React. It allows for maintaining a centralized state for your entire application, making it easier to manage and update the state across components. Redux uses a concept of actions, reducers and store to manage the state updates in a predictable manner, ensuring all changes are made with explicit actions and can be easily tracked and debugged.

#Action: Action is an object that describes an event that took place in your application. An action has a type property which describes the type of event that occurred and a payload property which contains additional data related to the event.

#Reducer: Reducer is a pure function that takes the current state of an application and an action, and returns the next state of the application. It updates the state based on the type of action that was dispatched.

#Store: Store is the single source of truth in a Redux application. It holds the state of the application and provides methods to access and update the state. The store is created by combining one or more reducers and applying middleware. The store also dispatches actions to update the state.
