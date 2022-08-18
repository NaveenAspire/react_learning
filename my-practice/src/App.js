import './App.css';
import { About, Home, Profile, Routers } from './RouterEx';
import { Route,Link, Switch , } from 'react-router-dom'
// import Form from './Form';
// import ConditionalRendering from './ConditionalRendering';
// import ClassComponent from './Components' // import default componenent
// import {FunctionalComponent1,FunctionalComponent2} from './Components';  // import named components.

// import LifeCycle from './LifeCycle'

// import ListKeys from './ListKeys'

// import LiftingStateUp from './LiftingStateUp'


function App() {
  return (
    <div className="App">
      {/* Component examples */}
      {/* <FunctionalComponent1 name="first"/>
      <FunctionalComponent2 name="second"/>
      <ClassComponent name="Element"/> */}

      {/* Life cycle and events examples */}
      {/* <LifeCycle/> */}

      {/* Conditional rendering example */}
      {/* <ConditionalRendering/> */}

      {/* List and keys */}
      {/* <ListKeys/> */}

      {/* Forms */}
      {/* <Form/> */}

      {/* Lifting Stateup */}
      {/* <LiftingStateUp/> */}
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
      <Routers/>

      { /* Route components are rendered if the path prop matches the current URL */}
      {/* <Route exact path={'/'}><Home/></Route>
      <Route exact path={'/about'}><About/></Route>
      <Route exact path={'/profile'}><Profile/></Route> */}
    </div>
  );
}

export default App;

