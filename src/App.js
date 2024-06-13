
import { Suspense } from 'react';
import Routing from './routing';
import Fallback from './components/fallback';
import ErrorBoundry from './components/ErrorBoundry';
import Temp from './temp';
import { Provider } from 'react-redux';
import { reduxStore } from './rootReducer';

function App() {
  return <>
  <ErrorBoundry>
    <Provider store={reduxStore}>
  <Suspense fallback={<Fallback/>} >
  <Routing/>
  </Suspense>
  </Provider>
  </ErrorBoundry>
  </>
   
}

export default App;
