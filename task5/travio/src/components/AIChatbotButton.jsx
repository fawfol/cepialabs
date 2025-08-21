import React from 'react';
import './AIChatbotButton.css';
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";

const AIChatbotButton = () => {
    return (
        <button className="chatbot-fab">
            <IoChatbubbleEllipsesSharp size={30} />
        </button>
    )
}

export default AIChatbotButton;
