import React from 'react'

const RecordingCard = ({ photoSrc, audioBlob }) => {
  return (
    <div className="bg-white rounded my-8 border border-grey-light">
      <div className="flex items-center flex-between">
        <img className="h-24 md:h-32" src={photoSrc} />
        <div className="p-4 md:p-6">
          <audio controls src={audioBlob} />
        </div>
      </div>
    </div>
  )
}

export default RecordingCard
