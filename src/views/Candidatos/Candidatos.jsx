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
import icons from "variables/icons.jsx"
class Candidatos extends React.Component {
  
  render() {
    console.log()
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
                  <tbody>
                    {tbody.map((prop, key) => {
                      return (
                        <tr key={key}>
                          {prop.data.map((prop, key) => {
                           
                            return <td key={key}>{prop}</td>;
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
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
