import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Lista from "./screens/Lista";


const Stack = createNativeStackNavigator();

function App() {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}>
<Stack.Screen  name="Home" component={Home} />
<Stack.Screen  name="Lista" component={Lista} />
</Stack.Navigator>
</NavigationContainer>

);
}

export default App;
