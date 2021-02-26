import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from '../../Styles/components/Header.style'

import logo from '../../../assets/logo/Nubank_Logo.png'

const Header: React.FC = () => {
  return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Image source={logo}/>
                <Text style={styles.title}>Eymard Neto</Text>
            </View>
        </View>
  )
}

export default Header
