import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Vans from './Pages/Vans/Vans';
import Van from './Pages/Vans/Van'
import Layout from './Components/Layout';
import Dashboard from './Pages/Host/Dashboard';
import Income from './Pages/Host/Income';
import Reviews from './Pages/Host/Reviews';
import HostLayout from './Pages/Host/HostLayout';
import HostVans from './Pages/Host/Vans';
import HostVan from './Pages/Host/Van';
import Details from './Pages/Host/Details';
import Pricing from './Pages/Host/Pricing';
import Photos from './Pages/Host/Photos';
import './server';
import NotFound from './Components/NotFound';
import Login from './Components/Login';

/**
 * We want to nest routes in case we want to share some UI between routes
 * and may be add some different UI as well which is route specific.
 * @returns 
 */

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          {/* <Route path='login' element={<Login/>}/> */}
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          {/* Vans Paths */}
          <Route path="vans">
          <Route index element={<Vans/>}/>
          <Route path=":id" element={<Van/>}/>
          </Route>
          {/* Host Paths */}
          <Route path="host" element={<HostLayout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path="income" element={<Income/>}/>
            <Route path="reviews" element={<Reviews/>}/>
            {/* Host Vans Paths */}
            <Route path="vans">
              <Route index element={<HostVans/>}/>
              <Route path=":id" element={<HostVan/>}>
                <Route path="details" element={<Details/>}/>
                <Route path="pricing" element={<Pricing/>}/>
                <Route path="photos" element={<Photos/>}/>
            </Route>
            </Route>
          </Route>
          {/* <Route path='characters' element={<Search/>}/> */}
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

/**  Header is the shared component here and will be rendered for every child component.
Inside the shared component(Header) we use Outlet component which represents the component
needs to be rendered for a specific route.
*/
/* Dashboard is an index route as path="/" won't work here because "/" is an absolute route */
/* income, reviews are relative routes as we're not using slash before them.
These routes are relevant to the parent routes, so it will take the user to "/host/income".
*/
       
