```bash
npm install kafkajs
´´´






docker ps
docker exec -it 3ea95e708ac2 /bin/bash

docker exec -it kafka /bin/bash

netcat commands, comprobar que los puertos estan abiertos
nc -zv localhost 22181
nc -zv localhost 29092



kafka-topics --list --bootstrap-server localhost:29092

kafka-consumer-groups --list --bootstrap-server localhost:29092

>> docker pull apache/kafka

Quick start
Start a Kafka broker:
>> docker run -d --name broker apache/kafka:latest

Open a shell in the broker container:
>> docker exec --workdir /opt/kafka/bin/ -it broker sh

A topic is a logical grouping of events in Kafka. From inside the container, create a topic called test-topic:
$>>  ./kafka-topics.sh --bootstrap-server localhost:9092 --create --topic test-topic

Write two string events into the test-topic topic using the console producer that ships with Kafka:
$>>  ./kafka-console-producer.sh --bootstrap-server localhost:9092 --topic test-topic

This command will wait for input at a > prompt. Enter hello, press Enter, then world, and press Enter again. Enter Ctrl+C to exit the console producer.
Now read the events in the test-topic topic from the beginning of the log:
$>>  ./kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic test-topic --from-beginning

You will see the two strings that you previously produced:
hello
world

The consumer will continue to run until you exit out of it by entering Ctrl+C.
When you are finished, stop and remove the container by running the following command on your host machine:
docker rm -f broker
Actividad 1: Similar un chat room
En Docker Terminal, crear un nuevo topic: chat-room

$>>  ./kafka-topics.sh --bootstrap-server localhost:9092 --create --topic chat-room

Producir:
En el mismo terminal, empezar a mandar mensajes al topic:
$>> ./kafka-console-producer.sh --bootstrap-server localhost:9092 --topic chat-room

Consumir: 
En otro terminal como lo de Windows, conectar primero:
>> docker exec --workdir /opt/kafka/bin/ -it kafka-broker sh

y ahora escuchar los mensajes:
$>> ./kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic chat-room --from-beginning
(puedes quitar —-from-beginning)

Actividad 2: 
Gestión de Kafka
$>>  ./kafka-topics.sh --bootstrap-server localhost:9092 --list
$>> ./kafka-topics.sh --bootstrap-server localhost:9092 --describe --topic chat-room
$>> ./kafka-topics.sh --bootstrap-server localhost:9092 --delete --topic chat-room

Explanación: Partitions
Crear un nuevo topic con particiones:
$>>  ./kafka-topics.sh --bootstrap-server localhost:9092 --create --topic partition-topic  --partitions 2 --replication-factor 1

Ahora vamos a mandar mensajes a cada partición. Fijate en el formato de key:value:

$>> ./kafka-console-producer.sh --bootstrap-server localhost:9092 --topic partition-topic --property "parse.key=true" --property "key.separator=:"

Ahora mandar mensajes en formato key:value, por ejemplo:
user1:¿Qué tal estas?
user2:Estoy bien. Y tu?
user1:Bueno, ni fu ni fa
user2:Vale. Hasta luego

$>> ./kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic partition-topic --from-beginning --property print.partition=true
--property print.partition=true
Actividad 4: Partitions en el contexto de un banco

Crear un topic con 2 particiones para gestionar los datos de un banco, según el tipo de transacción: 
Partition 0: para depositar dinero
Partition 1: para sacar dinero

Al consumir, tendremos un cliente que está consumiendo los ingresos y otro que está consumiendo los gastos.Fijate en el –group atributo.

$>>  ./kafka-topics.sh --bootstrap-server localhost:9092 --create --topic partition-topic  --partitions 2 --replication-factor 1

$>> ./kafka-topics.sh --bootstrap-server localhost:9092 --describe --topic banco



$>> ./kafka-console-producer.sh --bootstrap-server localhost:9092 --topic banco --property "parse.key=true" --property "key.separator=:"

$>> ./kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic banco --from-beginning --property print.partition=true
--property print.partition=true

Sacar solo los datos de ingreso (realmente se hace con un cliente usando la programación):

./kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic banco --from-beginning 
--property print.key=true --property print.partition=true | grep "^ingreso"
