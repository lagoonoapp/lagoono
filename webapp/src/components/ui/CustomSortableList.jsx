import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import { Button } from 'antd';
import { DotsSixVerticalIcon, XIcon } from '@phosphor-icons/react';
import {
  SortableContext,
  rectSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable';
import { useDroppable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
//import './App.css';

const SortableItem = (props) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id: props.id });
    const itemRef = useRef(null);

    const setRefs = useCallback((node) => {
        itemRef.current = node;
        setNodeRef(node);
    }, [setNodeRef]);

    useEffect(() => {
        if (!itemRef.current) {
            return;
        }

        itemRef.current.style.transform = CSS.Transform.toString(transform);
        itemRef.current.style.transition = transition || '';
    }, [transform, transition]);

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
        <div ref={setRefs} className="sortable-item d-flex justify-content-between align-items-top">
            <div className="d-flex align-items-center gap-5 flex-grow">
                <div
                    className="drag-handle d-flex align-items-center cursor-grab"
                    title="Drag to reorder"
                    {...attributes}
                    {...listeners}
                >
                    <DotsSixVerticalIcon weight="bold" />
                </div>
                <div className="flex-grow">{renderedItem}</div>
            </div>
            <div className="d-flex gap-5 justify-content-between">
                <Button
                    className="icon-button"
                    title="Remove"
                    onClick={removeItem}
                    onPointerDown={(e) => e.stopPropagation()}
                    icon={<XIcon weight="bold" />}
                />
            </div>
        </div>
    );
};

const DropZone = React.memo(({ id }) => {
    const { setNodeRef, isOver } = useDroppable({ id });

    return (
        <div
            ref={setNodeRef}
            className={`sortable-drop-zone ${isOver ? 'sortable-drop-zone-over' : ''}`}
        />
    );
});

export const CustomSortableList = (props) => {
    const {
        listItems, selectItemHandle, data,
        updateItemList, currentId, renderItem, removeItemHandle, layout,
        dropZonePrefix = 'sortable-list',
        containerClassName = 'cards-container sortable'
    } = props;

    const items = useMemo(() => listItems || [], [listItems]);

    const startZoneId = useMemo(() => `${dropZonePrefix}-start`, [dropZonePrefix]);

    const zoneIds = useMemo(() =>
        items.map((item) => `${dropZonePrefix}-after-${item.id}`),
        [items, dropZonePrefix]
    );

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
    const resolvedClassName = layout === 'vertical'
        ? `${containerClassName} vertical`
        : containerClassName;
    return (
        <div className={resolvedClassName}>
            <DropZone id={startZoneId} />
            <SortableContext items={items} strategy={rectSortingStrategy}>
                {items.map((item, index) => (
                    <React.Fragment key={item.id}>
                        <SortableItem
                            id={item.id}
                            item={item}
                            renderItem={renderItem}
                            text={getItemText(item)}
                            data={data}
                            selectItemHandle={selectItemHandle}
                            onRemove={removeItem}
                            currentId={currentId}
                        />
                        <DropZone id={zoneIds[index]} />
                    </React.Fragment>
                ))}
            </SortableContext>
        </div>
    );
};