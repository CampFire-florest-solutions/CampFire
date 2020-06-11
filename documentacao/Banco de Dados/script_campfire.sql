create table Cliente (
ID_Cliente int primary key identity(100,1),
Primerio_Nome varchar (20),
Segundo_Nome varchar (20),
Email varchar (40),
Telefone varchar (20),
CNPJ_CPF varchar(20),
Hectares int,
Quantidade_de_Areas int);

INSERT INTO Cliente VALUE
('rogerio', 'arnetti');


create table Usuario (
ID_Usuario int primary key identity(12010,1),
Nome varchar (20),
Login int,
Senha int,
Fkcliente int,
foreign key (Fkcliente) references Cliente(ID_Cliente));

create table Contato (
ID_contato int primary key identity,
Primeiro_Nome varchar (20),
Segundo_Nome varchar (20),
Email varchar (40),
Telefone varchar(20),
Assunto varchar (50)); 


create table Area_Monitorada (
ID_Area bigint primary key,
Hectares int,
Bioma varchar (15),
Estado varchar (20),
Cidade varchar (30),
Quantidade_Sensores int,
Fkcliente int,
foreign key (Fkcliente) references Cliente(ID_Cliente)); 


create table Sensores (
ID_Sensor int primary key identity,
Situacao varchar (3),
check (situacao = 'on' or situacao= 'off'),
Fkarea bigint,
foreign key (Fkarea) references Area_Monitorada(ID_Area));


create table Eventos (
ID_Evento int primary key identity,
Temperatura int,
Umidade int,
Datas date,
Momento DATETIME,
FkSensor int,
foreign key(Fksensor) references Sensores(ID_Sensor));

insert into Usuario values 
('Matheus','012010',10022,100),
('Mathias',012011,20102,101),
('Caue',012012,34321,101),
('Leonardo',012013,54316,102);

insert into Contato values
('Isabella','Silva','isabellasilva@gmail.com',011945536171,'Contrato'),
('Gustavo','Pereira','pereiragustavo@outlook.com',08788654378,'Funcionamento');


insert into Area_Monitorada values 
(110510001, 2, 'Mata Atlântica','São Paulo','São Paulo',5,100),
(190510101, 3, 'Mata Atlântica','São Paulo','Americana',5,101),
(310410102,2, 'Cerrado','Minas Gerais','Passos',5,101),
(410510201,7,'Mata Atlântica','Paraná','Curitiba',5,102);

insert into Sensores values
('on','110510001'),
('on','110510001'),
('on','110510001'),
('on','110510001'),
('on','110510001'),
('on','190510101'),
('on','190510101'),
('on','190510101'),
('on','190510101'),
('on','190510101'),
('on','310410102'),
('on','310410102'),
('on','310410102'),
('on','310410102'),
('on','310410102'),
('on','410510201'),
('on','410510201'),
('on','410510201'),
('on','410510201'),
('on','410510201');

insert into Eventos values 
(7,50,'2020-04-23','15:00:00', 21),
(5,64,'2020-04-23','15:10:00',22);




