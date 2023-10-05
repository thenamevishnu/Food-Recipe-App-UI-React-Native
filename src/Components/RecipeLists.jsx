import { Image, StyleSheet, Text } from "react-native";
import { recipeList } from "../Constants";
import { View } from "react-native";
import { ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export function RecipeLists({navigation}) {
    return (
        <ScrollView contentContainerStyle={{borderRadius:20, paddingBottom:200, marginTop:14, flexDirection:"row", flexWrap:'wrap', justifyContent:"space-between"}}>
            {
                recipeList.map((item) => {
                    return(
                        <View key={item.id} style={styles.card}>
                            <Image source={item.image} style={styles.items}/>
                            <Text style={{textAlign:"center", fontSize:22, fontWeight:600, marginTop:5}}>{item.name}</Text>
                            <Text>{item.time} | {item.rating} <FontAwesome name="star-o"/></Text>
                            <Text>{item.difficulty}</Text>
                            <TouchableOpacity onPress={()=>navigation.navigate("Details",{item: item})}>
                                <Text style={{padding:5, backgroundColor:"#89CFF0", paddingHorizontal:20, marginTop:10, borderRadius:10, color:"#fff"}}><FontAwesome name={"eye"}/> View</Text>
                            </TouchableOpacity>
                        </View>
                    )
                })
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    card:{
        marginHorizontal:10,  
        alignItems:"center",
        backgroundColor:"#fff",
        borderRadius:20,
        shadowColor:"#000",
        shadowOffset:{
            width:4,
            height:1
        },
        elevation:4,
        shadowOpacity:0.5,
        marginBottom:13,
        width:190,
        height:255
    },
    items:{
        height:140, 
        width:190, 
        borderRadius:20, 
        objectFit:"cover",
    }
})