import React from 'react';
import ConversationSearch from '../conversation/Conversation-Search';
import ConversationList from '../conversation/Conversation-List';
import NewConversation from '../conversation/New-Conversation';
import ChatTitle from '../chat-title/Chat-Title';
import MessageList from '../message/Message-List';
import ChatForm from '../chat-form/Chat-Form';
import { conversations } from '../../data/conversations'


import './Chat-Shell.css';


function ChatSell() {
  return (
    <div id="chat-container">
        <ConversationSearch />
        <ConversationList conversations={conversations}/>
        <NewConversation />
        <ChatTitle />
        <MessageList />
        <ChatForm />
    </div>
  );
}

export default ChatSell;