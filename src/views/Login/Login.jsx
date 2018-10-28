import React from "react";
import { Card, CardHeader, CardBody, CardTitle, CardFooter, Row, Col } from "reactstrap";

import CardAuthor from "components/CardElements/CardAuthor.jsx";
import FormInputs from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import damirBosnjak from "assets/img/damir-bosnjak.jpg";
import mike from "assets/img/mike.jpg";
import ayoOgunseinde2 from "assets/img/faces/ayo-ogunseinde-2.jpg";
import joeGardner2 from "assets/img/faces/joe-gardner-2.jpg";
import clemOnojeghuo2 from "assets/img/faces/clem-onojeghuo-2.jpg";
class Login extends React.Component {
  
 render() {
    return (
      <div className="content">
        <Row>
          <Col md={8} xs={12}>
            <Card className="card-user">
              <CardHeader>
                <CardTitle>Cadastro</CardTitle>
              </CardHeader>
              <CardBody>
                <form>
                  <FormInputs
                    ncols={["col-md-12",]}
                    proprieties={[
                      {
                        label: "Usuário:",
                        inputProps: {
                          type: "text",
                          placeholder: "Informe o título da vaga...."
                        }
                      }
                    ]}
                  />
                  <FormInputs
                    ncols={["col-md-6 pr-1", "col-md-6 pl-1"]}
                    proprieties={[
                      {
                        label: "Senha",
                        inputProps: {
                          type: "date",
                          placeholder: "Ex..14/07/2018",
                        }
                      },
                      {
                        label: "Data de Término:",
                        inputProps: {
                          type: "date",
                          placeholder: "Ex..14/07/2019",
                        }
                      }
                    ]}
                  />
                 
                  
                  <FormInputs
                    ncols={["col-md-12"]}
                    proprieties={[
                      {
                        label: "Descrição:",
                        inputProps: {
                          type: "textarea",
                          placeholder: "Informe a descrição da vaga....."
                        }
                      }
                    ]}
                  />
                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button color="primary" round>Cadastrar</Button>
                    </div>
                  </Row>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Login;