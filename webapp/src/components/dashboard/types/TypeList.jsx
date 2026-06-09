import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Alert, Button, Col, Form, Input, Row, Splitter, Tabs } from 'antd';

import {
  DndContext,
  PointerSensor,
  KeyboardSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { sortableKeyboardCoordinates, arrayMove } from '@dnd-kit/sortable';

import { ArticleIcon, TextboxIcon, WarningIcon } from '@phosphor-icons/react';
import axios from 'axios';

import { Loader } from '@src/components/ui/Loader';
import { Container } from '@src/components/ui/Container';
import { controls, ControlPalette } from './ControlPalette';
import { FieldsSortableList } from '@src/components/ui/FieldsSortableList';


const renderFieldItem = (field) => (
    <div className="field-item" key={field.name}>
        <div className="name">{field.name}</div>
        <div className="type">{field.type}</div>
    </div>
);

const TypeList = ({fields})=> {
    const [types, setTypes] = useState([]);
    const notify = useSelector((state) => state.notify);
    const [selectedType, setSelectedType] = useState(null);
    const dropZonePrefix = 'type-field-list';
    const [newTypeAdding, setNewTypeAdding] = useState(false);
    const [listLoading, setListLoading] = useState(false);
    const [itemLoading, setItemLoading] = useState(false);
    const [itemSaving, setItemSaving] = useState(false);

    const [activeDragItem, setActiveDragItem] = useState(null);
    const [overItemId, setOverItemId] = useState(null);

    const [fieldList, setFieldList] = useState(fields || [
        { id: 'field_1', name: 'Field 1', type: 'text' },
        { id: 'field_2', name: 'Field 2', type: 'number' },
    ]);

    useEffect(() => {
        loadItemTypeList();
    }, []);

    const clickItemType = (typeInstance) => {
        loadItem(typeInstance.id);
    }

    const loadItem = async(itemId)=> {
        try {
            setItemLoading(true);
            let response = await axios.get(`/api/app/item/instance/item_type/${itemId}`);
            setItemLoading(false);
            if (response.data.result){
                setSelectedType(response.data.item);
            } else {
                notify.show('error', 
                    response.data.error || 'Some error occured during this request... please try again.', 
                    'errorGeneralSettingsData', 10);
            }
        } catch(err) {
            console.log(err)
            notify.show('error', 
                    'Some error occured during this request... please try again.', 
                    'errorGeneralSettingsData', 10);
        }
    };

    const upsertItemType = async(itemTypeInstance)=> {
        try {
            if (itemTypeInstance.id){
                setItemSaving(true);
            } else {
                setNewTypeAdding(true);
            }
            let response = await axios.post('/api/app/item/list/item_type', itemTypeInstance);
            if (itemTypeInstance.id){
                setItemSaving(false);
            } else {
                setNewTypeAdding(false);
            }
            if (response.data.result){
                if (!itemTypeInstance.id){
                    itemTypeInstance.id = response.data.item.id;
                    setSelectedType(itemTypeInstance);
                    setTypes([...types, itemTypeInstance]);
                }
            } else {
                notify.show('error', 
                    response.data.error || 'Some error occured during this request... please try again.', 
                    'errorGeneralSettingsData', 10);
            }
        } catch(err) {
            console.log(err)
            notify.show('error', 
                    'Some error occured during this request... please try again.', 
                    'errorGeneralSettingsData', 10);
        }
    };

    const loadItemTypeList = async()=> {
        try {
            setListLoading(true);
            let response = await axios.get('/api/app/item/list/item_type');
            setListLoading(false);
            if (response.data.result){
                setTypes(response.data.items);
            } else {
                notify.show('error', 
                    response.data.error || 'Some error occured during this request... please try again.', 
                    'errorGeneralSettingsData', 10);
            }
        } catch(err) {
            console.log(err)
            notify.show('error', 
                    'Some error occured during this request... please try again.', 
                    'errorGeneralSettingsData', 10);
        }
    };

    const addNewType = () => {
        const newType = {
            singular_name: `New Type ${types.length + 1}`,
            plural_name: '',
            description: '',
            fields: []
        };
        upsertItemType(newType);
    };
    const deleteType = (typeId) => {
        setTypes(types.filter(type => type.id !== typeId));
        if (selectedType && selectedType.id === typeId) {
            setSelectedType(null);
        }
    };
    const saveChanges = (typeInstance) => {
        //setTypes(types.map(type => type.id === typeInstance.id ? { ...type, ...typeInstance } : type));
        upsertItemType(typeInstance);
    };

    const handleTypePropertiesChange = (changedValues) => {
        if (!selectedType) {
            return;
        }

        const updatedType = { ...selectedType, ...changedValues };
        setSelectedType(updatedType);
        setTypes((prevTypes) => prevTypes.map((type) => (
            type.id === updatedType.id ? { ...type, ...changedValues } : type
        )));
    };

    const handleDragStart = ({ active }) => {
        setActiveDragItem(active);
    };

    const handleDragOver = ({ over }) => {
        setOverItemId(over ? over.id : null);
    };

    const sensors = useSensors(
        useSensor(PointerSensor, {
        activationConstraint: { distance: 8 },
        }),
        useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const handleDragEnd = ({ active, over }) => {
        setActiveDragItem(null);
        setOverItemId(null);
        if (!over) return;

        // Case 1: Dropping a new control from the palette into the list
        if (active.data.current?.source === 'control-palette') {
        const controlType = active.data.current.control.type;
        const controlLabel = active.data.current.control.label;
        
        const newItem = {
            id: `field-${Date.now()}`, // Ensure unique string ID
            type: controlType,
            title: controlLabel,
        };

        if (over.id === 'sortable-list-bottom-zone' || over.id === 'sortable-list-container') {
            setFieldList([...fieldList, newItem]);
            return;
        }

        // If over a specific sortable item, insert it at that index
        const overIndex = fieldList.findIndex((item) => item.id === over.id);
        
        if (overIndex !== -1) {
            const newList = [...fieldList];
            newList.splice(overIndex, 0, newItem);
            setFieldList(newList);
        } else {
            // Appends to end if dropped on container but not on an item
            setFieldList([...fieldList, newItem]);
        }
        return;
        }

        // Case 2: Internal list reordering
        if (active.id !== over.id) {
            const oldIndex = fieldList.findIndex((item) => item.id === active.id);
            const newIndex = fieldList.findIndex((item) => item.id === over.id);
            setFieldList(arrayMove(fieldList, oldIndex, newIndex));
        }
  };
    const typeTabs = [
        {
            key: 'info',
            label: 'Type info',
            icon: <ArticleIcon size={24} />,
            children: (
                                            <Form 
                                                layout="vertical"
                                                key={selectedType?.id}
                                                initialValues={selectedType}
                                                onValuesChange={handleTypePropertiesChange}>
                                                <Row gutter={16}>
                                                    <Col span={12}>
                                                        <Form.Item label="Singular Name" name="singular_name">
                                                            <Input />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col span={12}>
                                                        <Form.Item label="Plural Name" name="plural_name">
                                                            <Input />
                                                        </Form.Item>
                                                    </Col>
                                                </Row>
                                                <Form.Item label="Description" name="description">
                                                    <Input.TextArea rows={3} />
                                                </Form.Item>
                                            </Form>
            )
        },
        {
            key: 'fields',
            label: 'Fields',
            icon: <TextboxIcon />,
            children: (
                                            <div className="d-flex flex-direction-row flex-stretch gap-10 h-100">
                                                {selectedType ? (
                                                    <DndContext 
                                                        sensors={sensors} 
                                                        onDragStart={handleDragStart} 
                                                        onDragOver={handleDragOver}  
                                                        onDragEnd={handleDragEnd}
                                                    >
                                                        <div className='flex-stretch h-100'>
                                                            <FieldsSortableList
                                                                listItems={fieldList}
                                                                renderItem={renderFieldItem}
                                                                layout='vertical'
                                                                updateItemList={setFieldList}
                                                                overItemId={overItemId}
                                                                isActivePaletteItem={activeDragItem?.data.current?.source === 'control-palette'}
                                                            />
                                                        </div>
                                                        <ControlPalette />
                                                    </DndContext>
                                                ) : null}
                                            </div>
            )
        },
        {
            key: 'dangerous',
            label: 'Dangerous',
            icon: <WarningIcon />,
            children: (
                <div>
                    <h3>Dangerous actions</h3>
                    <Button type="primary" danger onClick={deleteType}>
                        Delete Type
                    </Button>
                </div>
            )
        }
    ];

    return (<Container p="md" h100> 
                <Row className="h-100">
                    <Col offset={2} span={20}>
                         <Splitter className="h-100">
                            <Splitter.Panel 
                                className="p-20"
                                defaultSize="50%" min="20%" max="70%">
                                <h2>Data Types</h2>
                                <div className="d-flex justify-content-between">
                                <Button type="primary" onClick={addNewType} loading={newTypeAdding}>Add Type</Button>
                                </div>
                                <div className="mt-20">
                                    {listLoading ? 
                                        <Loader /> :
                                        (types.length == 0 ? 
                                            <Alert type="info" showIcon title="No types created yet. Click the button above to create your first type."/> : 
                                            types.map(type=>(<div 
                                                        key={type.id} 
                                                        className={`type-item ${selectedType && selectedType.id === type.id ? 'selected' : ''}`} 
                                                        onClick={() => clickItemType(type)}>
                                                <div className="name">{type.singular_name}</div>
                                            </div>)))
                                    }
                                </div>
                            </Splitter.Panel>
                            <Splitter.Panel className="p-20">
                                {itemLoading ? 
                                    <Loader /> : 
                                        (selectedType ? (
                                            <div className="d-flex flex-direction-column h-100">
                                                <div className="d-flex justify-content-between">
                                                    <h2 className="m-0">{selectedType.singular_name}</h2>
                                                    <Button type="primary" 
                                                        loading={itemSaving}
                                                        onClick={() => saveChanges(selectedType)}>Save type</Button>
                                                </div>
                                                <Tabs className="flex-stretch" items={typeTabs} />
                                            </div>
                                        ) : (
                                            <Alert 
                                                title="Select a type to view or edit its details." 
                                                type="info"
                                                showIcon />
                                        ))
                                    }
                                
                            </Splitter.Panel>
                        </Splitter>
                    </Col>
                </Row>
            </Container>);

};

export default TypeList;