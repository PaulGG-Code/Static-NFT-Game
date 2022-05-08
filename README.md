# Basic NFT Blockchain Game

This project consumes a smart-contract developed in Solidity using the HardHat framework, you can find the repository in the following link:

# About the project

Web project based on web3 developed with Next.js and ChakraUI .

Users will be able to play a small game after minting a new game NFT character.
The objective is to defeat the boss along side other players.
All game interactions are stored on the blockchain.

First authenticate using the Metamask wallet.
Set the network configuration to Rinkeby Testnet.

At this point, players can mint their NFTs. It's necessary to provide payment for gas.  
For this network, we will not be using real Ethereum. Instead we'll be using test funds from Rinkeby.
Search for Rinkeby faucets to receive test funds.

The rules of the game are quite simple, each character has three attributes.

            ❤   Character HP      ⚔   Attack Damage       🛡   Defense

<table>
   <tr>
      <td>
         <img
            align="center"
            width="200"
            src="https://i.imgur.com/FJ5lUgJ.png"
         />
         <table width="250" border="1px solid black">
            <tr>
               <th>Atributo</th>
               <th>Descripción</th>
            </tr>
            <tr>
               <td>❤</td>
               <td>1500</td>
            </tr>
            <tr>
               <td>⚔</td>
               <td>150</td>
            </tr>
            <tr>
               <td>🛡</td>
               <td>100</td>
            </tr>
         </table>
      </td>
      <td>
         <img
            align="center"
            width="200"
            src="https://i.imgur.com/CmYArzl.png"
         />
         <table width="250" border="1px solid black">
            <tr>
               <th>Atributo</th>
               <th>Descripción</th>
            </tr>
            <tr>
               <td>❤</td>
               <td>1500</td>
            </tr>
            <tr>
               <td>⚔</td>
               <td>150</td>
            </tr>
            <tr>
               <td>🛡</td>
               <td>50</td>
            </tr>
         </table>
      </td>
      <td>
         <img
            align="center"
            width="200"
            src="https://i.imgur.com/BvpPiRE.png"
         />
         <table width="250" border="1px solid black">
            <tr>
               <th>Atributo</th>
               <th>Descripción</th>
            </tr>
            <tr>
               <td>❤</td>
               <td>1500</td>
            </tr>
            <tr>
               <td>⚔</td>
               <td>200</td>
            </tr>
            <tr>
               <td>🛡</td>
               <td>0</td>
            </tr>
         </table>
      </td>
   </tr>
   <tr>
      <td>
         <img
            align="center"
            width="200"
            src="https://i.imgur.com/3XGEHQh.png"
         />
         <table width="250" border="1px solid black">
            <tr>
               <th>Atributo</th>
               <th>Descripción</th>
            </tr>
            <tr>
               <td>❤</td>
               <td>1500</td>
            </tr>
            <tr>
               <td>⚔</td>
               <td>100</td>
            </tr>
            <tr>
               <td>🛡</td>
               <td>100</td>
            </tr>
         </table>
      </td>
      <td>
         <img
            align="center"
            width="200"
            src="https://i.imgur.com/v0W6GOD.png"
         />
         <table width="250" border="1px solid black">
            <tr>
               <th>Atributo</th>
               <th>Descripción</th>
            </tr>
            <tr>
               <td>❤</td>
               <td>1500</td>
            </tr>
            <tr>
               <td>⚔</td>
               <td>50</td>
            </tr>
            <tr>
               <td>🛡</td>
               <td>150</td>
            </tr>
         </table>
      </td>
      <td>
         <img
            align="center"
            width="200"
            src="https://i.imgur.com/Ld5Ra2j.png"
         />
         <table width="250" border="1px solid black">
            <tr>
               <th>Atributo</th>
               <th>Descripción</th>
            </tr>
            <tr>
               <td>❤</td>
               <td>1500</td>
            </tr>
            <tr>
               <td>⚔</td>
               <td>100</td>
            </tr>
            <tr>
               <td>🛡</td>
               <td>100</td>
            </tr>
         </table>
      </td>
   </tr>
   <tr>
      <td>
         <img
            align="center"
            width="200"
            src="https://i.imgur.com/Sqa43qp.png"
         />
         <table width="250" border="1px solid black">
            <tr>
               <th>Atributo</th>
               <th>Descripción</th>
            </tr>
            <tr>
               <td>❤</td>
               <td>1500</td>
            </tr>
            <tr>
               <td>⚔</td>
               <td>50</td>
            </tr>
            <tr>
               <td>🛡</td>
               <td>150</td>
            </tr>
         </table>
      </td>
      <td>
         <img
            align="center"
            width="200"
            src="https://i.imgur.com/L2QcAbi.png"
         />
         <table width="250" border="1px solid black">
            <tr>
               <th>Atributo</th>
               <th>Descripción</th>
            </tr>
            <tr>
               <td>❤</td>
               <td>1500</td>
            </tr>
            <tr>
               <td>⚔</td>
               <td>150</td>
            </tr>
            <tr>
               <td>🛡</td>
               <td>50</td>
            </tr>
         </table>
      </td>
      <td>
         <img
            align="center"
            width="200"
            src="https://i.imgur.com/2fC9ewH.png"
         />
         <table width="250" border="1px solid black">
            <tr>
               <th>Atributo</th>
               <th>Descripción</th>
            </tr>
            <tr>
               <td>❤</td>
               <td>1500</td>
            </tr>
            <tr>
               <td>⚔</td>
               <td>100</td>
            </tr>
            <tr>
               <td>🛡</td>
               <td>100</td>
            </tr>
         </table>
      </td>
   </tr>
   <tr>
      <td>
         <img
            align="center"
            width="200"
            src="https://i.imgur.com/pn0iaKf.png"
         />
         <table width="250" border="1px solid black">
            <tr>
               <th>Atributo</th>
               <th>Descripción</th>
            </tr>
            <tr>
               <td>❤</td>
               <td>1500</td>
            </tr>
            <tr>
               <td>⚔</td>
               <td>50</td>
            </tr>
            <tr>
               <td>🛡</td>
               <td>150</td>
            </tr>
         </table>
      </td>
      <td>
         <img
            align="center"
            width="200"
            src="https://i.imgur.com/zT8ObmD.png"
         />
         <table width="250" border="1px solid black">
            <tr>
               <th>Atributo</th>
               <th>Descripción</th>
            </tr>
            <tr>
               <td>❤</td>
               <td>1500</td>
            </tr>
            <tr>
               <td>⚔</td>
               <td>150</td>
            </tr>
            <tr>
               <td>🛡</td>
               <td>50</td>
            </tr>
         </table>
      </td>
      <td>
         <img
            align="center"
            width="200"
            src="https://i.imgur.com/eyG6FgJ.png"
         />
         <table width="250" border="1px solid black">
            <tr>
               <th>Atributo</th>
               <th>Descripción</th>
            </tr>
            <tr>
               <td>❤</td>
               <td>1500</td>
            </tr>
            <tr>
               <td>⚔</td>
               <td>50</td>
            </tr>
            <tr>
               <td>🛡</td>
               <td>150</td>
            </tr>
         </table>
      </td>
   </tr>
</table>

Defense is a bonus that your character has. The boss does not.

# Big Kangh - The First Boss

<div>
   <img
      align="center"
      width="200"
      src="https://i.imgur.com/jBQ57F5.png"
   />
   <table width="250" border="1px solid black">
      <tr>
         <th>Atributo</th>
         <th>Descripción</th>
      </tr>
      <tr>
         <td>❤</td>
         <td>1000</td>
      </tr>
      <tr>
         <td>⚔</td>
         <td>200</td>
      </tr>
      <tr>
         <td>🛡</td>
         <td>0</td>
      </tr>
   </table>
</div>

To attack the boss first you need to choose a power, you can select one of these three:

      🔥  fuego     💧  water     🌿  vegetation

Each of them is good against one, weak against another.

<p width="400">
   <img align="center" width="250" src="https://raw.githubusercontent.com/BraianVaylet/buildspace-epic-game-ui/main/public/powers.png" />
</p>

Every time we select a power and attack the boss the boss will also select one of them, the winner will have the chance to attack and cause damage to the other.

Remember that the boss has a lot of hp and your character doesn't, so invite your friends so that together you can defeat him!😁

This was a 100% academic project while I was taking the buildspace platform courses , which I recommend to any developer who wants to start developing for web3.

Some screenshots of the project:

![screenshot#1](https://raw.githubusercontent.com/BraianVaylet/buildspace-epic-game-ui/main/screenshot/1.png)

![screenshot#2](https://raw.githubusercontent.com/BraianVaylet/buildspace-epic-game-ui/main/screenshot/2.png)

![screenshot#3](https://raw.githubusercontent.com/BraianVaylet/buildspace-epic-game-ui/main/screenshot/3.png)

![screenshot#4](https://raw.githubusercontent.com/BraianVaylet/buildspace-epic-game-ui/main/screenshot/4.png)

---

### This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
