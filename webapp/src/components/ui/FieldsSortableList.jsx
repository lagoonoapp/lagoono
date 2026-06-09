import React from 'react';
import { Button } from 'antd';
import { DotsSixVerticalIcon, XIcon } from '@phosphor-icons/react';
import { SortableContext, rectSortingStrategy, useSortable } from '@dnd-kit/sortable';
import { useDroppable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

const SortableItem = (props) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id: props.id });
    const style = {
        transform: CSS.Translate.toString(transform),
        transition,
        width: '100%',
        boxSizing: 'border-box'
    };

    const removeItem = (e) => {
        e.stopPropagation();
        e.preventDefault();
        if (props.onRemove) {
            props.onRemove(props.id, props.item);
        }
    };

    const renderedItem = props.renderItem ?
        props.renderItem(props.item) :
        <span>{props.text}</span>;

    return (
        <div ref={setNodeRef} style={style} className='sortable-item d-flex justify-content-between align-items-top'>
            <div className='d-flex align-items-center gap-5 flex-grow'>
                <div
                    className='drag-handle d-flex align-items-center cursor-grab'
                    title='Drag to reorder'
                    {...attributes}
                    {...listeners}
                >
                    <DotsSixVerticalIcon weight='bold' />
                </div>
                <div className='flex-grow'>{renderedItem}</div>
            </div>
            <div className='d-flex gap-5 justify-content-between'>
                <Button
                    className='icon-button'
                    title='Remove'
                    onClick={removeItem}
                    onPointerDown={(e) => e.stopPropagation()}
                    icon={<XIcon weight='bold' />}
                />
            </div>
        </div>
    );
};

export const FieldsSortableList = ({ listItems, selectItemHandle, data, 
    updateItemList, currentId, renderItem, removeItemHandle, layout,
    overItemId, isActivePaletteItem,
    containerClassName = 'cards-container sortable' }) => {
    const items = listItems || [];

    const { setNodeRef } = useDroppable({
        id: items.length > 0 ? 'sortable-list-bottom-zone' : 'sortable-list-container',
    });

    const getItemText = (item) => {
        if (item == null) {
            return '';
        }

        if (typeof item === 'string' || typeof item === 'number') {
            return String(item);
        }

        return item.settings?.title || item.title || item.name || item.label || item.text || String(item.id || '');
    };

    const removeItem = (itemId, item) => {
        if (removeItemHandle) {
            removeItemHandle(itemId, item, items);
            return;
        }

        const newItems = items.filter((it) => it.id !== itemId);

        if (updateItemList) {
            updateItemList(newItems);
        }
    };

    if (layout == 'vertical') {
        containerClassName += ' vertical';
    }

    return (
        <div ref={setNodeRef} className={containerClassName}>
            <SortableContext items={items} strategy={rectSortingStrategy}>
{items.map((item) => (
    <React.Fragment key={item.id}>
        {isActivePaletteItem && overItemId === item.id && (
            <div className='drag-placeholder-line'  />
        )}
        <SortableItem 
            id={item.id}
            item={item}
            renderItem={renderItem}
            text={getItemText(item)}
            data={data}
            selectItemHandle={selectItemHandle}
            onRemove={removeItem}
            currentId={currentId} />
    </React.Fragment>
))}
{isActivePaletteItem && (overItemId === 'sortable-list-bottom-zone' || overItemId === 'sortable-list-container') && (
    <div className='drag-placeholder-line' />
)}
</SortableContext>
        </div>
    );
};