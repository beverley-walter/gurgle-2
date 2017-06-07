import React from 'react'

import Header from './Header'
import SignUpForm from './SignUpForm'
import MemberProfile from './MemberProfile'
import LoanItems from './LoanItems'
import Catalogue from './Catalogue'
import ClothingArticle from './ClothingArticle'
import Faq from './Faq'
import Footer from './Footer'

import {HashRouter as Router, Route} from 'react-router-dom'

const App = () =>
   (
   <Router>
      <div className='app'>
         <Header />
         <Route path="/signup" component= {SignUpForm} />
         <Route path="/profile" component= {MemberProfile} />
         <Route path="/loans" component= {LoanItems} />
         <Route path="/catalogue" component= {Catalogue} />
         <Route path="/article" component= {ClothingArticle} />
         <Route path="/faq" component= {Faq} />
         <Footer />
      </div>
   </Router>
)

export default App
