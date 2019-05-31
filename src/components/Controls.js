import React, { Component } from 'react'
import MdChevronLeft from 'react-icons/lib/md/chevron-left'
import MdChevronRight from 'react-icons/lib/md/chevron-right'
import MdFiberManualRecord from 'react-icons/lib/md/fiber-manual-record'

class Controls extends Component {
  render() {
    return (
      <div className="w-5/6 flex flex-row justify-between">
        <button
          className="hover:text-grey-darkest text-grey-dark text-5xl"
          onClick={this.props.prev}
        >
          <MdChevronLeft />
        </button>
        <button
          className={`${
            this.props.isRecording ? 'text-red' : 'text-grey-darker'
          } text-3xl`}
          onClick={this.props.toggleRecording}
        >
          <MdFiberManualRecord size={80} />
        </button>
        <button
          className="hover:text-grey-darkest text-grey-dark text-5xl"
          onClick={this.props.next}
        >
          <MdChevronRight />
        </button>
      </div>
    )
  }
}

export default Controls
