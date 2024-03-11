import { Button} from "react-native-elements";
import { View } from "react-native-web";
import { InputComponent } from "../components/InputComponent";
import { Text, TextInput } from "react-native";

const CadastroUser = ({navigation}) => {
    return (
  <View style={{flex: 1, flexDirection: 'column', alignItems:"center", justifyContent:"center", backgroundColor:"#E6DDD7"}}>
  <Text style={{paddingLeft:10, fontSize: 20, width: 250}}>nome</Text>
  <TextInput style={{backgroundColor:'#FFF', width: 250, height:40}}></TextInput>
  <Text style={{paddingLeft:10, fontSize: 20, width: 250}}>cpf</Text>
  <TextInput style={{backgroundColor:'#FFF', width: 250, height:40}}></TextInput>
  <Text style={{paddingLeft:10, fontSize: 20, width: 250}}>e-mail</Text>
  <TextInput style={{backgroundColor:'#FFF', width: 250, height:40}}></TextInput>
  <Text style={{paddingLeft:10, fontSize: 20, width: 250}}>senha</Text>
  <TextInput style={{backgroundColor:'#FFF', width: 250, height:40}}></TextInput>
  <Button  buttonStyle={{backgroundColor:"#3C6EF4", width: 250 }}  title="Salvar" style={{marginTop:"5px"}}  onPress={()=>navigation.navigate('Lista')} /> 
  </View>
  );
};

export default CadastroUser;