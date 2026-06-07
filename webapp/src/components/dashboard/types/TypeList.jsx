import React, { lazy, useState, useEffect } from 'react';
import { Alert, Button, Col, Row, Splitter, Tooltip } from 'antd';
import { InfoCircleFilled } from '@ant-design/icons';

import { Container } from '@src/components/ui/Container';
import { ControlPalette } from './ControlPalette';
import { CustomSortableList } from '@src/components/ui/CustomSortableList';

const renderFieldItem = (field) => (
    <div className="field-item" key={field.name}>
        <div className="name">{field.name}</div>
        <div className="type">{field.type}</div>
    </div>
);

const TypeList = ({fields})=> {
    const [types, setTypes] = useState([]);
    const [selectedType, setSelectedType] = useState(null);
    const [fieldList, setFieldList] = useState(fields || [{name: 'Field 1', type: 'text'}, {name: 'Field 2', type: 'number'}]);
    const addNewType = () => {
        const newType = {
            id: `type_${Date.now()}`,
            new: true,
            name: `New Type ${types.length + 1}`,
        };
        setTypes([...types, newType]);
        setSelectedType(newType);
    };
    const deleteType = (typeId) => {
        setTypes(types.filter(type => type.id !== typeId));
        if (selectedType && selectedType.id === typeId) {
            setSelectedType(null);
        }
    };
    const saveChanges = () => {
        setTypes(types.map(type => type.id === typeId ? { ...type, ...updatedData } : type));
    };
    return (<Container p="md" h100> 
                <Row className="h-100">
                    <Col offset={2} span={20}>
                         <Splitter className="h-100">
                            <Splitter.Panel 
                                className="p-20"
                                defaultSize="50%" min="20%" max="70%">
                                <h2>Data Types</h2>
                                <div className="d-flex justify-content-between">
                                <Button type="primary" onClick={addNewType}>Add Type</Button>
                                <Button variant="dashed" color="primary" onClick={saveChanges}>Save changes</Button>
                                </div>
                                <div className="mt-20">
                                    {types.length == 0 ? 
                                        <Alert type="info" showIcon title="No types created yet. Click the button above to create your first type."/> : 
                                        types.map(type=>(<div 
                                                    key={type.id} 
                                                    className={`type-item ${selectedType && selectedType.id === type.id ? 'selected' : ''}`} 
                                                    onClick={() => setSelectedType(type)}>
                                            <div className="name">{type.name}</div>
                                        </div>))
                                    }
                                </div>
                            </Splitter.Panel>
                            <Splitter.Panel className="p-20">
                                {selectedType ? (
                                    <div className="d-flex flex-direction-column h-100">
                                        <div>
                                            <h2>{selectedType.name}</h2>
                                            <h3>Type fields</h3>
                                        </div>
                                        <div className="d-flex flex-direction-row flex-stretch gap-10">
                                            <div className="flex-stretch">
                                                <CustomSortableList 
                                                    listItems={fieldList} 
                                                    renderItem={renderFieldItem} 
                                                    layout="vertical"
                                                />
                                            </div>
                                            <ControlPalette />
                                        </div>
                                    </div>
                                ) : (
                                    <Alert 
                                        title="Select a type to view or edit its details." 
                                        type="info"
                                        showIcon />
                                )}
                            </Splitter.Panel>
                        </Splitter>
                    </Col>
                </Row>
            </Container>);

};

export default TypeList;