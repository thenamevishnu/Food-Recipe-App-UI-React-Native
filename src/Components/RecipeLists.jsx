import { Image, SafeAreaView, Text } from "react-native";
import { recipeList } from "../Constants";
import { View } from "react-native";
import { ScrollView } from "react-native";

export function RecipeLists() {
    return (
        <ScrollView contentContainerStyle={{borderRadius:20, paddingBottom:170}}>
            {
                recipeList.map((item, index) => {
                    return(
                        <View key={item.id} style={{marginHorizontal:10, paddingVertical:10}}>
                            <Image source={item.image} style={{width:"100%", height:300, borderRadius:20}}/>
                            <Text style={{textAlign:"center"}}>
                                {item.description}
                            </Text>
                        </View>
                    )
                })
            }
        </ScrollView>
    )
}
