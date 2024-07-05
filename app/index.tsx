import { View} from "react-native"
import CustomButton from '@/components/CustomButton'
import { Link, router } from "expo-router"

const Index =()=>{
    return(
        <View className = "flex-1 justify-center items-center bg-blue-200">
            <View className="mb-3 ">
            <CustomButton
                type = "intro"
                title = "CLICK HERE"
                onPress={()=> 
                    router.push('notes')}
            />
            </View>
        </View>
    )
}

export default Index;