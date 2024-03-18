import { useNavigation } from "@react-navigation/native";
import Contato from "../api/Contato";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";


const EditarContato = (props) => {

    const contato = props.route.params
    console.log(contato)
    let nome = props.route.params.nome;
    let numero = props.route.params.numero;

    return (

        <View style={{flex: 1, flexDirection: 'column', alignItems:"center", justifyContent:"center", backgroundColor:"#E6DDD7"}} >
            <Text  style={styles.label}>nome</Text>
  <TextInput value={nome}  style={{backgroundColor:'#FFF', width: 250, height:40}}></TextInput>

  <Text  style={styles.label}>email</Text>
  <TextInput   style={{backgroundColor:'#FFF', width: 250, height:40}}></TextInput>

  <Text  style={styles.label}>telefone</Text>
  <TextInput value={numero}  style={{backgroundColor:'#FFF', width: 250, height:40}}></TextInput>
  
  <Button  buttonStyle={{backgroundColor:"#3C6EF4", width: 250 }}  title="Salvar" style={{marginTop:"5px"}}  /> 
            </View>
    );

    };

export default EditarContato;

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
