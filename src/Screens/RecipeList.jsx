import { SafeAreaView, Text } from 'react-native'
import { SearchFilter } from '../Components/SearchFilter'
import { CategoryFilter } from '../Components/CategoryFilter'
import { RecipeLists } from '../Components/RecipeLists'

export function RecipeList(){
    return (
        <SafeAreaView>
            <SearchFilter placeholder={"Search Recipe..."} icon={"search"}/>
            <Text style={{fontSize:20, fontWeight:"bold", marginHorizontal:10, marginTop:10}}>Categories</Text>
            <CategoryFilter/>
            <RecipeLists/>
        </SafeAreaView>
    )
}
