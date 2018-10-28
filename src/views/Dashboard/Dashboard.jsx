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

import { thead, tbody } from "variables/general";
import { Link } from "react-router-dom";
import Stats from "components/Stats/Stats.jsx";

import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart
} from "variables/charts.jsx";
import icons from "variables/icons.jsx"
class Dashboard extends React.Component {
  
  render() {
    console.log()
    return (
      <div className="content">
        <Row>
          <Col xs={12}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Vagas Cadastradas</CardTitle>
                <Link to="/create" className="nav-link btn-magnify">
                  <Button color="primary" className="float-right"><i className="fa fa-plus"></i></Button>
                </Link>
                
              </CardHeader>
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
                          <Button color="success" size="sm"><i className="nc-icon nc-ruler-pencil"></i></Button>
                          <Button color="primary" size="sm"><i className="fa fa-eye"></i></Button>
                          <Button color="danger" size="sm"><i className="fa fa-trash"></i></Button>
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

export default Dashboard;
