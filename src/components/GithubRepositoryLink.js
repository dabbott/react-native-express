import React from 'react'

import StarCount from './StarCount'

export default class GithubRepositoryLink extends React.Component {
  render() {
    const { user, repo, title } = this.props

    return (
      <span>
        <a href={`https://github.com/${user}/${repo}`}>{title}</a>{' '}
        <StarCount user={user} repo={repo} />
      </span>
    )
  }
}
