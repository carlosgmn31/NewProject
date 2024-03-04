import { Button} from "react-native-elements";
import { View } from "react-native-web";
import { InputComponent } from "../components/InputComponent";

const Cadastro = ({navigation}) => {
    return (
  <View style={{flex: 1, flexDirection: 'column', alignItems:"center", justifyContent:"center", backgroundColor:"#E6DDD7"}}>
  <InputComponent  label='nome'></InputComponent>
  <InputComponent  label='e-mail'></InputComponent>
  <InputComponent label='telefone'></InputComponent>
  <Button  buttonStyle={{backgroundColor:"#3C6EF4", width: 250 }}  title="Salvar" style={{marginTop:"5px"}}  onPress={()=>navigation.navigate('Lista')} /> 
  </View>
  );
};

export default Cadastro;