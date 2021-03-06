import react, { useState, useEffect } from 'react';
import { Modal, ListGroup, Table } from 'react-bootstrap';
import { HttpAuth } from '../../config/Http';
import { CircularProgress } from '@material-ui/core';
import { Axios } from 'axios';
import ConsultaEncomenda from './ConsultaEncomenda.js';

export default function Encomendas() {

  //MODAL LOGIC
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Carregamento dos pedidos
  const [pedidos, setPedidos] = useState(false);

  useEffect(()=>{
    HttpAuth.get('/encomenda').then( (response)=>{
      if (typeof response !== undefined || typeof response === ''){
        setPedidos(response.data);
        
        setLoading(false);
      }
    });
  },[]);

  return (
    <>
      <ListGroup.Item action onClick={handleShow}>
        Meus pedidos
      </ListGroup.Item>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <h2>
            Encomendas
          </h2>
        </Modal.Header>
        <Modal.Body>
          {
            loading ? 
              <CircularProgress />
                :
              pedidos === "" || pedidos === false ?
                  <>Não há pedidos</>
                :
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <td>
                          Valor
                        </td>
                        <td>
                          Itens
                        </td>
                        <td>
                          Status
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      {pedidos == '' && 
                        <tr>
                          <td colspan='3'>
                            <center>
                              Não há pedidos
                            </center>
                          </td>
                        </tr>
                      }
                      {pedidos.map((pedido)=>(<>
                        {
                          <ConsultaEncomenda 
                            token={pedido.transaction_code}
                          />
                        }
                      </>))}
                    </tbody>
                  </Table>
          }
        </Modal.Body>
      </Modal>
    </>
  );
}