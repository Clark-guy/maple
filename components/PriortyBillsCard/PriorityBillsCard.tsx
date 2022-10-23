import { Card } from "react-bootstrap"
import Styles from "./PriorityBillsCard.module.css"

type bill = {
  id: string
  billNumber: string
  title: string
}

export const PriorityBillsCard = (props: {
  bills: bill[]
  selectedBillId: string
  session: string
  onClick: (billNumber: string) => void
}) => {
  return (
    <>
      <Card className={Styles.header}>
        <Card.Body
          style={{
            paddingTop: "7px",
            paddingBottom: "0px",
            marginBottom: "0px"
          }}
        >
          <Card.Title className={Styles.billNumber}>Priority Bills</Card.Title>
          <Card.Text className={Styles.billTitle}>
            Session {props.session}
          </Card.Text>
        </Card.Body>
      </Card>
      {props.bills.map((bill, index) => {
        let style = Styles.billSlot
        let tail = false
        if (bill.billNumber === props.selectedBillId) {
          style = Styles.billSelected
        }
        if (index === props.bills.length - 1) {
          style = Styles.billTail
          tail = true
        }
        if (bill.billNumber === props.selectedBillId && tail) {
          style = Styles.tailSelected
        }
        return (
          <Card
            className={style}
            onClick={() => props.onClick(bill.billNumber)}
            key={bill.billNumber}
          >
            <Card.Body style={{ padding: "3px" }}>
              <Card.Title className={Styles.billNumber}>
                {bill.billNumber}
              </Card.Title>
              <Card.Text className={Styles.billTitle}>{bill.title}</Card.Text>
            </Card.Body>
          </Card>
        )
      })}
    </>
  )
}
