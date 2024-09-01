### Interview questions 
`How does RabbitMQ handle message acknowledgment, and why is it important?`

Answer: RabbitMQ requires consumers to acknowledge messages after processing. This ensures that messages are not removed from the queue until they have been successfully processed, providing reliability and preventing message loss. If a consumer fails before sending an acknowledgment, RabbitMQ can requeue the message for another consumer to process.


`How would you handle message retries and dead-letter queues in a message broker?`

Answer: Message retries can be handled by requeueing the message after a failure and implementing backoff strategies to avoid overwhelming the system. Dead-letter queues (DLQs) are used to capture messages that cannot be processed after a certain number of retries, allowing for separate handling of these problematic messages.