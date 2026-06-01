import React, { useEffect, useRef, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Space, Input, Tag, Tooltip, theme } from 'antd';
export const TagInput = (props) => {
    const { token } = theme.useToken();
    const [tags, setTags] = useState(props.values || []);
    const [inputVisible, setInputVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [editInputIndex, setEditInputIndex] = useState(-1);
    const [editInputValue, setEditInputValue] = useState('');
    const inputRef = useRef(null);
    const editInputRef = useRef(null);
    useEffect(() => {
        if (inputVisible) {
        inputRef.current?.focus();
        }
    }, [inputVisible]);
    useEffect(() => {
        editInputRef.current?.focus();
    }, [editInputValue]);
    const handleClose = (removedTag) => {
        const newTags = tags.filter((tag) => tag !== removedTag);
        console.log(newTags);
        setTags(newTags);
        props.updateList(newTags);
    };
    const showInput = () => {
        setInputVisible(true);
    };
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleInputConfirm = () => {
        if (inputValue && tags.indexOf(inputValue) === -1) {
            const newTags = [...tags, inputValue] 
            setTags(newTags);
            props.updateList(newTags);
        }
        setInputVisible(false);
        setInputValue('');
    };
    const handleEditInputChange = (e) => {
        setEditInputValue(e.target.value);
    };
    const handleEditInputConfirm = () => {
        const newTags = [...tags];
        newTags[editInputIndex] = editInputValue;
        setTags(newTags);
        setEditInputIndex(-1);
        setEditInputValue('');
    };
    const tagInputStyle = {
        //width: 64,
        height: 26,
        marginInlineEnd: 8,
        verticalAlign: 'top',
    };
    const tagPlusStyle = {
        height: 22,
        background: token.colorBgContainer,
        borderStyle: 'dashed',
    };
    return (
        <div className="tags-container">
            <Space size={[0, 8]} wrap>
                <Space size={[0, 8]} wrap>
                    {tags.map((tag, index) => {
                    if (editInputIndex === index) {
                        return (
                        <Input
                            ref={editInputRef}
                            key={tag}
                            size="middle"
                            style={tagInputStyle}
                            value={editInputValue}
                            onChange={handleEditInputChange}
                            onBlur={handleEditInputConfirm}
                            onPressEnter={handleEditInputConfirm}
                        />
                        );
                    }
                    const isLongTag = tag.length > 20;
                    const tagElem = (
                        <Tag
                        key={tag}
                        closable={true}
                        style={{
                            userSelect: 'none',
                        }}
                        onClose={() => handleClose(tag)}
                        >
                        <span
                            onDoubleClick={(e) => {
                            if (index !== 0) {
                                setEditInputIndex(index);
                                setEditInputValue(tag);
                                e.preventDefault();
                            }
                            }}
                        >
                            {tag}
                        </span>
                        </Tag>
                    );
                    return isLongTag ? (
                        <Tooltip title={tag} key={tag}>
                        {tagElem}
                        </Tooltip>
                    ) : (
                        tagElem
                    );
                    })}
                    {inputVisible ? (
                    <Input
                        ref={inputRef}
                        type="text"
                        size="middle"
                        style={tagInputStyle}
                        value={inputValue}
                        onChange={handleInputChange}
                        onBlur={handleInputConfirm}
                        onPressEnter={handleInputConfirm}
                    />
                    ) : (
                    <Tag style={tagPlusStyle} onClick={showInput}>
                        <PlusOutlined /> {props.newItemTitle || 'New Tag'}
                    </Tag>
                    )}
                </Space>
            </Space>
        </div>
    );
};