'# Tabela de Cliente'
'id_client (Chave Primária - PK)'
'name'
'id_phoneNumber (Chave Estrangeira - FK)'

'# Tabela de Telefone'
'id_phoneNumber (Chave Primária - PK)'
'number'
'id_client (Chave Estrangeira - FK)'
'id_typePhoneNumber (Chave Estrangeira - FK)'

'# Tabela de tipo de Telefone'
'id_typePhoneNumber (Chave Primária - PK)'
'description'

'# Tabela de Estado'
'id_state (Chave Primária - PK)'
'region'

'# Relação do diagrama'
'Estado ---- Cliente ----< (N) Telefone ---- Tipo de Telefone'

'# Consulta SQL'

"SELECT c.id_client, c.id_state, t.number"
"FROM Cliente c"
"JOIN Telefone t e ON c.id_client = t.id_client"
"JOIN Estado e ON c.id_state"
"WHERE e.sigla = 'SP';"