import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { routes } from "../utils/routes"

// Роутинг по страницам
const AppRouter = () => {
    return (
        <Routes>
            {routes.map(({path, Component, exact}) =>
                <Route key={path} path={path} element={Component} exact={exact}/>
            )}
        </Routes>
    );
}

export default AppRouter;