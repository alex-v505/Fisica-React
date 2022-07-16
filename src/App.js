import React, {useState} from "react";
import "./App.css";
import { Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Tabla from "./filasTabla.js" 

function App() {
  const [nro1, setNro1] = useState();
  const [nro2, setNro2] = useState();
  const [r, setR] = useState(0);
  const [cont, setContador]=useState(1);

  const calcular = () => {
    setR(parseFloat(nro1) / parseFloat(nro2));
  };
  const [filasDatos, setFilasDatos] = useState([]);

  const agregarFilTabla = () => {
    setContador(cont+1);
    const ingresoFil = {
      num :cont,
      distancia: nro1,
      tiempo: nro2,
      velocidad: parseFloat(nro1) / parseFloat(nro2)
    }
    setFilasDatos([...filasDatos, ingresoFil])

  }
  const eliminarFilTabla = (index) => {
      const filas = [...filasDatos];
      filas.splice(index, cont);
      setContador(1);
      setNro1('');
      setNro2('');
      setR('');
      setFilasDatos(filas);
  }

  return (
    <div className="App">
      <Accordion >
        <Accordion.Item eventKey="0" >
          <Accordion.Header >CALCULADORA</Accordion.Header>
          <Accordion.Body >
            <div class="row g-3 text-white row-cols-2">
              <div class="col-5">
                <label class="text-xl font-extrabold text-white">
                  Ingrese la distancia(m)
                </label>
                <input
                  class="form-control"
                  placeholder="distancia"
                  aria-label="numero1"
                  type="number"
                  value={nro1}
                  onChange={(e) => setNro1(e.target.value)}
                />
                <label class="text-xl font-extrabold text-white">
                  Ingrese el tiempo(s)
                </label>
                <input
                  class="form-control"
                  placeholder="tiempo"
                  aria-label="numero2"
                  type="number"
                  value={nro2}
                  onChange={(e) => setNro2(e.target.value)}
                />
                <div class="row g-3 ">
                  <div class="col">
                    <button
                      type="button"
                      class="btn btn-light btn-lg m-2"
                      style={{ fontSize: "1.5rem", fontFamily: "sans-serif",backgroundColor:"white" }}
                      onClick={() => {
                        calcular();
                        agregarFilTabla();
                      }}>
                      Calcular
                    </button>
                  </div>
                  <div class="col">
                    <button
                      type="button"
                      class="btn btn-lg m-2"
                      style={{ fontSize: "1.5rem", fontFamily: "sans-serif",backgroundColor:"white" }}
                      onClick={() => {
                        
                        eliminarFilTabla();
                      }}>
                      Eliminar
                    </button>
                  </div>
                </div>
                <h3 class="text-2xl font-extrabold text-white">RESPUESTA: </h3>
                <h4 class="text-xl font-extrabold text-white" value="" readonly>
                  {r} m/s
                </h4>
              </div>
              <div class="col col-lg-7">
                <table class="table table-light" id="mru">
                  <thead>
                    <tr>
                      <th id="numTabla" scope="col">
                        #
                      </th>
                      <th id="numDistancia" scope="col">
                        Distancia(m)
                      </th>
                      <th id="numTiempo" scope="col">
                        Tiempo(s)
                      </th>
                      <th id="numVelocidad" scope="col">
                        Velocidad(m/s)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                  <Tabla filasDatos={filasDatos} eliminarFilTabla={eliminarFilTabla}  />
                  </tbody>
                </table>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default App;
