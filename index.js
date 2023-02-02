const rl = require ("readline-sync");
const chalk = require("chalk");

const fs = require("node:fs/promises");

const {getMainInfo, getAccountLogs, getAccountTickets, getTicketInfo, getWalletInfo, getAccountPayments, getAccountOrders, getReferralInfo} = require("./functions.js");

const dir = "./lvlup-data-export"

console.clear();

const token = rl.question(`${chalk.cyanBright("Enter your auth token: ")}`, {hideEchoBack: true});

(async () => {

    fs.mkdir(dir).catch(err => false);

    const mainInfo = await getMainInfo(token);
    if(!mainInfo.uid) return console.error(chalk.redBright("Authorization failed!"), mainInfo);

    fs.writeFile(`${dir}/me.json`, JSON.stringify(mainInfo, null, 2));
    fs.writeFile(`${dir}/logs.json`, JSON.stringify(await getAccountLogs(token), null, 2));
    fs.writeFile(`${dir}/wallet.json`, JSON.stringify(await getWalletInfo(token), null, 2));
    fs.writeFile(`${dir}/payments.json`, JSON.stringify(await getAccountPayments(token), null, 2));
    fs.writeFile(`${dir}/orders.json`, JSON.stringify(await getAccountOrders(token), null, 2));
    fs.writeFile(`${dir}/referral.json`, JSON.stringify(await getReferralInfo(token), null, 2));

    fs.mkdir(`${dir}/tickets`).catch(err => false);

    const tickets = await getAccountTickets(token);
    fs.writeFile(`${dir}/tickets/_index.json`, JSON.stringify(tickets, null, 2));

    for(const ticket in tickets.items) 
        fs.writeFile(`${dir}/tickets/${tickets.items[ticket].id}.json`, JSON.stringify(await getTicketInfo(token, tickets.items[ticket].id), null, 2));

    console.log(chalk.greenBright("Data exported successfully."));
    
})();