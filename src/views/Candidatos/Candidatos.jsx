import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Table,
  Row,
  Col,
  Button
} from "reactstrap";

import { thead, tbody } from "variables/general2";
import { Link } from "react-router-dom";
import Stats from "components/Stats/Stats.jsx";

import {
  candidatos24HoursPerformanceChart,
  candidatosEmailStatisticsChart,
  candidatosNASDAQChart
} from "variables/charts.jsx";
import icons from "variables/icons.jsx";
import axios from "axios";
class Candidatos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      candidatos: []
    };

    this.createTds = this.createTds.bind(this);
  }

  componentWillMount() {
    const id = this.props.location.pathname.split("/")[2];
    axios
      .get("http://10.0.8.72:3001/candidato/" + id)
      .then(response => {
        this.setState({ candidatos: response.data });
      })
      .catch(err => console.log(err));
  }

  createTds() {
    const { candidatos } = this.state;
    return candidatos.map((el, key) => {
      return (
        <tr key={key}>
          <td>{el.nome}</td>
          <td>{el.telefonecontato}</td>
          <td>{el.email}</td>
        </tr>
      );
    });
  }

  render() {
    // console.log(this.props.location.pathname.split("/")[2]);
    return (
      <div className="content">
        <Row>
          <Col xs={12}>
            <Card>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      {thead.map((prop, key) => {
                        return <th key={key}>{prop}</th>;
                      })}
                    </tr>
                  </thead>
                  <tbody>{this.createTds()}</tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Candidatos;
