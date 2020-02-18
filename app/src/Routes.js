import React from 'react'
import About from './About'
import Route from 'react-router-dom/Route'
import CapacityMessage from './CapacityMessage/CapacityMessage'
import Sauna from './Sauna/Sauna'
import Saunas from './Sauna/Saunas'
import Visitors from './Visitor/Visitors'
import CapacityMessageItem from './CapacityMessage/CapacityMessageItem'
import Temperatures from './Temperature/Temperatures'
import PaperSheet from './PaperSheet'
import Quotes from './Quote/Quotes'

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
