import React from 'react'
import Head from 'next/head'

import "../assets/stylesheets/index.scss"

import Layout from '../components/layouts/layout'

export default class extends React.Component {
  constructor() {
    super()
    this.where = 'world'
  }

  render() {
    return (
      <Layout title="hello!!!!!!!!!!">
        <h1>hello { this.where }!</h1>
        <img src="static/mondorian.jpg" />
      </Layout>
    )
  }
}
