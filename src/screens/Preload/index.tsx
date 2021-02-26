import React from 'react'
import { View, StatusBar } from 'react-native'

import styles from '../../Styles/Preload.style'

const Preload: React.FC = () => {
  return (
    <>
        <StatusBar barStyle="light-content" backgroundColor='#8B10AE'/>
        <View style={styles.container}></View>
    </>
  )
}
export default Preload
