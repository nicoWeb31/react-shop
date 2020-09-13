import React from 'react';
import MenuItem from "../menu-item/MenuItem.component";
import {connect} from "react-redux";
import {directorySelect} from "../../redux/directory/directory.selector";
import {createStructuredSelector} from 'reselect'

import './directory.style.scss';


const Directory = ({sections}) => {

    return (

        <div className="_directory-menu">
            {
                sections.map(({title,imageUrl,id,size, linkUrl})=>(
                    <MenuItem title={title} img={imageUrl} key={id} size={size} link={linkUrl}/>
                ))
            }


        </div>

    );
}

const mapStateToProps = createStructuredSelector({
    sections : directorySelect
})

export default connect(mapStateToProps)(Directory);