import React from 'react'
import { Routes, Route, Switch } from 'react-router-dom';

function AppRoutes() {
  return (
    <Routes>
      <Switch>
        <Route path='/' element='Login' />
        <Route path='/search' element='Login' />
        <Route path='/album:id' element='Login' />
        <Route path='/favorites' element='Login' />
        <Route path='/profile' element='Login' />
        <Route path='/profile/edit' element='Login' />
        <Route path='*' element='NotFound' />
      </Switch>
    </Routes>
  )
}

export default AppRoutes;
