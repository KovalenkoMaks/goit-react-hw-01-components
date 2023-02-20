import PropTypes from 'prop-types';

import Profile from "./Profile/Profile";
import user from '../user';
import Statistics from "./Statistics/Statistics";
import data from '../data';


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      {/* React homework template */}
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics
        title
        stats={data}
      />
    
      
    </div>
  );
};

// Profile.propTypes.shape(user)