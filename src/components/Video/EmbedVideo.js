import React from 'react'
import PropTypes from 'prop-types'

import './EmbedVideo.css'

const EmbedVideo = ({ embedId }) => {
  return (
    <div className="video-responsive">
      <iframe 
        width="2560"
        height="1440"
        src={`https://www.youtube.com/embed/${embedId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}

EmbedVideo.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default EmbedVideo
