import React from 'react';


const PreviewCollection = ({title, items}) => {
    return (
        <div className="_collection-preview">
            <h1 className="_title">{title.toUpperCase()}</h1>
            <div className="_preview">
                {
                    items.map(({id,name})=>(
                        <div key={id}>
                            {name}
                        </div>
                    ))

                }

            </div>
        </div>

    );
}

export default PreviewCollection;