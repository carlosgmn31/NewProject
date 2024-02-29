import { Avatar, Button } from "react-native-elements";
import { StyleSheet, View } from "react-native-web";
import { InputComponent } from "../components/InputComponent";

const Home = ({navigation}) => {
    return (
  <View style={{flex: 1, flexDirection: 'column', alignItems:"center", justifyContent:"center", backgroundColor:"#E6DDD7"}} >
  <Avatar 
  size={'large'}
    rounded
    source={{
      uri:
        'do-utilizador.png',
    } }
  />

  <InputComponent placeholder='Login' label='Login'></InputComponent>
  <InputComponent placeholder='Senha' label='Senha'></InputComponent>
  <Button  buttonStyle={{backgroundColor:"#3C6EF4", width: 250 }}  title="Logar" style={{marginTop:"5px"}}  onPress={()=>navigation.navigate('Lista')} /> 
  <Button buttonStyle={{backgroundColor:"#F42E26",  width: 250}} title="Cadastre-se" style={{marginTop:"5px"}}  onPress={()=>navigation.navigate('CadastroUser')}  />
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
    