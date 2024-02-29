import { Avatar, Button } from "react-native-elements";
import { StyleSheet, View } from "react-native-web";
import { InputComponent } from "../components/InputComponent";

const Lista = () => {
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
  
  {/* <Input inputContainerStyle={{width:250,alignSelf:"center"}}  placeholder='Login'/>
  <Input inputContainerStyle={{width:250,alignSelf:"center"}}  placeholder="Senha" secureTextEntry={true}/> */}
  <InputComponent placeholder='Login' label='Login'></InputComponent>
  <InputComponent placeholder='Senha' label='Senha'></InputComponent>
  <Button buttonStyle={{backgroundColor:"#3C6EF4", width: 250 }}  title="asdgdagadgvadvga" style={{marginTop:"5px"}}/>
  <Button buttonStyle={{backgroundColor:"#F42E26",  width: 250}} title="Cadagvgasdfafstre-se" style={{marginTop:"5px"} } />
  </View>
    );
    };
    
    const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 20,
    },
    });
    
export default Lista;