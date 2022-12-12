import React, { Component } from "react";
import Header from "./header";
import Table from "./table";
import Sidebar from "./sidebar";
import Pagination from "./pagination";
class Master extends Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <Header {...this.props}></Header>
          <div className="row p-3 mb-2 bg-dark text-white">
            <div className="col-1">
              <Sidebar {...this.props}></Sidebar>
            </div>
            <div className="col-11">
              <Table {...this.props}></Table>
            </div>
          </div>
          <Pagination {...this.props}></Pagination>
        </React.Fragment>
      </div>
    );
  }
}

export default Master;
