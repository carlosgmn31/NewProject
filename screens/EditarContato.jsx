import { useNavigation } from "@react-navigation/native";
import Contato from "../api/Contato";
import { Text, TextInput, View } from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";

const EditarContato = (props) => {
    let id = props.route.params.id;
    let nome = props.route.params.nome;
    let numero = props.route.params.numero;
    const [nome1, setNome] = useState("")
    const [email, setEmail] = useState()
    const [telefone, setTelefone] = useState("")
    return (

        <View style={{flex: 1, flexDirection: 'column', alignItems:"fix", justifyContent:'top', backgroundColor:"#E6DDD7"}} >
            <Text  style={{paddingLeft:10, fontSize: 20, width: 250}}>nome</Text>
  <TextInput value={nome} onChangeText={setNome} style={{backgroundColor:'#FFF', width: 250, height:40}}></TextInput>

  <Text  style={{paddingLeft:10, fontSize: 20, width: 250}}>email</Text>
  <TextInput value={email} onChangeText={setEmail} style={{backgroundColor:'#FFF', width: 250, height:40}}></TextInput>

  <Text  style={{paddingLeft:10, fontSize: 20, width: 250}}>telefone</Text>
  <TextInput value={numero} onChangeText={setTelefone} style={{backgroundColor:'#FFF', width: 250, height:40}}></TextInput>
            </View>
    );

    };

export default EditarContato;