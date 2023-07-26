import user from '../user-db/user.json';
import data from '../user-db/data.json';
import friends from '../user-db/friends.json';
import transactions from '../user-db/transactions.json';


import { Profile } from './Profile/Profile'
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';


export const App = () => {
  return (
    <>
      <Profile {...user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions}/>
    </>
  );
};
