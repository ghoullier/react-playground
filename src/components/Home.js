import React from 'react'

import logo from '../logo.svg'

import * as AppStyles from './styles/App'

const Header = () =>
  <div style={AppStyles.Header}>
    <img src={logo} style={AppStyles.Logo} alt="logo" />
    <h2>Welcome to React</h2>
  </div>

const Intro = () =>
  <p style={AppStyles.Intro}>
    To get started, edit <code>src/App.js</code> and save to reload.
  </p>

const Home = () =>
  <div style={AppStyles.Container}>
    <Header />
    <Intro />
  </div>

export default Home
