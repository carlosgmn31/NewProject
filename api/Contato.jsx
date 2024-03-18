import axios from "axios";


const instance = axios.create({
    baseURL: 'http://localhost:3000'
})


const Contato = {
    getContato: () =>{
       return instance.get('/contact');
    },

    criarContato: (contato) =>{
       return instance.post("/contact", contato);
    }, 

    atualizarContato: (contato) => {
        return instance.put("/contact/" + contato.id, contato);
    },

    getContatoPorId: (idContato) =>{
        return instance.get("/contact/" + idContato);
    },

    apagarContato: (idContato) =>{
        return instance.delete("/contact/" + idContato)
    }


}

export default Contato;