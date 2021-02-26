import React from 'react'
import { View, StatusBar } from 'react-native'
import Header from '../../components/Header'

import styles from '../../Styles/Preload.style'

const Main: React.FC = () => {
  return (
    <>
        <StatusBar barStyle="light-content" backgroundColor='#8B10AE'/>
        <View style={styles.container}>
            <Header/>
        </View>
    </>
  )
}
export default Main
