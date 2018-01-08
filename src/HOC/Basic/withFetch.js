import React, { Component } from 'react'

const withFetch = PassedComponent =>
  class WithGists extends React.Component {
    state = {
      gists: []
    }
    componentDidMount() {
      fetch(props.url)
        .then(r => r.json())
        .then(gists =>
          this.setState({
            gists: gists
          })
        )
    }
    render() {
      return <PassedComponent {...this.props} gists={this.state} />
    }
  }

export default withFetch
