import React from 'react';
import './avatar.css'
import 'tachyons'
import AvatarList from './AvatarList';


const Avatar =(props) => {

    const AvatarListarray =[
        {
            id:1,
            name:'ishwr shrestha',
            work:'web developer'
        },
        {
            id:2,
            name:'ishwr ',
            work:'web developer'
        },
        {
            id:3,
            name:'ishwr shrestha',
            work:'web developer'
        },
        {
            id:4,
            name:'ishw shrestha',
            work:'web developer'
        },
    
    ]
    

    const abc=AvatarListarray.map((avatarcard,i)=>{
    return( <AvatarList 
            id={AvatarList[i].name}
            name={AvatarList[i].name}
            work={AvatarList[i].work}
            />)
    }
    )
    
    return(<div>
        <h1 id="world">welcome to avatar wolrd</h1>
        {abc}
          
        <button>subscribe</button>
        </div>

    )
}
export default Avatar;