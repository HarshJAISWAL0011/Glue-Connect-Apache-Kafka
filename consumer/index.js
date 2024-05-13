import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092', 'localhost:9092']
})
console.log(`running consumer...`)
const consumer = kafka.consumer({ groupId: 'kafka' })

const run = async () => {
  await consumer.connect()
  await consumer.subscribe({topic: 'test', fromBeginning: true })
  await consumer.run({
    eachMessage: async ({  message }) => {
      console.log("****************** Arrived in Consumer ******************")
      console.log(`${message.value.toString()}`)
      const obj = JSON.parse(message.value);
      console.log("our object",obj);
      //this part to create our user file

   }, })}

   run().catch(console.error);


