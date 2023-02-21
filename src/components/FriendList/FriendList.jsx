import FriendsCard from "./FriendsCard/FriendsCard"
export default function FriendList({data}) {
    // const {avatar, name, isOnline, id} = props
    // console.log(Array.isArray(friends));
    console.log(data);
    return <ul className="friend-list">
        {data.map(e => {
            <FriendsCard
                key={e.id}
                data={e } />
        })}
       
    
     </ul>
}