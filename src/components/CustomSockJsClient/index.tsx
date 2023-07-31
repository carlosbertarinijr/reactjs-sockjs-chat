import React from 'react';
import SockJsClient from 'react-stomp';
import { MsgWS } from '../../core/types/types';

type SockJsClientProps = {
    url: string;
    topics: string[];
    onConnect: (ev: any) => void;
    onDisconnect: () => void;
    onMessage: (msg: MsgWS) => void;
    showMessage: (msg: MsgWS) => void
    refClient: (client: any) => void;
}

function CustomSockJsClient(props: SockJsClientProps) {

    return (
        <>
            <SockJsClient
                url={props.url}
                topics={props.topics}
                onConnect={(ev: any) => props.onConnect(ev)}
                onDisconnect={() => props.onDisconnect()}
                onMessage={(msg: MsgWS) => props.showMessage(msg)}
                ref={(client: any) => props.refClient(client)}
            />
        </>
    )
}

export default CustomSockJsClient
