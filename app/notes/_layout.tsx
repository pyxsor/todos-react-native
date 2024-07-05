import { Stack } from "expo-router";
import "@/global.css";

export default function RootLayout(){
  return(
    <Stack>
        <Stack.Screen 
          name='index'
          options={{
            headerShown : false,
          }}
        />

        <Stack.Screen 
          name='add'
          options={{
            headerShown : false,
          }}
        />

        <Stack.Screen 
          name='[id]'
          options={{
            headerShown : false,
          }}
        />
    </Stack>
  )
}
