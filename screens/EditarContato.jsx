import { useNavigation } from "@react-navigation/native";
import Contato from "../api/Contato";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "react-native-elements";
import { useState } from "react";
import AlertPersonalizado from "../components/alertPersonalizado";


const EditarContato = (props) => {
    let contato = props.route.params
    let nome = props.route.params.nome;
    let numero = props.route.params.numero;
    let email = props.route.params.email;
    let id = props.route.params.id;
    const [ação, setAção] = useState('');
    const [nomeAtt, setNome] = useState(nome);
    const [numeroAtt, setNumeroAtt] = useState(numero);
    const [emailAtt, setEmailAtt] = useState(email);
    console.log(contato)
    const [alertVisivel, setAlertVisivel] = useState(false);

    const alterarcontato = () => {
        

        contatoAtt =  {
            "id": contato.id,
            "nome": nomeAtt,
            "numero": numeroAtt,
            "email":email
        }

        Contato.atualizarContato(contatoAtt)
            .then(response  => {
                if(response.status === 200){
                    setAção(`Contato alterado com sucesso: ${nomeAtt}`)
                    setAlertVisivel(true)    
                    setTimeout(() => {
                        listaContato();
                    }, 1500);
                }
            }).catch(error => {
                console.warn(error)
            })}
    const exlucirContato = () => {
        Contato.apagarContato(contato.id)
        .then(response =>{
            if(response.status === 200){
                setAção(`Contato excluído com sucesso: ${nomeAtt}`)
                setAlertVisivel(true)    
                setTimeout(() => {
                    listaContato();
                }, 2000);

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
  <TextInput value={nomeAtt}   onChangeText={setNome} style={{backgroundColor:'#FFF', width: 250, height:40}}></TextInput>

  <Text  style={styles.label}>email</Text>
  <TextInput value={emailAtt}  onChangeText={setEmailAtt} disabled={true}   style={{backgroundColor:'#FFF', width: 250, height:40}}></TextInput>

  <Text  style={styles.label}>telefone</Text>
  <TextInput value={numeroAtt}  onChangeText={setNumeroAtt}  style={{backgroundColor:'#FFF', width: 250, height:40}}></TextInput>
  
  <Button onPress={alterarcontato} buttonStyle={{backgroundColor:"#3C6EF4", width: 250 }}  title="Salvar" style={{marginTop:"15px"}}  /> 
  <Button onPress={exlucirContato} buttonStyle={{backgroundColor:"#FF0000", width: 250 }}  title="Excluir" style={{marginTop:"15px"}}  /> 
  <AlertPersonalizado 
     visible={alertVisivel}
     title={"Alteração realiazada!"}
     message={ação}
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
