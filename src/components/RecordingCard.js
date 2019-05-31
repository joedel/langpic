import React, { Component } from 'react'

class RecordingCard extends Component {
  render() {
    return (
      <div className="bg-white rounded my-8 border border-grey-light">
        <div className="flex items-center flex-between">
          <img className="h-24 md:h-32" src={this.props.photoSrc} />
          <div className="p-4 md:p-6">
            <audio controls src={this.props.audioBlob} />
          </div>
        </div>
      </div>
    )
  }
}

export default RecordingCard
