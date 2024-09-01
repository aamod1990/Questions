### Interview Questions 
`What is zero-trust security, and how does it relate to service discovery?`

Answer: Zero-trust security is a model where no service is trusted by default, even if it is inside the network perimeter. In the context of service discovery, this means that every service-to-service communication must be authenticated, authorized, and encrypted. Service discovery plays a key role in identifying and enforcing these security policies.


`How does Eureka, a service discovery tool by Netflix, work?`

Answer: Eureka is a service discovery tool that is part of the Netflix OSS stack. Services register with the Eureka server by providing their metadata, such as hostname, IP address, and port. Clients can query the Eureka server to find instances of a particular service. Eureka also supports self-preservation mode, which helps maintain availability in case of network issues.

