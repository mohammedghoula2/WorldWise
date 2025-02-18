/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import CityList from './components/CityList';
import CountriesList from './components/CountriesList';
import City from './components/City';
import Form from './components/Form';
import { CitiesProvider } from './Contexts/CitiesContext.jsx';
import { AuthProvider } from './Contexts/FakeAuthContext.jsx';
import ProtectedRoute from './pages/ProtectedRoute.jsx';
import { lazy, Suspense } from 'react';
import SpinnerFullPage from './components/SpinnerFullPage';

const HomePage = lazy(() => import('./pages/HomePage'));
const Product = lazy(() => import('./pages/Product'));
const Pricing = lazy(() => import('./pages/Pricing'));
const AppLayout = lazy(() => import('./pages/AppLayout'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));
const Login = lazy(() => import('./pages/Login'));

// import Product from './pages/Product';
// import Pricing from './pages/Pricing';
// import HomePage from './pages/HomePage';
// import AppLayout from './pages/AppLayout';
// import PageNotFound from './pages/PageNotFound';
// import Login from './pages/Login';

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route index element={<HomePage />} />
              <Route path='product' element={<Product />} />
              <Route path='pricing' element={<Pricing />} />
              <Route path='login' element={<Login />} />
              <Route
                path='app'
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate to='cities' replace />} />
                <Route path='cities/:id' element={<City />} />
                <Route path='cities' element={<CityList />} />
                <Route path='countries' element={<CountriesList />} />
                <Route path='form' element={<Form />} />
              </Route>
              <Route path='*' element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
