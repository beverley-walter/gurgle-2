import './setup-dom'
import test from 'ava'
import React from 'react'
import nock from 'nock'
import { shallow, mount, render } from 'enzyme'

import * as api from '../../client/api'
import App from '../client/components/App'

var test = require('ava')

var configureDatabase = require('./helpers/database-config')
configureDatabase(test)

var db = require('../../server/db')

test.cb('Localhost connects', t => {
   var expected = {}
   var scope = nock('http://localhost:3000/')
   .get('/#')
   .replpy (200, expected)
})


App.prototype.componentDidMount = () => {}

test('<App />', t => {
  const wrapper = shallow(<App />)
  t.is(wrapper.find('h1').text(),'Book Clubbed!')
})

test.todo('App contains a loading logo element')

test.todo('App loads footer')

test.todo('App loads db')

test.todo('App contains an input button')

test.todo('App adds form onClick')

test.todo('App allows form to render placeholder text')

test.todo('App shows gallery view')

test.todo('App shows one clothing title on select view')


test.cb('get Data connecting to server', t => {
  var expected = { test: 'test passed' }
  var scope = nock('http://localhost:80/')
    .get('/getData')
    .reply(200, expected)

    Home.prototype.componentDidMount = () => {}

 test('Home page loads entries', (t) => {
      const wrapper = mount(<Home />)
      wrapper.setState({entries: [
        {id: 1, title: 'Cats'},
        {id: 2, title: 'Dogs'}
      ]})
      t.is(wrapper.find('#entry-1').exists(), true)
    })

test.cb('get All Of Table connecting to server', t => {
  var expected = { test: 'test passed' }
  var scope = nock('http://localhost:80/')
    .get('/getAll')
    .query({tableName: 'entry'})
    .reply(200, expected)

  api.getAllOfTable('entry', (actual, err) => {
    t.is(actual.test, expected.test)
    t.is(err, null)
    scope.done()
    t.end()
  })
})
