import { Avatar, Button } from "react-native-elements";
import { StyleSheet, View } from "react-native-web";
import { InputComponent } from "../components/InputComponent";
import { Contato } from "../components/Contato";

const Lista = () => {
    return (
        
  <View style={{flex: 1, flexDirection: 'column', alignItems:"fix", justifyContent:'top', backgroundColor:"#E6DDD7"}} >
  <Contato nome={'Marcos Andrade'}numero={'81 988553424'} />
  <Contato nome={'Patrícia Tavares'}numero={'81 998765332'} />
  <Contato nome={'Rodrigo Antunes'}numero={'81 987765525'} />

  </View>
    );
    };
    
export default Lista;