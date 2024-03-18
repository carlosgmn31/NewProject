import { Avatar, Button,  } from "react-native-elements";
import { StyleSheet, View,Text,TextInput } from "react-native";
import { InputComponent } from "../components/InputComponent";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import AlertPersonalizado from "../components/alertPersonalizado";




const Home = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [alertVisivel, setAlertVisivel] = useState(false);

    const login = () =>{
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
          const user = userCredential.user;
          setTimeout(() => navigation.navigate("Lista"), 3000); 
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
            setAlertVisivel(true)
        });
  
       
    }
    const hideAlert = () => {
      setAlertVisivel(false);
    };
    const navToCadastrar = () => {
      navigation.navigate('CadastroUser');
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
  <TextInput value={email} onChangeText={setEmail}  style={{backgroundColor:'#FFF', width: 250, height:40}}></TextInput>
  <Text style={{paddingLeft:10, fontSize: 20, width: 250}}>senha</Text>
  <TextInput value={senha} onChangeText={setSenha}  style={{backgroundColor:'#FFF', width: 250, height:40}}></TextInput>

  <Button  onPress={login} buttonStyle={{backgroundColor:"#3C6EF4", width: 250, }}  title="Logar" style={{marginTop:"15px"}}   /> 
  
  <Button  onPress={navToCadastrar} buttonStyle={{backgroundColor:"#F42E26",  width: 250, marginTop:5}} title="Cadastre-se" style={{marginTop:"5px"}}    />
  <AlertPersonalizado 
     visible={alertVisivel}
     title="Erro ao logar"
     message="E-mail ou senha incorretos!"
     onClose={hideAlert}/>
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
    