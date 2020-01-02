import React, { useState, useEffect, Fragment } from 'react';
import Formulario from './componentes/Formulario';
import axios from 'axios';
import Cancion from './componentes/Cancion';
import Informacion from './componentes/Informacion';

function App()
{

  const [artista, agregarArtista] = useState('');
  const [letra, agregarLetra] = useState([]);
  const [info, agregarInfo] = useState({});

  //METODO PARA CONSULTAR LA API DE LETRAS DE CANCIONES
  const consultarAPILetra = async busqueda =>
  {
    const {artista, cancion} = busqueda;
    const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
    
    const resultado = await axios(url);

    //ALMACENAR EL ARTISTA BUSCADO
    agregarArtista(artista);
    
    //ALMACENAMOS LA LETRA EN EL STATE:
    agregarLetra(resultado.data.lyrics);
  }

  //METODO PARA CONSULTAR API DE LA BANDA
  const consultarAPIInfo = async () =>
  {
    if(artista)
    {
      const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;
      const resultado = await axios(url);    
      agregarInfo(resultado.data.artists[0]);
      // console.log(info);
    }
  }

  useEffect(
    () => 
    {
      consultarAPIInfo();
    }, [artista])


  return (
            <Fragment>
                <Formulario
                consultarAPILetra={consultarAPILetra}
                />

                <div className="container mt-5">
                      <div className="row">
                        <div className="col-md-6">
                             <Informacion
                                  info={info}
                             />
                        </div>
                        <div className="col-md-6">
                              <Cancion
                                  letra={letra}
                              />
                        </div>
                      </div>
                </div>
            </Fragment>
  
  
  
    )
}



export default App;