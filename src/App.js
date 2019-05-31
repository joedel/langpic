import React, { Component } from 'react'
import Record from './components/Record'
import Footer from './components/Footer'
import Header from './components/Header'
import Controls from './components/Controls'

// Right now all photos are local and looked up by simple file name convention
const PHOTO_COUNT = 126

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentPhotoId: 0,
      recording: false,
    }
  }

  prev = () => {
    this.setState(({ currentPhotoId }) => {
      return {
        currentPhotoId: currentPhotoId === 0 ? PHOTO_COUNT : currentPhotoId - 1,
      }
    })
  }

  next = () => {
    this.setState(({ currentPhotoId }) => {
      return {
        currentPhotoId: currentPhotoId === PHOTO_COUNT ? 0 : currentPhotoId + 1,
      }
    })
  }

  toggleRecording = () => {
    this.setState(({ recording }) => {
      return { recording: !recording }
    })
  }

  render() {
    let photoSrc = `${process.env.PUBLIC_URL}images/image-${
      this.state.currentPhotoId
    }.jpg`

    return (
      <div className="container">
        <Header />
        <div className="flex flex-col items-center justify-center text-center">
          <img className="photo rounded mr-auto ml-auto mb-8" src={photoSrc} />
          <Controls
            prev={this.prev}
            next={this.next}
            isRecording={this.state.recording}
            toggleRecording={this.toggleRecording}
          />
          <Record isRecording={this.state.recording} photoSrc={photoSrc} />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
