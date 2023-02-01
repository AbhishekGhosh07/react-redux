import React, { useState } from 'react';
import User from './User';

function App(){
  
return(<>
  <div className="App">
    <h1>App Component</h1>
    <User data={{name:'Anil',age:23}}/>
  </div>
</>)
}

export default App;