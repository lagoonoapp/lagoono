import React, { lazy, useState, useEffect } from 'react';
import { Tooltip } from 'antd';

import { CursorTextIcon, NumberSquareEightIcon } from '@phosphor-icons/react';

const controls = [
    { type: 'text', label: 'Text Input', icon: <CursorTextIcon /> },
    { type: 'number', label: 'Number Input', icon: <NumberSquareEightIcon /> },
    //{ type: 'select', label: 'Select Dropdown', icon: <InfoCircleFilled /> },
    //{ type: 'checkbox', label: 'Checkbox', icon: <InfoCircleFilled /> },
];

export const ControlPalette = (props)=> {
    const controlMap = controls.map(control=>(<Tooltip title={control.label} placement="left" key={control.type}>
                        <div className="control-item">
                            {control.icon}
                        </div>
                    </Tooltip>));
    return (<div className="control-palette">
                {controlMap}
            </div>);
}