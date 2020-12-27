import Footer from './Components/Footer';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Pages/Home';
import ProductDetail from './Pages/ProductDetail'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/' exact={true} component={Home} />
        <Route path='/products/:id' exact={true} component={ProductDetail} />
        <Footer />
      </BrowserRouter>

      <div className="tap-top">
          <div>
              <i className="fa fa-angle-double-up"></i>
          </div>
      </div>

    </div>
  );
}

export default App;
