import { Avatar, Button,  } from "react-native-elements";
import { StyleSheet, View,Text,TextInput } from "react-native";
import { InputComponent } from "../components/InputComponent";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";




const Home = () => {
    const navigation = useNavigation();
  
    const logar = () => {
      navigation.navigate('Lista');
    };
    const navToCadastrar = () => {
      navigation.navigate('Cadastro');
    };
    
    return (
  <View style={{flex: 1, flexDirection: 'column', alignItems:"center", justifyContent:"center", backgroundColor:"#E6DDD7"}} >
  <Avatar 
  size={'large'}
    rounded
    source={{
      uri:
        '../assets/do-utilizador.png',
    } }
  />
  <Text style={{paddingLeft:10, fontSize: 20, width: 250}}>login</Text>
  <TextInput style={{backgroundColor:'#FFF', width: 250, height:40}}></TextInput>
  <Text style={{paddingLeft:10, fontSize: 20, width: 250}}>senha</Text>
  <TextInput style={{backgroundColor:'#FFF', width: 250, height:40}}></TextInput>

  <Button  onPress={logar} buttonStyle={{backgroundColor:"#3C6EF4", width: 250, }}  title="Logar" style={{marginTop:"15px"}}   /> 
  
  <Button  onPress={navToCadastrar} buttonStyle={{backgroundColor:"#F42E26",  width: 250, marginTop:5}} title="Cadastre-se" style={{marginTop:"5px"}}    />
  </View>
    );
    };
    
    const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 20,
    },
    });
    
export default Home;
    