create database CampFire;
use CampFire;
create table Cliente (
ID_Cliente int primary key auto_increment,
Primerio_Nome varchar (20),
Segundo_Nome varchar (20),
Email varchar (40),
Telefone varchar (20),
CNPJ_CPF varchar(20),
Hectares int,
Quantidade_de_Areas int) auto_increment = 1000;

select * from Cliente;

create table Usuario (
ID_Usuario int primary key auto_increment,
Nome varchar (20),
Login int,
Senha int) auto_increment = 12010;

select * from Usuario;

create table Contato (
ID_contato int primary key auto_increment,
Primeiro_Nome varchar (20),
Segundo_Nome varchar (20),
Email varchar (40),
Telefone varchar(20),
Assunto varchar (50)); 

select * from Contato;

create table Area_Monitorada (
ID_Area bigint primary key,
Hectares int,
Bioma varchar (15),
Estado varchar (20),
Cidade varchar (30),
Quantidade_Sensores int); 

select * from Area_Monitorada;

create table Sensores (
ID_Sensor int primary key auto_increment,
FKÁrea bigint ) auto_increment=100;

select * from Sensores;

create table Eventos (
ID_Evento int primary key auto_increment,
Temperatura int,
Umidade int,
Datas date,
Hora time,
Situação varchar (10)) auto_increment=1;

select * from Eventos;

insert into Cliente value 
( null, 'Felipe', 'Pinheiro','felipepinheir@outlook.com', 11981891656 , 46726147890, 2, 1),
(null, 'Roberto','Silva', 'silvarober@gmail.com', 12961987573 , 78420985434, 5,2),
(null, 'Maria','Lucia','marialucia@outlook.com', 21978654314 , 61347290078,7,1);

insert into Usuario values 
(null, 'Matheus','012010',10022),
(null,'Mathias',012011,20102),
(null,'Caue',012012,34321),
(null,'Leonardo',012013,54316);

insert into Contato values
(null,'Isabella','Silva','isabellasilva@gmail.com',011945536171,'Contrato'),
(null,'Gustavo','Pereira','pereiragustavo@outlook.com',08788654378,'Funcionamento');


insert into Area_Monitorada values 
(01105100001, 2, 'Mata Atlântica','São Paulo','São Paulo',5),
(01905100101, 3, 'Mata Atlântica','São Paulo','Americana',5),
(03104100102,2, 'Cerrado','Minas Gerais','Passos',5),
(04105100201,7,'Mata Atlântica','Paraná','Curitiba',5);

insert into Eventos values 
(null,27,50,'2020-04-23','15:00:00', 'Sem Risco'),
(null,25,64,'2020-04-23','15:10:00','Sem Risco');







