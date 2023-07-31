


// import  WebSocket  from 'ws';
// var Stomp = require('@stomp/stompjs');
// Object.assign(global,  WebSocket );



// export const stompJsClient = new Stomp.Client({
//   brokerURL: 'ws://192.168.68.202:8080/gs-guide-websocket',
 
//   onWebSocketError: (event: any) => {
//     console.error('Error with WebSocket:', event)
//   },
//   onStompError: (event: any) => {
//     console.error('Error with WebSocket:', event)
//   }
// });


// var connect_callback = function() {
//   // called back after the client is connected and authenticated to the STOMP server
// };

// var error_callback = function(error: any) {
//   // display the error's message header:
//   alert(error.headers.message);
// };

// // const connect = () => {

// //   stompJsClient.activate();
// // }

// // const disconnect = () => {
// //   console.error('Disconnect');
// //   stompJsClient.deactivate();
  
// // }

// // const sendMsg = (from: string, content: string) => {
// //     stompJsClient.publish({
// //       destination: "/app/sendMsg",
// //       body: JSON.stringify({ "from": from, "content": content })
// //     });
// //   };

// //===================

// // const url = "ws://localhost:8080/gs-guide-websocket";
// // export const stompClient = new Client({ brokerURL: url });


// // stompClient.onConnect = (frame) => {
// //   console.log('Connected: ' + frame);
// //   stompClient.subscribe('/topic/greetings', (greeting) => {
// //     console.log(greeting.body);
// //   });
// // };

// // stompClient.onWebSocketError = (event: Event) => {
// //   console.error('Error with WebSocket:', event);
// // };

// // stompClient.onStompError = (frame) => {
// //   console.error('Broker reported error: ' + frame.headers['message']);
// //   console.error('Additional details: ' + frame.body);
// // };

// // export const connect = () => {
// //   stompClient.activate();
// // };

// // export const disconnect = () => {
// //   stompClient.deactivate();
// //   console.log("Disconnected");
// // };

// // export const sendMsg = (from: string, content: string) => {
// //   stompClient.publish({
// //     destination: "/app/sendMsg",
// //     body: JSON.stringify({ "from": from, "content": content })
// //   });
// // };

// // export const connectAndSend = () => {
// //   connect();
// //   setTimeout(() => {
// //     sendMsg('John', 'Hello');
// //   }, 1000);
// // };