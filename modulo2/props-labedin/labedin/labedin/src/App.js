import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import styled from 'styled-components';



function App() {
  const DoisCardsPequenos = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 20px 10px;
  margin-bottom: 10px;
  height: 100px;
  width: 500px;
  `;
  
  const Icones = styled.img`
  width: 50px;
  height: 50px;
  `;

  const ContainerBigCard = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 20px 10px;
  margin-bottom: 10px;
  height: 200px;
  `;


  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <ContainerBigCard>
          <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4E03AQFInu78h7AcYg/profile-displayphoto-shrink_200_200/0/1632867776592?e=1647475200&v=beta&t=p3FnTDBPBeUo2JISO3nosuUw9klTBL_JE1DvPMz_nhk"
          nome="Duda" 
          descricao="Oi, eu me chamo Duda. Sou aluna da turma Vaughan da Labenu. "
        />
        </ContainerBigCard>
        
        <ImagemButton 

          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <DoisCardsPequenos>
        <CardPequeno
        
        nome="E-mail:" 
        descricao="eduardafpires1@gmail.com"
        />
        </DoisCardsPequenos>
        
      <DoisCardsPequenos>
        <CardPequeno
        // tirei as imagens pq tavam com o tamanho enorme e eu nao consegui de jeito nenhum diminuir//
        nome="Endereço:"
        descricao="Olinda, Brasil"
        />
        </DoisCardsPequenos>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <ContainerBigCard>
          <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4E0BAQHbIWxIySFBIw/company-logo_200_200/0/1628184831580?e=2159024400&v=beta&t=8BtPuuv5_qIyInz77OmuvbBPxRnG1SfSqTs1RR6VO3M" 
          nome="Instituto Exatta" 
          descricao="Analista de pesquisas de opinião pública" 
        />
        </ContainerBigCard>
        
        <ContainerBigCard>
          <CardGrande 
          imagem="https://upload.wikimedia.org/wikipedia/commons/a/ae/Logo-ufpe-2-2.jpg" 
          nome="UFPE" 
          descricao="Monitora acadêmica" 
        />
        </ContainerBigCard>
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
