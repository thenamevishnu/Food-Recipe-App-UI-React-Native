import { Text, View } from "react-native";
import { categories } from "../Constants";
import { ScrollView } from "react-native";

export function CategoryFilter() {
    return (
       <View style={{marginHorizontal:10, marginTop:10}}>
            <ScrollView horizontal>
                {
                    categories.map((item, index) => {
                        return(
                            <View key={item.id} style={{backgroundColor:index===0 ? "#f96163" : "#fff", borderRadius:8, padding:16, marginRight:15}}>
                                <Text style={{color: index===0 ? "#fff" : "#000", fontWeight:"600"}}>{item.category}</Text>
                            </View>
                        )
                    })
                }
            </ScrollView>
       </View>
    )
}
