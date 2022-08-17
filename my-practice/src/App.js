import './App.css';
import ConditionalRendering from './ConditionalRendering';
// import ClassComponent from './Components' // import default componenent
// import {FunctionalComponent1,FunctionalComponent2} from './Components';  // import named components.

// import LifeCycle from './LifeCycle'

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
      <ConditionalRendering/>


    </div>
  );
}

export default App;
