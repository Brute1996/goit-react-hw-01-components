import user from './user.json'
import data from './data.json'
import friends from './friends.json'
import transactions from './transactions.json'
import { Profile, FriendList, Statistics, TransactionHistory } from './index'

const App = () => {
  return (
    <div >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        title="Upload stats" 
        stats={data}
      />
      <Statistics
        stats={data}
      />
      <FriendList
        friends={friends}
      />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;