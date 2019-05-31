import { ReactMic } from 'react-mic'
import React, { Component } from 'react'
import RecordingCard from './RecordingCard.js'

class Record extends Component {
  constructor(props) {
    super(props)
    this.state = {
      audioBlob: undefined,
      recordings: [],
    }
  }

  onStop = recordedBlob => {
    let newRecord = {
      blobURL: recordedBlob.blobURL,
      photoSrc: this.props.photoSrc,
    }

    let newRecordings = [newRecord, ...this.state.recordings]

    this.setState({
      audioBlob: recordedBlob.blobURL,
      recordings: newRecordings,
    })
  }

  render() {
    return (
      <div className="flex flex-col justify-center">
        <div>
          <ReactMic
            backgroundColor="#ffffff"
            record={this.props.isRecording}
            className="sound-wave"
            onStop={this.onStop}
            strokeColor="#6cb2eb"
          />
        </div>
        <div>
          {this.state.recordings.length > 0
            ? this.state.recordings.map((r, i) => (
                <RecordingCard
                  photoSrc={r.photoSrc}
                  audioBlob={r.blobURL}
                  key={i}
                />
              ))
            : ''}
        </div>
      </div>
    )
  }
}

export default Record
