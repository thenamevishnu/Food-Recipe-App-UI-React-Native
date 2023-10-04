import { Text, TouchableOpacity, View } from 'react-native';
import { Dimensions, Image, SafeAreaView, StyleSheet } from 'react-native'

export function WelcomeScreen({ navigation }){

    const height = Dimensions.get("window").height
    const width = Dimensions.get("window").width

    return (
        <SafeAreaView style={{height:height, width:width}}>      
            <View style={styles.container}>
                <Image source={require("../assets/Images/welcome-logo.png")} style={styles.imageSize}/>
                <Text style={styles.premium}>
                    4K+ Premium Recipes
                </Text>
                <Text style={styles.cook}>
                    Cook Like A chef
                </Text>
                <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("RecipeList")}>
                    <Text style={styles.buttonText}>Let't Go</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageSize:{
        width:400,
        height:500
    },
    premium:{
        fontSize:25,
        fontWeight:'bold',
        marginTop:50,
        color:"#f96163"
    },
    cook:{
        fontSize:42
    },
    button:{
        width:"80%",
        backgroundColor:"#f96163",
        marginTop:50,
        justifyContent:'center',
        borderRadius:10
    },
    buttonText:{
        fontSize:20,
        textAlign:'center',
        padding:10,
        color:"#fff"
    }
});
