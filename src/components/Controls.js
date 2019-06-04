import React from 'react'
import MdChevronLeft from 'react-icons/lib/md/chevron-left'
import MdChevronRight from 'react-icons/lib/md/chevron-right'
import MdFiberManualRecord from 'react-icons/lib/md/fiber-manual-record'

const Controls = ({ prev, next, isRecording, toggleRecording }) => {
  return (
    <div className="w-5/6 flex flex-row justify-between">
      <button
        className="hover:text-grey-darkest text-grey-dark text-5xl"
        onClick={prev}
      >
        <MdChevronLeft />
      </button>
      <button
        className={`${isRecording ? 'text-red' : 'text-grey-darker'} text-3xl`}
        onClick={toggleRecording}
      >
        <MdFiberManualRecord size={80} />
      </button>
      <button
        className="hover:text-grey-darkest text-grey-dark text-5xl"
        onClick={next}
      >
        <MdChevronRight />
      </button>
    </div>
  )
}

export default Controls
