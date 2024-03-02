import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import CadastroUser from "./screens/CadastroUser";
import Home from "./screens/Home";
import Lista from "./screens/Lista";
import { Text, TouchableOpacity } from "react-native";
import Cadastro from "./screens/Cadastro";
import { Button } from "react-native-elements";


const Stack = createNativeStackNavigator();

function App({ navigation }) {
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
        style={{
          padding: 10,
          borderRadius: 50,
          marginRight: 10, 
        }}
      >

<Button
        style={{ color: "#ffffff", fontSize: 20 }}
        title="+"
        onPress={() => navigation.navigate('CadastroUser')}
      />
        
      </TouchableOpacity>
    ),
  }}
  name="Lista"
  component={Lista}
/>

<Stack.Screen options={{title:"Cadastro"}} name="CadastroUser" component={CadastroUser} />
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