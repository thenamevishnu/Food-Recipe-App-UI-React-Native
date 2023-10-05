import { FontAwesome , Ionicons, FontAwesome5, Entypo} from "@expo/vector-icons"
import { ScrollView } from "react-native"
import { Image, StyleSheet, Text, View } from "react-native"

export function DetailsPage({route}){

    const item = route.params.item

    return (
        <View style={{width:"100%", height:"100%", backgroundColor:item.color}}>
            <View style={styles.container}>
                <FontAwesome name={"heart-o"} size={30} style={{position:"absolute", top:15, right:20}}/>
                <Image source={item.image} style={styles.image}/>
                <Text style={{fontSize:25, marginTop:10, fontWeight:700}}>{item.name} | {item.rating} <FontAwesome name={"star-o"} size={25}/></Text>
                <ScrollView contentContainerStyle={{padding:15}}>
                    <Text style={{fontSize:16, textAlign:"justify"}}>{item.description}</Text>
                    <View style={{flex:1, flexDirection:"row", justifyContent:"space-between", marginTop:20}}>
                        <View style={{alignItems:"center", backgroundColor:"#f1807e", width:100, height:120, paddingVertical:20, borderRadius:10}}>
                            <FontAwesome name={"clock-o"} style={{fontSize:45}}/><Text style={{fontSize:20, flexDirection:"column"}}>{item.time}</Text>
                        </View>
                        <View style={{alignItems:"center", backgroundColor:"#999ee1", width:100, height:120, paddingVertical:20, borderRadius:10}}>
                            <Ionicons name={"fast-food"} style={{fontSize:45}}/><Text style={{fontSize:20, flexDirection:"column"}}>{item.difficulty}</Text>
                        </View>
                        <View style={{alignItems:"center", backgroundColor:"#f6f1ae", width:100, height:120, paddingVertical:20, borderRadius:10}}>
                            <FontAwesome5 name={"fire"} style={{fontSize:45}}/><Text style={{fontSize:20, flexDirection:"column"}}>{item.calories}</Text>
                        </View>
                    </View>
                    <Text style={{marginTop:15, fontSize:24, fontWeight:600}}>Ingredients</Text>
                    {
                        item.ingredients.map(items => {
                            return(
                                <View key={items} style={{marginTop:10}}>
                                    <Text style={{flexDirection:"row", fontSize:20}}><Entypo name={"dot-single"} size={20} color={"red"}/>{items}</Text>
                                </View>
                            )
                        })
                    }
                    <Text style={{marginTop:15, fontSize:24, fontWeight:600}}>Steps</Text>
                    {
                        item.steps.map((items, index) => {
                            return(
                                <View key={items} style={{marginTop:10}}>
                                    <Text style={{flexDirection:"row", fontSize:20}}>{index+1}) {items}</Text>
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        position:"absolute",
        bottom:0,
        backgroundColor:"#fff",
        alignItems:"center",
        shadowColor:"#000",
        shadowOffset:{
            width:8,
            height:-3
        },
        elevation:8,
        shadowOpacity:0.8,
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        height:"70%",
        width:"100%"
    },
    image:{
        width:230,
        height:230,
        borderRadius:50,
        marginTop:-140
    }
})