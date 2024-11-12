import React,{Fragment, useEffect, useState} from "react";
import { Header, Wrapper } from "./styles";
import Card from "../../components/Card";
import Banner from "../../components/Banner";
import Api from "../../services/Api";

const Home = ()=>{

const [imobi, setImobi] = useState([]);
useEffect(()=>{
    Api.get('/listimobi')
    .then((response)=>{
        setImobi(response.data);
    })
    .catch(()=>{
        console.log('Error: Erro no Sistema')
    });
},[])
    
    return(
        <Fragment>
            <Banner/>
            <Header>
                <h2>Find the property of your Dreams</h2>
            </Header>
            <Wrapper>
                {imobi.map(itens => (
                    <Card
                     key={itens.id} 
                     thumb={itens.thumb}
                     tipo={itens.tipo}
                     endereco={itens.endereco}
                     valor={itens.valor}
                     slug={itens.slug}
                     />
                ))}
            </Wrapper>
        </Fragment>
    )
}

export default Home;
