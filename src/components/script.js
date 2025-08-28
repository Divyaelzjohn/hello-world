// mounting LifeCycle Methods

/*
constructor(props) -> A specia; function that will get called whenever a new component is created
                   -> Is perfect for initializing state to the class instance , Binding the event handlers
                   -> Do not cause side effects. Ex:HTTP requests
                   -> we have to call a special function called super(props), Directly overwrite this.state

Static getDerivedStateFromProps(props, state) ->When the state of the component depends on changes in props over time.
                   ->set the state
                   ->Do not cause side effects. Ex:HTTP requests
render()  -> only required method
          -> Read props & state and return JSX
          -> Do not change state or interact with DOM or make ajax calls.
          -> Children components lifecycle methods are also executed
componentDidMount() -> calls only once
                    -> Invoked immediately after a component and all its children components haave been rendered to the DOM
                    -> Cause side effects. Ex: Interact with the DOM or perform any ajax calls to load.
*/

// Updating Lifecycle Methods 
/* 
static getDerivedStateFromProps(props,state) ->Methodd is called every time a component is re-rendered
                    -> Set the state
                    -> Do not cause side effects. Ex:HTTP requests
shouldComponentUpdate(nextProps,nextState) -> Dicates if the component should re-render or not
                    -> Performance optimization
                    -> Do not cause side effects. Ex:HTTP requests calling the setState method
getSnapshotBeforeUpdate(prevProps,prevState) -> Calling right before the changes from the virtual DOM are to be reflected in the DOM
                    -> Capture some information from the DOM
                    -> Method will either return null or return a value. Returned value will be passed as the third parameter to the next method.
componentDidUpdate(prevProps,prevState,snapshot)->Called after the render is finished in the re-render cycles
                    -> Cause side  effects
*/
// Unmounting Phase Method
/* componentWillUnmount() -> Method is invoked immediately before a component is inmounted and destroyed.
                          -> Cancelling any network requests , removing event handler, cancelling any subscriptions and also invalidating timers.
                          -> Do not call the setState method */

// Error Handling Phase Methods
/* 
static getDerivedStateFromError(error)
componentDidCatch(error, info)           //When there is an error either during rendering , in a lifecycle method, or in the constructor of any child component.
*/

/* 
1.createRef method -> creating and accesing elements
2.callback ref -> older approach 4 stage
    -create a ref -create a property and assign a value null
    -callback
    -attach ref to an input element
*/
