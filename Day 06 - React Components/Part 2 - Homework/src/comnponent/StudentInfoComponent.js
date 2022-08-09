import React, { Component } from 'react'

class StudentTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      students: [
        { id: 1, name: 'Trần Xuân Tùng', age: '20', address: 'Hà Nội' },
      ],
    }
  }

  renderTableData() {
    return this.state.students.map((student, index) => {
      const { id, name, age, address } = student
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{age}</td>
          <td>{address}</td>
        </tr>
      )
    })
  }

  renderTableHeader() {
    const header = Object.keys(this.state.students[0])
    return header.map((key, index) => <th key={index}>{key.toUpperCase()}</th>)
  }

  render() {
    return (
      <table>
        <tbody>
          <tr>{this.renderTableHeader()}</tr>
          {this.renderTableData()}
        </tbody>
      </table>
    )
  }
}

export default StudentTable;

