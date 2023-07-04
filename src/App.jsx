import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import { HomePage } from './pages';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';
import GeneralLoading from './components/general-loading/GeneralLoading';
import DefaultLayout from './layouts/DefaultLayout';
import PlaceToStay from './pages/place-to-stay/PlaceToStay';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Loginuser';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <DefaultLayout>
          <Suspense fallback={<GeneralLoading text={`LOADING...`} />}>
            <Toaster/>
            <Routes>
              <Route path='/signup' element={<Signup/>}/>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/place-to-stay" element={<PlaceToStay />} />
              <Route
                path="*"
                element={<GeneralLoading text="PAGE NOT FOUND" />}
              />
              <Route path='/login' element={<Login/>} />
            </Routes>
          </Suspense>
        </DefaultLayout>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
