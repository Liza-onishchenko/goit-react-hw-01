import React from "react";
import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.containerTrans}>
      <thead className={styles.thead}>
        <tr className={styles.itemTr}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={styles.listTransaction}>
        {items.map((itemTrans) => (
          <tr key={itemTrans.id}>
            <td>{itemTrans.type}</td>
            <td>{itemTrans.amount}</td>
            <td>{itemTrans.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
