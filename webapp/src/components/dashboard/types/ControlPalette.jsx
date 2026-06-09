import React, {useMemo} from 'react';
import { Tooltip } from 'antd';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

import { CursorTextIcon, NumberSquareEightIcon } from '@phosphor-icons/react';

export const controls = [
    { type: 'text', label: 'Text Input', icon: <CursorTextIcon /> },
    { type: 'number', label: 'Number Input', icon: <NumberSquareEightIcon /> },
    //{ type: 'select', label: 'Select Dropdown', icon: <InfoCircleFilled /> },
    //{ type: 'checkbox', label: 'Checkbox', icon: <InfoCircleFilled /> },
];

const DraggableControl = ({ control }) => {
    /*const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
        id: `palette-control-${control.type}`,
        data: {
            source: 'control-palette',
            control,
        },
    });*/

    const draggableData = useMemo(() => ({
        source: 'control-palette',
        control: {
            type: control.type,
            label: control.label,
            // do not pass icon into dnd-kit data
        },
    }), [control.type, control.label]);

    const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
        id: `palette-control-${control.type}`,
        data: draggableData,
    });

    const style = {
        transform: CSS.Translate.toString(transform),
        opacity: isDragging ? 0.6 : 1,
        cursor: 'grab',
    };

    return (
        <Tooltip title={control.label} placement="left" key={control.type}>
            <div
                ref={setNodeRef}
                style={style}
                className="control-item"
                {...listeners}
                {...attributes}
            >
                {control.icon}
            </div>
        </Tooltip>
    );
};

export const ControlPalette = () => {
    const controlMap = controls.map((control) => (
        <DraggableControl control={control} key={control.type} />
    ));

    return (<div className="control-palette">
                {controlMap}
            </div>);
};