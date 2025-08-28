import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet';
// import Greet from './components/Greet';
import Welcome from './components/Welcome';
import { Component } from 'react';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';

import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';

import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';

import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
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
      <div className="App">
         <ClickCounter />
         <HoverCounter />
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

