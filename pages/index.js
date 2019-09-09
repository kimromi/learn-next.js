import React from 'react'

export default class extends React.Component {
  constructor() {
    super()
    this.where = 'world'
  }

  render() {
    return (
      <div>
        <h1>hello { this.where }!</h1>
        <img src="static/mondorian.jpg" />
      </div>
    )
  }
}
