import React, { Component } from 'react'

const withFetch = PassedComponent =>
  class WithGists extends Component {
    state = {
      data: []
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
      return <PassedComponent {...this.props} {...state} />
    }
  }

export default withFetch
