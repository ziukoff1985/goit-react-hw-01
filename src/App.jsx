// Імпортуємо JSON-файли і Компоненти
import userData from './userData.json';
import Profile from '../src/components/Profile/Profile';
import friends from './friends.json';
import FriendList from '../src/components/FriendList/FriendList';
import transactions from './transactions.json';
import TransactionHistory from '../src/components/TransactionHistory/TransactionHistory';

// App - головний компонент додатка.
const App = () => {
  return (
    <>
      {/* Ренедеримо компонент Profile і передаємо дані користувача як пропси (можна передати як {...userData})*/}
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      {/* Передаємо список друзів як пропс friends у компонент FriendList */}
      <FriendList friends={friends} />
      {/* Передаємо історію транзакцій як пропс items у компонент TransactionHistory */}
      <TransactionHistory items={transactions} />
    </>
  );
};

// Експортуємо компонент App для використання в інших файлах.
export default App;
