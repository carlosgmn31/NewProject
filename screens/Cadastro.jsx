import { Button} from "react-native-elements";
import { View } from "react-native-web";
import { Input } from "../components/InputComponent";

const Cadastro = () => {
    return (
  <View><Input placeholder='Nome'/>
  <Input placeholder='E-mail'/>
  <Input placeholder="Senha" secureTextEntry={true}/>
  <Button buttonStyle={{backgroundColor:"green"}} title="Cadastrar"  style={{marginTop:"5px"} } />
  </View>
  );
};

export default Cadastro;