import React from 'react'
import Head from 'next/head'

import "../assets/stylesheets/index.scss"

export default class extends React.Component {
  constructor() {
    super()
    this.where = 'world'
  }

  render() {
    return (
      <div>
        <Head>
          <title>Index page</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <h1>hello { this.where }!</h1>
        <img src="static/mondorian.jpg" />
      </div>
    )
  }
}
