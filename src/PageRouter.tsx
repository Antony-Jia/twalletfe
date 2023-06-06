import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FrontPage from './pages/FrontPage'
import DashboardPage from './pages/DashboardPage'
import PrivateRoute from './service/Auth'
import NotFound from './pages/404page'
function PageRouter() {
    return (
        <Routes>
            {/* <Route exact path="/" element={<Home />} /> */}
            <Route path="/" element={<FrontPage />} />
            <Route path="/index" element={<FrontPage />} />
            <Route path='/dashbardpage' element={
                <PrivateRoute>
                    <DashboardPage />
                </PrivateRoute>
            } >
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default PageRouter