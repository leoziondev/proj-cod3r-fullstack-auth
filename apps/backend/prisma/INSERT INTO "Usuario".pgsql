INSERT INTO "Usuario"
(nome, email, senha, ativo, autenticacao, telefone, imagem)
VALUES
('João Pereira da Silva', 'joaops@zmail.com', '1234', true, false, '+55619803473', 'http://www.teste.com.br');

INSERT INTO "Perfil"
(tipo, descricao, ativo)
VALUES
('ADMINISTRADOR', 'Manter perfil e permissões', true);

INSERT INTO "Perfil"
(tipo, descricao, ativo)
VALUES
('NAVEGADOR', 'Consultar cadastro', true);

UPDATE "Perfil"
SET tipo = 'COORDENADOR'
WHERE id = 2;

INSERT INTO "Permissao"
(tipo, descricao, ativo)
VALUES
('EDITAR USUARIOS', 'Alterar, excluir, inserir usuarios', TRUE);

INSERT INTO "Permissao"
(tipo, descricao, ativo)
VALUES
('CONSULTAR USUARIOS', 'Consultar usuarios', TRUE);

UPDATE "Permissao"
set tipo = 'EDITAR PERFIL',
descricao = 'Alterar, excluir, inserir perfil'
where id = 2;

INSERT INTO "PerfisDosUsuarios"
(usuario, perfil)
VALUES
(1, 1);

INSERT INTO "PerfisDosUsuarios"
(usuario, perfil)
VALUES
(1, 2);

select * from "Usuario";

select * from "Perfil";

select * from "Permissao";

select * from "PerfisDosUsuarios";

