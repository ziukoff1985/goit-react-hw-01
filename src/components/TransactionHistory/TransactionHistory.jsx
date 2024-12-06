import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <div className={styles.centerContainer}>
      <table className={styles.table}>
        <thead className={styles.head}>
          <tr className={styles.tableRowHead}>
            <th className={styles.tableHeader}>Type</th>
            <th className={styles.tableHeader}>Amount</th>
            <th className={styles.tableHeader}>Currency</th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {items.map((item) => (
            <tr key={item.id} className={styles.tableRow}>
              <td className={styles.tableData}>{item.type}</td>
              <td className={styles.tableData}>{item.amount}</td>
              <td className={styles.tableData}>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
