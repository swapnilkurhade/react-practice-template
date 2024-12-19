import logo from './logo.svg';
import './App.css';
import Parent from './components/contextHook/Parent';
import { OptimisticHookTest } from './components/Hooks/OptimisticHookTest';
import { TestOfUse } from './components/Hooks/TestOfUse';
import HooksMain from './components/Hooks/HooksMain';
import PerformConcepts from './components/performance/PerformConcepts';
import Counter from './components/statemangers/Counter';
import BearCounter from './components/statemangers/BearCounter';
import HocMain from './components/hoc/HocMain';
import RenderProps from './components/renderprops/RenderProps';
import ErrorBoundryMain from './components/errorBoundry/ErrorBoundryMain';
import ChildrenProps from './components/childrenprops/ChildrenProps';
import ClassComp from './components/classcomponent/ClassComp';

function App() {
  return (
    <>
      <div style={{textAlign:'center'}}>
        <h2>hello, This is react...</h2>


        {/* <Parent/> */}
        {/* <OptimisticHookTest/> */}
        {/* <TestOfUse/> */}
        {/* <Parent/> */}
        {/* <HooksMain/> */}
        {/* <PerformConcepts/> */}

        {/* == redux implementations == */}
        {/* <Counter /> */}

        {/* Zustand */}
        {/* <BearCounter/> */}

        {/* //Hoc's */}
        {/* <HocMain/> */}

        {/* Render props */}
        {/* <RenderProps/> */}

        {/* Error Boundry */}
        {/* <ErrorBoundryMain/> */}

        {/* childern Props */}
        {/* <ChildrenProps/> */}

        {/* Class components */}
        {/* <ClassComp/> */}

        
      </div>
    </>

  );
}

export default App;
