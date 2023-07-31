import React, { useEffect, useState } from 'react';
import SockJsClient from 'react-stomp';
import './App.css';
import UserName from './components/UserName';
import CardMessages from './components/CardMessages';

type MsgWS = {
  name: string;
  message: string;
}

function App() {

  const [messages, setMessages] = useState<MsgWS[]>([]);
  const [typedMessage, setTypedMessage] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [clientRef, setClientRef] = useState<any>();
  const [topics, setTopics] = useState<string[]>([])

  const onConnected = (ev: any) => {
    console.log("connected", ev);
    // sendMessage({ name: "QuickTalck Chat", message: `Bem Vindo - [ ${name} ]` });
    const topicsLocal = ['/topic/user'];
    setTopics(topicsLocal)
  }

  const sendMessage = (body: MsgWS) => {
    console.log("sendMsg")
    clientRef.sendMessage('/app/user-all', JSON.stringify({
      name: body.name,
      message: body.message
    }));
  }

  const defineClientRef = (client: any) => {
    setClientRef(client)
  }

  useEffect(() => {
    if (!name) return;
    console.log(name)
  }, [name])

  const showMessage = (msg: MsgWS) => {
    let jobs = [...messages];
    jobs.push(msg);
    setMessages(jobs);
    console.log(messages);
  }

  const onDisconnect = () => {
    console.log("Disconnected");
    setName("");
    setMessages([]);
    setClientRef({});
  }

  function handleSockJsClient(): React.ReactNode {
    return <SockJsClient

      url='http://localhost:8080/websocket-chat/'
      topics={topics}
      onConnect={onConnected}
      onDisconnect={onDisconnect}
      onMessage={showMessage}
      ref={defineClientRef} />;
  }

  return (
    <div className="App">
      <header className="App-header">
        {name ?
          (
            <div className="">
              Usuário : <span className="title1">{name}</span>
            </div>
          )
          :
          <span>
            Bem-vindo ao bate-papo rápido

          </span>
        }
        <button onClick={() => clientRef.disconnect()} disabled={!clientRef || !name}>Sair</button>
      </header>

      <div className='App-content'>

        {!name && <UserName setName={setName} />}



        {name && handleSockJsClient()}


        <CardMessages
          sendMessage={sendMessage}
          typedMessage={typedMessage}
          setTypedMessage={setTypedMessage}
          messages={messages}
          name={name}
        />

      </div>
    </div>
  );


}

export default App;
