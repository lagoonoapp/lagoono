import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';

export const Loader = (props)=>{
    const loaderClassName = props.nocontainer ? '': (props.small ? 'loader-container-small': 
        (props.inline ? 'loader-container-inline': 'loader-container'));
    return (props.show == null || (props.show != null && props.show) ? <div className={loaderClassName}>
        <LoadingOutlined spin/>
    </div>: null);
}