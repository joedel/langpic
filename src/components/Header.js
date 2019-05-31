import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <header className="my-8">
        <div className="text-2xl font-semibold mb-1">LangPic</div>
        <div className="text-sm text-grey-dark">
          Practice speaking your second language by describing photos.
        </div>
      </header>
    )
  }
}

export default Header
