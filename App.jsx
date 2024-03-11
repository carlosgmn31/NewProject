import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import CadastroUser from "./screens/CadastroUser";
import Home from "./screens/Home";
import Lista from "./screens/Lista";
import { Text, TouchableOpacity } from "react-native";
import Cadastro from "./screens/Cadastro";
import { Button, Icon } from "react-native-elements";
import EditarContato from "./screens/EditarContato";


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

<Stack.Screen options={{title:"Cadastro"}} name="CadastroUser" component={CadastroUser} />

<Stack.Screen  name="Cadastro" component={Cadastro} />
<Stack.Screen  name="EditarContato" component={EditarContato} />

<Stack.Screen   options={({ navigation }) => ({
              headerRight: () => ( 
                <TouchableOpacity >
                <Icon name="add" type='' size={30} color={'white'} 
                   onPress={() => navigation.navigate('Cadastro')}
                />
            </TouchableOpacity>
              ),
            })} name="Lista" component={Lista} 


/>
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