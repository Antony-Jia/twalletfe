import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import FrontPage from './pages/FrontPage'
import DashboardPage from './pages/DashboardPage'
function PageRouter() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path='/frontpage' element={<FrontPage />} />
            <Route path='/dashbardpage' element={<DashboardPage />} >
            </Route>
        </Routes>
    )
}

export default PageRouter