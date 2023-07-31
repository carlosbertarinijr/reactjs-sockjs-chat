import React, { useEffect, useState } from 'react'
import "./cardMessages.css"
type MsgWS = {
    name: string;
    message: string;

}

type ChatMessages = {
    name: string;
    messages: MsgWS[];
    typedMessage: string;
    setTypedMessage: React.Dispatch<React.SetStateAction<string>>;
    sendMessage: (body: MsgWS) => void;
}


function CardMessages(props: ChatMessages) {
    const [messagesLocal, setMessagesLocal] = useState<MsgWS[]>([]);
    useEffect(() => {
        if (!props.messages) return;
        let jobs = props.messages;
        setMessagesLocal(jobs);
    }, [props.messages])
    return (
        <div className='Messages-container'>

            <div className='card-chat'>

                <div className="chat-messages">
                    {messagesLocal.map((msg, index) => (
                        <div
                            key={index}
                            className='messages-container-message'
                        >
                            {props.name === msg.name ? (
                                <>
                                    <span className='name-user'>
                                        {`${msg.name}: `}
                                    </span>
                                    <span>{`${msg.message}`}</span>
                                </>
                            ) : (
                                <>
                                    <span className='name-user-deffault'>
                                        {`${msg.name}: `}
                                    </span>
                                    <span>{`${msg.message}`}</span>
                                </>
                            )
                            }
                        </div>


                    ))}

                </div>



            </div>
            <div className="align-center">

                <div className="align-center">
                    <br />


                    <input id="outlined-basic" placeholder="Enter Message to Send"
                        onChange={(event) => {
                            props.setTypedMessage(event.target.value);
                        }} />


                    <button
                        onClick={() => props.sendMessage({ name: props.name, message: props.typedMessage })}>Send</button>

                </div>

            </div>
        </div>
    )
}

export default CardMessages