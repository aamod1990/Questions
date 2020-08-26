WebRTC for bigneeer
https://www.webrtc-experiment.com/docs/webrtc-for-newbies.html

So there are three kinds of concrete servers
1) Signalling Server (SIP(Session Initiation Protocol),XMPP (Extensible messaging and presence protocal), WebSocket,Socket.io,XHR(XMLHttpRequest),etc)

2) ICE Server (STUN,TURN)
    a) A STUN(Session Traversal Utilities for NAT(Network Address Translation)) server is used to get an external network address.
    b) TURN (Traversal Using Relays around NAT) servers are used to relay traffic if direct (peer to peer) connection fails.
    also video for stun & turn (https://webrtcglossary.com/turn/)

3) Media Server (Asterisk,etc)

first 2 are mandatory for each application 

how to handle load balance 
https://www.frozenmountain.com/developers/blog/archive/how-to-successfully-scale-your-webrtc-application/


how to create turn server in AWS
https://blog.knoldus.com/configure-turn-server-for-webrtc-on-amazon-ec2/


messaging protocol (such as SIP (Session Initiation Protocol ) or XMPP(Extensible messaging and presence protocal))

two-way communication channel (such as WebSocket or XMLHttpRequest)

s