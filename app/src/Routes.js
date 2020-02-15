import React from 'react'
import About from './About'
import Route from 'react-router-dom/Route'
import CapacityMessage from './CapacityMessage'
import Sauna from './Sauna'
import Saunas from './Saunas'
import Visitors from './Visitors'
import CapacityMessageItem from './CapacityMessageItem'
import Temperatures from './Temperatures'
import PaperSheet from './PaperSheet'
import Quotes from './Quotes'

const Routes = () =>
  <PaperSheet>
    <Route exact path='/' component={Saunas} />
    <Route path='/saunas' component={Saunas} />
    <Route path='/sauna/:id' component={Sauna} />
    <Route path='/visitors' component={Visitors} />
    <Route path='/temperatures' component={Temperatures} />
    <Route path='/about' component={About} />
    <Route path='/capacity_messages' component={CapacityMessage} />
    <Route path='/capacity_message/:id' component={CapacityMessageItem} />
    <Route path='/quotes' component={Quotes} />
    <Route path='/quotes/:id' component={Quotes} />
  </PaperSheet>

export default Routes
