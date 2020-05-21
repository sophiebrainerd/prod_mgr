import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Main from './views/Main';
import { Router } from '@reach/router';
import Detail from './views/Detail';


function App() {
  return (
    <div className="App">
        <div>
            <Router>
                <Main path="products/"/>
                <Detail path="products/:id"/>
            </Router>
        </div>
    </div>
  );
}

export default App;
