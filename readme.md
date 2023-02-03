# lvlup-data-export

Simple tool to export account data from [lvlup.pro](https://lvlup.pro) customer panel v4.

## How to get auth token

This tool requires your auth token (not api key), which is generated after login. To get it, log in to your account via browser, open Dev Tools (F12) and enter `localStorage.authToken` in the console. Your token should looks like this `XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX` and is valid until the login session expires.

## Recommended usage

Use binary for Windows, Linux or MacOS. [Click here](https://github.com/0zelot/lvlup-data-export/releases) to download the latest version.

## Run from source

This project requires NodeJS v18 or newer.

1. Clone this repository.

2. Install dependencies - `npm install`.

3. Run app - `node index.js`