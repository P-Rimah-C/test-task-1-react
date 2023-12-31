import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppRouter from './components/AppRouter';
import UserStore from './store/UserStore';
import ResultTestStore from './store/ResultTestStore';
import HistoryTestsStore from './store/HistoryTestsStore';
import {AppContext} from "./context";

function App() {
  return (
    <AppContext.Provider value={{
      user: new UserStore(),
      userResult: new ResultTestStore(),
      history: new HistoryTestsStore()
    }}>
      <BrowserRouter>
          <AppRouter />
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
