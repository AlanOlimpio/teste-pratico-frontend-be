# teste-pratico-frontend-be

O objetivo desse projeto é teste prático.

## Figma

Layout no figma proposto.

|Figma|
|-------|
|<img src="screencapture-figma.gif" alt="Figma">|

## Desktop

Layout desenvolvido desktop.

|Desktop |
|-------|
|<img src="screencapture-desktop.gif" alt="Desktop">|

## Responsivo 

Layout desenvolvido responsivo.

|Responsivo |
|-------|
|<img src="screencapture-responsivo.gif" alt="Responsivo">|



## ✔️ Bibliotecas

Lista das bibliotecas utilizadas no desenvolvimento:
- `vite`
- `@hookform/resolvers`
- `axios`
- `react`
- `react-dom`
- `react-hook-form`
- `react-router-dom`
- `styled-components`
- `zod`
- `json-server` 


## 🛠️ Abrir e rodar o projeto

### Necessário criar .env.local

```bash
VITE_BACK_END_URL="http://localhost:3000/"
```

Dentro da pasta do projeto execute npm i ou yarn para instalar as dependências, depois crie a `.env.local` na raiz do projeto, para rodar o projeto, abra o terminal e rode npm run dev  ou yarn dev, o back-end foi criado com json-server, para rodar abra um novo terminal e na raiz do projeto execute `npx json-server db.json` ou com yarn `json-server db.json`.