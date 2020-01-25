import React from 'react';

const AvatarList= (props)=>{
return(
<div className="avatarstyle ma4 bg-light-purple dib tc">
        <img src={ `https://joeschmoe.io/api/v1/${props.name}`}  alt="Avatar"/>
        <h3 >{props.name} </h3>
        <p>{props.work}</p>
        </div>
     )
}
export default AvatarList;