# Tela de Perfil – React Native (Flexbox)

Atividade prática de Flexbox usando Expo.

## Como rodar

1. Instale as dependências:
   ```
   npm install
   ```
2. Inicie o projeto:
   ```
   npx expo start
   ```
3. Abra no celular com o app **Expo Go** (QR Code) ou pressione `a` (Android), `i` (iOS) ou `w` (web).

## Estrutura

```
perfil-app/
├── App.js          # Tela de perfil
├── app.json        # Configuração do Expo
├── babel.config.js
├── package.json
└── assets/
    └── avatar.png  # Avatar circular
```

## Conceitos de Flexbox usados

| Requisito | Onde / como |
|---|---|
| Container ocupa a tela | `container`: `flex: 1` |
| Centralização vertical e horizontal | `container`: `justifyContent: 'center'` + `alignItems: 'center'` |
| Avatar, nome e bio centralizados | `profile`: coluna (padrão) + `alignItems: 'center'` |
| Estatísticas em linha | `stats`: `flexDirection: 'row'` |
| Espaçamento equilibrado | `stats`: `justifyContent: 'space-around'` + `statItem` com `flex: 1` |
| Botão centralizado abaixo | `actions`: `alignItems: 'center'` |

Nenhuma biblioteca externa de layout e nenhuma margem para posicionamento
(apenas `gap`, `padding` e `flex`).

## Desafios opcionais incluídos

- Bordas separando as seções (topo/base das estatísticas e divisores entre itens)
- Responsividade: largura em porcentagem com `maxWidth`, e `flex` em vez de tamanhos fixos
