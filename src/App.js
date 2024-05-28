import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Customers from './pages/Customers/index'
import Layout from './pages/Layout/index'

export default function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Navigate to="customers" replace/>}/>
          <Route path="customers" element={<Customers/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
