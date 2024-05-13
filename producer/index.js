import { Kafka } from "kafkajs"

const kafka = new Kafka({
  clientId: 'my-app',
  //your kafka container port
  brokers: ['localhost:9092', 'localhost:9092']
})

const producer = kafka.producer()

  
   const run =  async () => {
  
      await producer.connect();
      await producer.send({
        topic: 'test',
        //convert value to a JSON string and send it
        messages: [{ value: JSON.stringify({message: "Hello from prod"}) }],
  
  
      });
      console.log('Message sent successfully')
      i++;
  
    }
    var i = 0
    setInterval(run ,3000);
  