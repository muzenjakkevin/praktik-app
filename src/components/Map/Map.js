import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'

function Map() {
  return (
    <GoogleMap defaultZoom={10} defaultCenter={{lat: 46.165940, lng: 24.361720}}/>
  )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

export default WrappedMap