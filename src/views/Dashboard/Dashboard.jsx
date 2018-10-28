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
import axios from "axios";
import moment from "moment";

import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart
} from "variables/charts.jsx";
import icons from "variables/icons.jsx";
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vagas: []
    };

    this.createTds = this.createTds.bind(this);
  }

  componentDidMount() {
    axios.get("http://10.0.8.72:3001/vagas").then(response => {
      this.setState({
        vagas: response.data
      });
    });
  }

  handleDelete(id) {
    axios.delete("http://10.0.8.72:3001/vagas").then(response => {
      console.log(response);
    });
  }

  createTds() {
    const { vagas } = this.state;
    return vagas.map((el, key) => {
      return (
        <tr key={key}>
          <td>{el.titulo}</td>
          <td>{moment(el.dtinicio).format("DD/MM/YYYY")}</td>
          <td>{moment(el.dtfim).format("DD/MM/YYYY")}</td>
          <Link to={`/candidatos/${el.id}`}>
            <Button color="primary" size="sm">
              <i className="fa fa-eye" />
            </Button>
          </Link>
          <Button color="danger" size="sm" onClick={this.handleDelete(el.id)}>
            <i className="fa fa-trash" />
          </Button>
        </tr>
      );
    });
  }
  render() {
    console.log(this.state);
    return (
      <div className="content">
        <Row>
          <Col xs={12}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Vagas Cadastradas</CardTitle>
                <Link to="/create" className="nav-link btn-magnify">
                  <Button color="primary" className="float-right">
                    <i className="fa fa-plus" />
                  </Button>
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

export default Dashboard;
