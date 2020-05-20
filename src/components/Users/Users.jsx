import React from 'react';
import * as axios from 'axios';

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.setState({
                    isLoaded: true,
                    items: response.data.items
                });
            });
    }

    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <h1> Error {error.message}</h1>
        }
        if (!isLoaded) {
            return <h1>Loading....</h1>
        }
         return (
              <div>
                  {items.map(user =>
                     <div key={user.id}>
                        <span>
                            <div>
                                <img src={user.photos.small != null ? user.photos.small : 'gdfgdfgd'}/>
                            </div>
                            <div>
                                {user.followed
                                    ? <button onClick={() => {
                                        user.unfollow(user.id)
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        user.follow(user.id)
                                    }}>Follow</button>}

                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{user.name}</div>
                                <div>{user.status}</div>
                            </span>
                            {/*<span>*/}
                            {/*    <div>{user.location.country}</div>*/}
                            {/*    <div>{user.location.city}</div>*/}
                            {/*</span>*/}
                        </span>
                     </div>
                 )}
             </div>
         )
    }
}

export default Users;
