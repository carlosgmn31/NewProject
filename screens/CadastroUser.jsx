import { Button} from "react-native-elements";
import { View } from "react-native-web";
import { StyleSheet, Text, TextInput } from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../firebase"
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const CadastroUser = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');

  const auth = getAuth();


  const salvar = () => {
   
    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        SignedIn()
        
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + "  " + errorMessage)
        // ..
      });
  };
  const navigation = useNavigation();

  const SignedIn = () => {
    navigation.navigate('Lista');
  };

  

    return (
  <View style={{flex: 1, flexDirection: 'column', alignItems:"center", justifyContent:"center", backgroundColor:"#E6DDD7"}}>
  <Text style={styles.label}>nome</Text>
  <TextInput  value={nome}
            onChangeText={setNome} style={styles.input}></TextInput>
  <Text style={styles.label}>cpf</Text>
  <TextInput  value={cpf}
            onChangeText={setCpf} style={styles.input}></TextInput>
  <Text style={styles.label}>e-mail</Text>
  <TextInput  value={email}
            onChangeText={setEmail} style={styles.input}></TextInput>
  <Text style={styles.label}>senha</Text>
  <TextInput  value={senha}
            onChangeText={setSenha} style={styles.input}></TextInput>
  <Button  buttonStyle={{backgroundColor:"#3C6EF4", width: 250 }}  title="Salvar" style={{marginTop:"5px"}}  onPress={() => salvar()}/> 
  </View>
  );
};

export default CadastroUser;

  const styles = StyleSheet.create({

  label:{
      paddingLeft:10,
      fontSize: 20, 
      width: 250
  },
  input:{backgroundColor:'#FFF',
   width: 250,
   height:40
  }
})