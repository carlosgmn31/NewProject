import { Button} from "react-native-elements";
import { View } from "react-native-web";
import { InputComponent } from "../components/InputComponent";
import { Text, TextInput } from "react-native";
import Contato from "../api/Contato";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Cadastro = () => {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState()
  const [telefone, setTelefone] = useState("")


  const addContato = () => {
      contato = {
          "nome": nome,
          "numero": telefone,
          "email":email
      };

      Contato.criarContato(contato)
      .then(response => {
          console.info(response.status)
          listaContato()
          
      }).catch(error => {
          console.warn(error)
      })
  }

  const navigation = useNavigation();


  const listaContato = () => {
      navigation.navigate('Lista');
  }


    return (
  <View style={{flex: 1, flexDirection: 'column', alignItems:"center", justifyContent:"center", backgroundColor:"#E6DDD7"}}>
  <Text  style={{paddingLeft:10, fontSize: 20, width: 250}}>nome</Text>
  <TextInput value={nome} onChangeText={setNome} style={{backgroundColor:'#FFF', width: 250, height:40}}></TextInput>

  <Text  style={{paddingLeft:10, fontSize: 20, width: 250}}>email</Text>
  <TextInput value={email} onChangeText={setEmail} style={{backgroundColor:'#FFF', width: 250, height:40}}></TextInput>

  <Text  style={{paddingLeft:10, fontSize: 20, width: 250}}>telefone</Text>
  <TextInput value={telefone} onChangeText={setTelefone} style={{backgroundColor:'#FFF', width: 250, height:40}}></TextInput>
  
  <Button  buttonStyle={{backgroundColor:"#3C6EF4", width: 250 }}  title="Salvar" style={{marginTop:"5px"}}  onPress={() => addContato()} /> 
  </View>
  );
};

export default Cadastro;