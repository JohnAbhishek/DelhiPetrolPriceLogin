import React from 'react'
import Header from './Header'
import PetrolApi from './PetrolApi'

function Dashboard(formvalues) {
  return (
    <div>
      <Header/>
      <PetrolApi/>
    </div>
  )
}

export default Dashboard