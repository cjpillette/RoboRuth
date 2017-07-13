import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CreateAQPForm from '../components/CreateAQPForm'
import Aqp from '../components/Aqp'
import AQPsList from '../components/AQPsList'

const AQPsPage = ({
    aqps,
    onDeleteAQP,
    onCreateAQP
}) => (
  <div>
      {
        <CreateAQPForm
        onCreate={ onCreateAQP }
        />
      }
  {
      !!aqps ? (
          <Switch>
              <Route path='/aqps/:id' render={
                  ({ match }) => {
                      const id = match.params.id
                      console.log(aqps)
                      const aqp = aqps.find((aqp) => aqp._id === id)
                      if (!aqp) {
                          return (
                              <p>AQP with id "{ id }" not found</p>
                          )
                      }
                      return (
                          <Aqp { ...aqp } />
                      )
                  }
              } />
              <Route path='/aqps' render={
                  () => (
                      <AQPsList items={ aqps } onDeleteAQP = { onDeleteAQP }/>
                  )
                }
              />
          </Switch>
      ) : (
          'Loading aqps…'
      )
  }
  </div>
)

export default AQPsPage
