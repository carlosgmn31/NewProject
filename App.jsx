import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import CadastroUser from "./screens/CadastroUser";
import Home from "./screens/Home";
import Lista from "./screens/Lista";
import { Text, TouchableOpacity } from "react-native-web";
import Cadastro from "./screens/Cadastro";


const Stack = createNativeStackNavigator();

function App() {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Home"
      screenOptions={{
        headerStyle:{backgroundColor:'#3C6EF4'},
        headerTitleAlign:"center",
        headerTitleStyle:{color:"#ffffff"},
        headerShown: true,
        headerTintColor: "#ffffff" 
      }}>
<Stack.Screen options={{headerShown:false}} name="Home" component={Home} />
<Stack.Screen  name="Cadastro" component={Cadastro} />
<Stack.Screen
  options={{
    title: "Lista de Contatos",
    headerRight: () => (
      <TouchableOpacity
      
        onPress={() => navigation.navigate('Cadastro')}
        style={{
          padding: 10,
          borderRadius: 50,
          backgroundColor: "transparent",
        }}
      >
        <Text style={{ color: "#ffffff", fontSize: 20 }}>+</Text>
      </TouchableOpacity>
    )
  }}
  name="Lista"
  component={Lista}
/>
<Stack.Screen options={{title:"Usuário"}} name="CadastroUser" component={CadastroUser} />
</Stack.Navigator>
</NavigationContainer>

);
}

export default App;


const stylesGlobal = StyleSheet.create({
  stylesGlobal: {
  flex: 1,
  padding: 20,
  },
  });