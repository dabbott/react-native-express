import React from 'react'

// https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
const addCommas = x => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const cache = {}

export default class StarCount extends React.Component {
  state = {
    count: null,
  }

  componentWillMount() {
    const { user, repo } = this.props
    const cacheKey = `${user}/${repo}`

    if (cache[cacheKey]) {
      this.setState({ count: cache[cacheKey] })
      return
    }

    // Fetch doesn't exist in older browsers
    try {
      fetch(`https://api.github.com/repos/${user}/${repo}`)
        .then(response => response.json())
        .then(json => json.stargazers_count)
        .then(count => {
          cache[cacheKey] = count
          this.setState({ count })
        })
    } catch (e) {
      // Do nothing
    }
  }

  render() {
    const { count } = this.state

    if (!count) return null

    return <span>- {addCommas(count)} stars</span>
  }
}
