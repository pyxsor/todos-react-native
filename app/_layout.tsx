import { Stack } from "expo-router";
import "@/global.css"

export default function RootLayout(){
  return(
    <Stack
    screenOptions={{
      headerStyle: {
        backgroundColor: '#112e42',
      },
      headerTitleAlign:'center',
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
    >
        <Stack.Screen 
          name='index'
          options={{ headerShown: false }}
        />
        
        <Stack.Screen 
          name='notes'
          options={{ title: "My Notes" }}
        />
    </Stack>
  )
}
