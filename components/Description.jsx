import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import { useFonts, Inter_700Bold, Inter_400Regular } from '@expo-google-fonts/inter';
import avatar from '../assets/Avatargroup.png';

export default function Description() {
    let [fontsLoaded] = useFonts({
        Inter_700Bold,
        Inter_400Regular
      });
    
    //   if (!fontsLoaded) {
    //     return null;
    //   }  
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.title}>Task Title</Text>
        </View>
        <View>
            <Text style={styles.heading}>NFT Web App Prototype</Text>
        </View>
        <View>
            <Text style={styles.title}>Description</Text>
            <Text style={styles.desc}>Last year was a fantastic year for NFTs, with the market reaching a $40 billion valuation for the first time. In addition, more than $10 billion worth of NFTs are now sold every week – with NFT</Text>
        </View>
        <View>
            <Image
                source={avatar}
                style={styles.avatars}
            />
        </View>
        <View>
            <Text style={styles.title}>Task List</Text>
        </View>
    </View>
  )
}



const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    title: {
        color: "#5D6B98"
    },
    heading: {
        fontFamily: 'Inter_700Bold',
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 15,
        marginBottom: 15
    },
    desc: {
        marginTop: 10
    },
    avatars: {
        marginBottom: 25,
        marginTop: 10
    }

})
