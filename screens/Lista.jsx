import { View } from "react-native-web";
import Contato from "../api/Contato";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { Avatar, ListItem } from "react-native-elements";



const Lista = ({navigation}) => {
  const [list, setList] = useState([])
  const editarContato = (contato) => {
        
    navigation.navigate('EditarContato', contato);

}

useEffect(()=>{

  Contato.getContato()
  .then(response => {
      console.log(response.status);
      setList(response.data)
  }).catch(error =>{
      console.warn(error);
  })

 
},[])
const editarContato = (contato) => {
        
  navigation.navigate('EditarContato', contato);

}

    return (
        
  <View style={{flex: 1, flexDirection: 'column', alignItems:"fix", justifyContent:'top', backgroundColor:"#E6DDD7"}} >
 {
                    list.map((l, i) => (
<<<<<<< HEAD
                        <TouchableOpacity key={i} onPress={()=>navigation.navigate(editarContato(l))}>
=======
                        <TouchableOpacity key={i} 
                        
                        //navigate passando informações do contato	
                        onPress={() => editarContato(l)}>
                          {console.log(l)}
>>>>>>> 2ae2e706646168718f00c407e74b22e4132456ef
                            <ListItem bottomDivider>
                            <Avatar 
                                size={'small'}
                                  rounded
                                  source={{
                                    uri:
                                      '../assets/contato.png',
                                  } }
                                />
                               <ListItem.Content>
                                    <ListItem.Title>{l.nome}</ListItem.Title>
                                    <ListItem.Subtitle>{l.numero}</ListItem.Subtitle>
                                </ListItem.Content>
                            </ListItem>
                        </TouchableOpacity>
                    ))
                }
  </View>
    );
    };
    
export default Lista;