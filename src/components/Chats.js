/* Author: Apurva; submission for richpanel; PLEASE NOTE: Use of ChatEngine ; in axios.get({headers,username and secret will be the same as the one created on chatengine.io; If account not created, please create one*/import React,{ useState, useEffect}from 'react';
import {ChatEngine} from 'react-chat-engine';
import {useHistory} from 'react-router-dom';
import {auth} from './firebases';


import { useAuth } from './contexts/AuthContext';

import axios from 'axios';



const Chats=()=>{
    const history = useHistory();
    const {user} = useAuth();
    console.log('user'+JSON.stringify(user));
    const [loading, setLoading] = useState(true);
    
    const handleLogout=async ()=>{
        await auth.signOut();
        history.push('/');
    }
    const getFile=async(url)=>{
        const response = await fetch(url);
        const data = await response.blob();
        return new File([data], "userPhoto.jpg", {type: 'img/jpeg'})
    }
    useEffect(()=>{
        if(!user){
            history.push('/');
            return;
            
        }
        
        
        axios.get('https://api.chantengine.io/users/me',{
            headers:{
                "projectID": "72703395-16fa-400f-a736-28cba4450489",
                "user-name": user.email,
                "user-secret": user.uid

            }
        }).then(()=>{
            setLoading(false);
        })
        .catch(()=>{
            let formdata = new FormData();
            formdata.append('email',"amit@richpanel.com");
            formdata.append('username', user.email);
            formdata.append('secret', user.uid);

            getFile(user.photoURL)
                .then((avatar)=>{
                    formdata.append('avatar', avatar, avatar.name);

                    axios.post('https://api/chatengine.io/users',
                         formdata,{
                             headers: {"private key": "4378e7fc-afbd-4fbf-b7b7-e5dee563fa67"}}
                        
                    )
                    .then(()=>setLoading(false))
                    .catch((error)=> console.log(error))


                })
        })
        
    }, [user,history]);

    
    
    
    return(
        <div className="chats-page">
            <div className="nav-bar">
                <div classNme="logo-tab">
                    Messenger
                </div>
                <div onClick={handleLogout}className="logout-tab">Logout</div>
            </div>
            <ChatEngine height="calc(100vh-66px)"
                        projectID="72703395-16fa-400f-a736-28cba4450489"
                        userName = {user.email}
                        userSecret= {user.uid}
            />
           
        </div>
    );
}
export default Chats;
