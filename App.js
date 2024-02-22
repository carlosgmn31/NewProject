import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';


const Flex = () => {
  return (
<View style={{alignItems:'center'}}>
<Avatar 
size={'large'}
  rounded
  source={{
    uri:
      'https://media.licdn.com/dms/image/D5603AQErPPCW2o7qrw/profile-displayphoto-shrink_200_200/0/1691414128167?e=2147483647&v=beta&t=R6g3MXVN0agZQCt0OYHk8a4wZsPNvIhYb4Io5g0oApU',
  } }
/>

<Input placeholder='E-mail'/>
<Input placeholder="Password" secureTextEntry={true}/>
<Button buttonStyle={{backgroundColor:"green"}} title="Logar" style={{marginTop:"5px"}}/>
<Button buttonStyle={{backgroundColor:"green"}} title="Cadastre-se" style={{marginTop:"5px"} } />
</View>
  );
  };
  
  const styles = StyleSheet.create({
  container: {
  flex: 1,
  padding: 20,
  },
  });
  
  //export default Flex;
  


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