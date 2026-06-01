import React, { lazy, useState, useEffect } from 'react';
import { Tooltip } from 'antd';

import { InfoCircleFilled } from '@ant-design/icons';

export const InfoIcon = (props)=> {
    return <Tooltip placement={props.placement || "right"} 
        onClick={props.onClick}
        title={props.title}><InfoCircleFilled className="info-icon" /></Tooltip>
}