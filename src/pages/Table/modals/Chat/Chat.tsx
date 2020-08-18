import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import ChatItem from './ChatItem';
import { Typography, TextField } from '../../../../components';
import { Container } from '../../../../layout';

import { useForm } from 'react-hook-form';

const ChatBase = styled.div`
    align-self: flex-end;
    .chat-wrapper {
        max-width: 1200px;
        width: 100%;
        display: flex;
        padding: 70px;
        flex-direction: column;
    }

    .input-wrapper-chat {
        display: flex;
        width: 100%;
    }
    .input-message-chat {
        width: 100%;
        max-width: 878px;
        background: transparent;
        outline: none;
        padding: 0;
        border: none;
        font-size: ${({ theme }) => theme.typography.body1?.fontSize};
        font-family: ${({ theme }) => theme.typography.fontFamily};
        font-weight: ${({ theme }) => theme.typography.body1?.fontWeight};
        letter-spacing: ${({ theme }) => theme.typography.body1?.letterSpacing};
        color: ${({ theme }) => theme.palette.initial};
    }
    .line {
        height: inherit;
        width: 8px;
        background-color: ${({ theme }) => theme.palette.initial};
        margin: 0 12px 0 12px;
        border-radius: 1px;
    }
    .chat-player-name {
        width: 150px;
        display: block;
        text-align: right;
        align-self: center;
        margin-right: 8px;
    }
    .rect-divider {
        margin: 6px 0 0 162px;
        width: 8px;
        height: 8px;
        border-radius: 1px;
        background-color: ${({ theme }) => theme.palette.secondary};
    }
    .rect-divider-top {
        margin: 6px 0 6px 162px;
    }
    .overflow-container {
        max-height: 75vh;
        max-width: 1060px;
        width: 100%;
        overflow-y: auto;
        margin-bottom: 44px;
        &::-webkit-scrollbar {
            display: none;
        }
    }
`;

interface ChatProps {
    name: string;
}

const Chat = ({ name }) => {
    const { register, handleSubmit, setValue } = useForm();

    const [data, setData] = useState([
        {
            message:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id gravida elit. Nam a ante velit. Donec pellentesque rutrum sem, malesuada sodales ligula blandit vitae. Phasellus hendrerit nulla id ornare accumsan. Nullam a erat aliquet, pharetra risus eget, volutpat mi. Curabitur ut lacus velit. Fusce volutpat odio eu blandit iaculis. In pulvinar, eros vitae hendrerit gravida, tellus turpis suscipit nibh, sed aliquam erat libero eget sem. Maecenas',
            user: { username: 'glenn', color: 'yellow' },
        },
        {
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            user: { username: 'glenn', color: 'yellow' },
        },
        {
            message:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id gravida elit. Nam a ante velit. Donec pellentesque rutrum sem, malesuada sodales ligula blandit vitae. Phasellus hendrerit nulla id ornare accumsan. Nullam a erat aliquet, pharetra risus eget, volutpat mi. ',
            user: { username: 'jacob', color: 'success' },
        },
        {
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            user: { username: 'jacob', color: 'success' },
        },
        {
            message: 'Lorem ipsum dolor sit',
            user: { username: 'john', color: 'error' },
        },
        {
            message:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id gravida elit. Nam a ante velit. Donec pellentesque rutrum sem, malesuada sodales ligula blandit vitae. Phasellus hendrerit nulla id ornare accumsan. Nullam a erat aliquet, pharetra risus eget, volutp',
            user: { username: 'john', color: 'error' },
        },
        {
            message:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id gravida elit. Nam a ante velit. Donec pellentesque rutrum sem, malesuada sodales ligula blandit vitae. Phasellus hendrerit nulla id ornare accumsan. Nullam a erat aliquet, pharetra risus eget, volutp',
            user: { username: 'john', color: 'error' },
        },
        {
            message:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id gravida elit. Nam a ante velit. Donec pellentesque rutrum sem, malesuada sodales ligula blandit vitae. Phasellus hendrerit nulla id ornare accumsan. Nullam a erat aliquet, pharetra risus eget, volutp',
            user: { username: 'john', color: 'error' },
        },
        {
            message:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id gravida elit. Nam a ante velit. Donec pellentesque rutrum sem, malesuada sodales ligula blandit vitae. Phasellus hendrerit nulla id ornare accumsan. Nullam a erat aliquet, pharetra risus eget, volutp',
            user: { username: 'john', color: 'error' },
        },
        {
            message:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id gravida elit. Nam a ante velit. Donec pellentesque rutrum sem, malesuada sodales ligula blandit vitae. Phasellus hendrerit nulla id ornare accumsan. Nullam a erat aliquet, pharetra risus eget, volutp',
            user: { username: 'john', color: 'error' },
        },
        {
            message:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id gravida elit. Nam a ante velit. Donec pellentesque rutrum sem, malesuada sodales ligula blandit vitae. Phasellus hendrerit nulla id ornare accumsan. Nullam a erat aliquet, pharetra risus eget, volutp',
            user: { username: 'john', color: 'error' },
        },
        {
            message:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id gravida elit. Nam a ante velit. Donec pellentesque rutrum sem, malesuada sodales ligula blandit vitae. Phasellus hendrerit nulla id ornare accumsan. Nullam a erat aliquet, pharetra risus eget, volutp',
            user: { username: 'john', color: 'error' },
        },
        {
            message:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id gravida elit. Nam a ante velit. Donec pellentesque rutrum sem, malesuada sodales ligula blandit vitae. Phasellus hendrerit nulla id ornare accumsan. Nullam a erat aliquet, pharetra risus eget, volutp',
            user: { username: 'john', color: 'error' },
        },
        {
            message:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id gravida elit. Nam a ante velit. Donec pellentesque rutrum sem, malesuada sodales ligula blandit vitae. Phasellus hendrerit nulla id ornare accumsan. Nullam a erat aliquet, pharetra risus eget, volutp',
            user: { username: 'john', color: 'error' },
        },
        {
            message:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id gravida elit. Nam a ante velit. Donec pellentesque rutrum sem, malesuada sodales ligula blandit vitae. Phasellus hendrerit nulla id ornare accumsan. Nullam a erat aliquet, pharetra risus eget, volutp',
            user: { username: 'john', color: 'error' },
        },
        {
            message:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id gravida elit. Nam a ante velit. Donec pellentesque rutrum sem, malesuada sodales ligula blandit vitae. Phasellus hendrerit nulla id ornare accumsan. Nullam a erat aliquet, pharetra risus eget, volutp',
            user: { username: 'john', color: 'error' },
        },
        {
            message:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id gravida elit. Nam a ante velit. Donec pellentesque rutrum sem, malesuada sodales ligula blandit vitae. Phasellus hendrerit nulla id ornare accumsan. Nullam a erat aliquet, pharetra risus eget, volutp',
            user: { username: 'john', color: 'error' },
        },
        {
            message:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id gravida elit. Nam a ante velit. Donec pellentesque rutrum sem, malesuada sodales ligula blandit vitae. Phasellus hendrerit nulla id ornare accumsan. Nullam a erat aliquet, pharetra risus eget, volutp',
            user: { username: 'john', color: 'error' },
        },
        {
            message:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id gravida elit. Nam a ante velit. Donec pellentesque rutrum sem, malesuada sodales ligula blandit vitae. Phasellus hendrerit nulla id ornare accumsan. Nullam a erat aliquet, pharetra risus eget, volutp',
            user: { username: 'john', color: 'error' },
        },
        {
            message:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id gravida elit. Nam a ante velit. Donec pellentesque rutrum sem, malesuada sodales ligula blandit vitae. Phasellus hendrerit nulla id ornare accumsan. Nullam a erat aliquet, pharetra risus eget, volutp',
            user: { username: 'john', color: 'error' },
        },
        {
            message:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id gravida elit. Nam a ante velit. Donec pellentesque rutrum sem, malesuada sodales ligula blandit vitae. Phasellus hendrerit nulla id ornare accumsan. Nullam a erat aliquet, pharetra risus eget, volutp',
            user: { username: 'john', color: 'error' },
        },
        {
            message:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id gravida elit. Nam a ante velit. Donec pellentesque rutrum sem, malesuada sodales ligula blandit vitae. Phasellus hendrerit nulla id ornare accumsan. Nullam a erat aliquet, pharetra risus eget, volutp',
            user: { username: 'john', color: 'error' },
        },
        {
            message:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id gravida elit. Nam a ante velit. Donec pellentesque rutrum sem, malesuada sodales ligula blandit vitae. Phasellus hendrerit nulla id ornare accumsan. Nullam a erat aliquet, pharetra risus eget, volutp',
            user: { username: 'john', color: 'error' },
        },
        {
            message:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id gravida elit. Nam a ante velit. Donec pellentesque rutrum sem, malesuada sodales ligula blandit vitae. Phasellus hendrerit nulla id ornare accumsan. Nullam a erat aliquet, pharetra risus eget, volutp',
            user: { username: 'john', color: 'error' },
        },
    ]);

    const onSubmit = (newData) => {
        setData((prev) => [...prev, { message: newData.message, user: { username: name, color: 'yellow' } }]);
        setValue('message', '');
    };

    const messagesEndRef = useRef<any | null>(null);

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollOnStart = () => {
        messagesEndRef.current.scrollIntoView(false);
    };

    useEffect(scrollOnStart, []);

    useEffect(scrollToBottom, [data]);

    const onEnterPress = (e) => {
        if (e.keyCode == 13 && e.shiftKey == false) {
            e.preventDefault();
            handleSubmit(onSubmit)();
        }
    };

    return (
        <Container type="modal">
            <ChatBase>
                <div className="chat-wrapper">
                    <div className="overflow-container">
                        <div className="rect-divider rect-divider-top" />
                        <div className="messages-wrapper">
                            {data.map((el, id) => (
                                <ChatItem
                                    key={`${el.message}${el.user.username}`}
                                    color={el.user.color}
                                    message={el.message}
                                    name={
                                        id !== 0
                                            ? el.user.username === data[id - 1].user.username
                                                ? ''
                                                : el.user.username
                                            : el.user.username
                                    }
                                />
                            ))}
                        </div>
                        <div className="rect-divider" ref={messagesEndRef} />
                    </div>
                    <form className="input-wrapper-chat" onSubmit={handleSubmit(onSubmit)}>
                        <Typography variant="body1" component="span" className="chat-player-name">
                            {name}
                        </Typography>
                        <TextField
                            onKeyDown={onEnterPress}
                            className="input-message-chat"
                            width="inherit"
                            size="medium"
                            autoresize
                            rightLine={false}
                            variant="textarea"
                            name="message"
                            register={(ref) =>
                                register(ref, {
                                    required: true,
                                    maxLength: 1000,
                                })
                            }
                        />
                    </form>
                </div>
            </ChatBase>
        </Container>
    );
};

export default Chat;