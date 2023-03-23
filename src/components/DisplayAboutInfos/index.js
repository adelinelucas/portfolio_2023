import React, { useState } from 'react';

const DisplayAboutInfos = ({info}) => {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <aside>
            <h4>{info.titre}</h4>
            <button onClick={()=>{setShowInfo(true)}}>Détail</button>
            {showInfo &&
                <div>
                    {info?.description && <p> {info.description}</p>}
                    {info?.expl && <p> {info.expl}</p>}
                </div>
            }
        </aside>
    );
};

export default DisplayAboutInfos;