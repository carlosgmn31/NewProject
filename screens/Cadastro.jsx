import { Button} from "react-native-elements";
import { View } from "react-native-web";
import { Input } from "../components/InputComponent";

const Cadastro = () => {
    return (
  <View style={{flex: 1, flexDirection: 'column', alignItems:"center", justifyContent:"center", backgroundColor:"#E6DDD7"}}><Input placeholder='Nome'/>
  <InputComponent label='nome'></InputComponent>
  <InputComponent label='cpf'></InputComponent>
  <InputComponent label='email'></InputComponent>
  <InputComponent label='senha'></InputComponent>
  <Button buttonStyle={{backgroundColor:"green"}} title="Cadastrar"  style={{marginTop:"5px"} } />
  </View>
  );
};

export default Cadastro;