import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <footer className="my-8 text-grey-dark text-center">
        <div className="mb-4">
          Test yourself by trying to describe the photo or make up a story in
          your target language.
        </div>
        <div className="mb-4">
          Recordings are saved locally only and deleted on refresh. Only Chrome,
          Firefox and some Android devices are supported, does not work on
          iPhone.
        </div>
      </footer>
    )
  }
}

export default Footer
