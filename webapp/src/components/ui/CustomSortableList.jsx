import React from 'react';
import { Button } from 'antd';
import { DotsSixVerticalIcon, XIcon } from '@phosphor-icons/react';
import {
  SortableContext,
  rectSortingStrategy,
  useSortable,
  sortableKeyboardCoordinates,
  arrayMove,
} from '@dnd-kit/sortable';
import {
  DndContext,
  PointerSensor,
  KeyboardSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
//import './App.css';

const SortableItem = (props) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id: props.id });
    const style = {
        transform: CSS.Transform.toString(transform),
        transition
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
        <div ref={setNodeRef} style={style} className="sortable-item d-flex justify-content-between align-items-top">
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

export const CustomSortableList = ({ listItems, selectItemHandle, data, 
    updateItemList, currentId, renderItem, removeItemHandle, layout,
    containerClassName = 'cards-container sortable' }) => {
    const items = listItems || [];

    const getItemText = (item) => {
        if (item == null) {
            return '';
        }

        if (typeof item === 'string' || typeof item === 'number') {
            return String(item);
        }

        return item.settings?.title || item.title || item.name || item.label || item.text || String(item.id || '');
    };

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 8,
            },
        }),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const handleDragEnd = ({ active, over }) => {
        if (!over) {
            return;
        }

        if (active.id == over.id) {
            return;
        }
        const newAffectedSectionIndex = items.findIndex((it) => it.id === active.id);
        const newMovedSectionIndex = items.findIndex((it) => it.id === over.id);
        const newItems = arrayMove(
            items,
            newAffectedSectionIndex,
            newMovedSectionIndex
        );
        if (updateItemList) {
            updateItemList(newItems);
        }
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
        <div className={containerClassName}>
        <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
            <SortableContext items={items} strategy={rectSortingStrategy}>
            {(items || []).map((item) => (
                <SortableItem 
                    key={item.id} id={item.id}
                    item={item}
                    renderItem={renderItem}
                    text={getItemText(item)}
                    data={data}
                    selectItemHandle={selectItemHandle}
                    onRemove={removeItem}
                    currentId={currentId} />
            ))}
            </SortableContext>
        </DndContext>
        </div>
    );
}