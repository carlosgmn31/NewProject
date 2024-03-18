import { useNavigation } from "@react-navigation/native";
import Contato from "../api/Contato";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "react-native-elements";
import { useState } from "react";
import AlertPersonalizado from "../components/alertPersonalizado";


const EditarContato = (props) => {

    const contato = props.route.params
    console.log(contato)
    let nome = props.route.params.nome;
    let numero = props.route.params.numero;
    let email = props.route.params.email;
    let id = props.route.params.id;
    const [alertVisivel, setAlertVisivel] = useState(false);

    const exlucirContato = () => {
        Contato.apagarContato(contato.id)
        .then(response =>{
            if(response.status === 200){
                setAlertVisivel(true)    
                setTimeout(() => {
                    listaContato();
                }, 1500);

            }
        }).catch(error =>{
            console.warn(error)
        })
        
    }
    const hideAlert = () => {
        setAlertVisivel(false);
      };

      const navigation = useNavigation();

      const listaContato = () => {
        navigation.navigate('Lista');
    }

    return (

        <View style={{flex: 1, flexDirection: 'column', alignItems:"center", justifyContent:"center", backgroundColor:"#E6DDD7"}} >
            <Text  style={styles.label}>nome</Text>
  <TextInput value={nome}  style={{backgroundColor:'#FFF', width: 250, height:40}}></TextInput>

  <Text  style={styles.label}>email</Text>
  <TextInput value={email}   style={{backgroundColor:'#FFF', width: 250, height:40}}></TextInput>

  <Text  style={styles.label}>telefone</Text>
  <TextInput value={numero}  style={{backgroundColor:'#FFF', width: 250, height:40}}></TextInput>
  
  <Button  buttonStyle={{backgroundColor:"#3C6EF4", width: 250 }}  title="Salvar" style={{marginTop:"15px"}}  /> 
  <Button onPress={exlucirContato} buttonStyle={{backgroundColor:"#FF0000", width: 250 }}  title="Excluir" style={{marginTop:"15px"}}  /> 
  <AlertPersonalizado 
     visible={alertVisivel}
     title="Alteração realiazada"
     message="Usuário excluído com sucesso!"
     onClose={hideAlert}/>
            
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
