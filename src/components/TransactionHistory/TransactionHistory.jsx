// Імпортуємо модуль стилів для компонента TransactionHistory.
import styles from './TransactionHistory.module.css';

// Компонент отримує пропс items — масив транзакцій (з файла transactions.json)
const TransactionHistory = ({ items }) => {
  return (
    // Відмальовуємо HTML-таблицю
    <div className={styles.centerContainer}>
      <table className={styles.table}>
        {/* Заголовок таблиці з трьома колонками (Type, Amount, Currency) */}
        <thead className={styles.head}>
          <tr className={styles.tableRowHead}>
            <th className={styles.tableHeader}>Type</th>
            <th className={styles.tableHeader}>Amount</th>
            <th className={styles.tableHeader}>Currency</th>
          </tr>
        </thead>
        {/* Тіло таблиці, заповнюється з масиву items (пропс) */}
        <tbody className={styles.tableBody}>
          {items.map(item => (
            // Ітерація (метод map) по масиву items. Для кожного елемента створюємо рядок таблиці.
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

// Експортуємо компонент для використання в інших частинах застосунку.
export default TransactionHistory;
