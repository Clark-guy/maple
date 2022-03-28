import React from "react"
import { Table } from "react-bootstrap"

const DocumentHistoryActionRows = ({ documentHistoryActions }) => {
  return documentHistoryActions.map((documentHistoryAction, index) => {
    return (
      <tr key={index}>
        <td>{documentHistoryAction.Date.substring(0, 10)}</td>
        <td>{documentHistoryAction.Date.substring(11, 19)}</td>
        <td>{documentHistoryAction.Branch}</td>
        <td>{documentHistoryAction.Action}</td>
      </tr>
    )
  })
}

const BillHistoryTable = ({ documentHistoryActions }) => {
  return (
    <div className="text-center">
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>Branch</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <DocumentHistoryActionRows
            documentHistoryActions={documentHistoryActions}
          />
        </tbody>
      </Table>
    </div>
  )
}

export default BillHistoryTable
