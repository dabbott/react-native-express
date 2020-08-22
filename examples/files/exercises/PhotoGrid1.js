import React from 'react'
import { Dimensions, FlatList, Image } from 'react-native'

import { formatPhotoUri } from './api/picsum'

export default function PhotoGrid({ photos, numColumns, onEndReached }) {
  const { width } = Dimensions.get('window')

  const size = width / numColumns

  // ...
}
