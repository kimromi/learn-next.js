import React from 'react'

export default class extends React.Component {
  constructor() {
    super()
    this.where = 'world'
  }

  render() {
    return (
      <div>hello { this.where }!</div>
    )
  }
}
