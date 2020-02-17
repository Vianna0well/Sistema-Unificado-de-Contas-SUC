import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import List from './pages/List';
import Create from './pages/Create'

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path='/' exact component={List} />
            <Route path='/Create' component={Create} />
        </BrowserRouter>
    )
}