// @ts-ignore
import preloader from '../../../assets/images/preloader.svg';
import React from "react";

type PropsType = {}

const Preloader: React.FC<PropsType> = (props) => {
    return <div style={ {backgroundColor: 'white' } }>
        <img src={preloader} alt={'loading'}/>
    </div>
}

export default Preloader;