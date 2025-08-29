import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Functional-components/Greet';
// import Greet from './components/Greet';
import Welcome from './components/classComponents/Welcome';
import { Component } from 'react';
import Hello from './components/JSX/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/Event-handling/FunctionClick';
import ClassClick from './components/Event-handling/ClassClick';
import EventBind from './components/Event-handling/EventBind';
import ParentComponent from './components/methods/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/ListRendering/NameList';
import Stylesheet from './components/styleSheets/Stylesheet';
import Inline from './components/styleSheets/Inline';

import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';

import LifecycleA from './components/LifeCycle/LifecycleA';
import FragmentDemo from './components/Fragments/FragmentDemo';
import Table from './components/Fragments/Table';
import PureComp from './components/pureComp/PureComp';

import ParentComp from './components/pureComp/ParentComp';
import RefsDemo from './components/Refs/RefsDemo';
import FocusInput from './components/Ref/FocusInput';
import FRParentInput from './components/Ref/1/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Error-handling/Hero';
import ErrorBoundary from './components/Error-handling/ErrorBoundary';
import ClickCounter from './components/HOC/ClickCounter';
import HoverCounter from './components/HOC/HoverCounter';

import ClickCounterTwo from './components/RenderProps/ClickCounterTwo';
import HoverCounterTwo from './components/RenderProps/HoverCounterTwo';
import User from './components/RenderProps/User';
import Counter1 from './components/RenderProps/Counter';
import ComponentC from './components/context/ComponentC';
import { UserProvider } from './components/context/userContext';
// function App() {
//   return (
//     <div className="App">
//       <Greet/>
//     </div>
//   );
// }


class App extends Component{
  render(){
    return(
      <div className="App" >

        <UserProvider value="Vishwas">
          <ComponentC/> 
        </UserProvider>
        

        {/* <Counter1>{(count, incrementCount)=> (<ClickCounterTwo count={count} incrementCount={incrementCount}/>)}</Counter1>
        <Counter1>{(count, incrementCount)=> (<HoverCounterTwo count={count} incrementCount={incrementCount}/>)}</Counter1> */}
        {/* <Counter1 render={(count, incrementCount)=> (<ClickCounterTwo count={count} incrementCount={incrementCount}/>)}/>
        <Counter1 render={(count, incrementCount)=> (<HoverCounterTwo count={count} incrementCount={incrementCount}/>)}/> */}
        {/* <User render={(isLoggedIn)=>isLoggedIn?'Vishwas':'Guest'}/> */}
        {/* <User name={(isLoggedIn)=>isLoggedIn?'Vishwas':'Guest'}/> */}
        {/* <User name={()=>'Vishwas'}/> */}
        {/* <User name='Vishwas'/> */}
        {/* <ClickCounterTwo/>
        <HoverCounterTwo/> */}

         {/* <ClickCounter name='Vishwas' /> */}
         {/* <HoverCounter /> */}
          {/* <ErrorBoundary>
            <Hero heroName="Joker"/>
          </ErrorBoundary>
          <ErrorBoundary>
            <Hero heroName="Batman"/>
          </ErrorBoundary>
          <ErrorBoundary>
            <Hero heroName="Superman"/>
          </ErrorBoundary> */}
        

        {/* <PortalDemo/> */}
        {/* <FRParentInput/> */}
        {/* <FocusInput /> */}
        {/* <RefsDemo/> */}
        {/* <ParentComp/> */}
        {/* <PureComp name="Divya"/> */}
        {/* <PureComp/> */}
        {/* <Table /> */}
        {/* <FragmentDemo/> */}

        {/* <LifecycleA/> */}
        {/* <Form/> */}
        {/* <button className={styles.btn}>Click Me</button> */}
        {/* <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1>*/}
        {/* <Inline/>  */}
        {/* <Stylesheet/> */}
        {/* <Stylesheet primary={true}/> */}
        {/* <NameList/> */}
        {/* <UserGreeting/> */}
        {/* <ParentComponent/> */}
        {/* <EventBind></EventBind> */}
        {/* <ClassClick></ClassClick> */}
        {/* <FunctionClick></FunctionClick> */}
        {/* <Counter/> */}
        {/* <Message/> */}
        {/* <Greet name="Bruce" heroName="Batman">
          <p>This is children props</p></Greet>
        <Greet name="Clark" heroName="Superman">
          <button>Action</button>
        </Greet> */}
        {/* <Greet name="Diana"heroName="Wonder Women"/>
        <Welcome name="Bruce" heroName="Batman"/> */}
        {/* <Welcome name="Clark" heroName="Superman"/> */}
        {/* <Welcome name="Diana" heroName="Wonder Woman"/> */}
        {/* <Hello/> */}
        {/* i */}
      </div>
    )  
  }
}

export default App;

