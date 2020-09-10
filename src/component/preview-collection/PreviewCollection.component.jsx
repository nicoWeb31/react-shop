import React from 'react';
import CollectionItems from "../collection-item/CollectionItems.component";
import "./PreviewCollection.style.scss"


const PreviewCollection = ({title, items}) => {
    return (
        <div className="_collection-preview">
            <h1 className="_title">{title.toUpperCase()}</h1>
            <div className="_preview">
                {
                    items
                    .filter((item, idx)=>idx<4)
                    .map((item)=>(
                        <CollectionItems key={item.id} item={item}/>
                    ))

                }

            </div>
        </div>

    );
}

export default PreviewCollection;