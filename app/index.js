import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import Description from '../components/Description';
import { useFonts, Inter_700Bold, Inter_400Regular } from '@expo-google-fonts/inter';
import Tasks from '../components/Tasks';

//REDUX-TOOLKIT
import { store } from '../redux/store.js';
import { Provider } from 'react-redux'

export default function Home(){
    let [fontsLoaded] = useFonts({
        Inter_700Bold,
        Inter_400Regular
      });
    
      if (!fontsLoaded) {
        return null;
      }
    return (
        <Provider store={store}>
            {/**REDUX PROVIDER */}
            
            <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}> 
            <Stack.Screen 
                options={{
                    headerStyle: { backgroundColor: "#fff" },
                    headerShadowVisible: false,
                    headerTitle: "Task List",
                    headerTitleAlign: 'center'
                }}       
            / >
                <Description/>
                <Tasks/>
            </SafeAreaView>

        </Provider>
    )
}

const styles = StyleSheet.create({
    header:{
        flex: 1,
        backgroundColor: '#ff',
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }
})