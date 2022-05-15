import React, { Suspense } from 'react';
import './App.css';
import Vaider from './components/Vaider';
const Kylo = React.lazy(() => import('remote_react_module/Kylo'));
const BB8 = React.lazy(() => import('remote_nextjs_module/BB8'));
function App() {
  return (
    <>
      <div className='Text'>
        This is the React container App hosted at localhost:8080
      </div>
      <div className='Host-Container'>
        <Vaider />
        <hr />
        <Suspense fallback={'loading...'}>
          <BB8 />
          <hr />
          <Kylo />
        </Suspense>
        
      </div>
      
    </>
      
  );
}

export default App;
