const getMainInfo = async (token) => await (await fetch("https://api.lvlup.pro/v4/me", {
    headers: {
        "Authorization": `Bearer ${token}`
}})).json();


const getAccountLogs = async (token) => {

    const count = (await (await fetch("https://api.lvlup.pro/v4/me/log?limit=10&afterId=0", {
        headers: {
            "Authorization": `Bearer ${token}`
    }})).json()).count;

    return await (await fetch(`https://api.lvlup.pro/v4/me/log?limit=${count}&afterId=0`, {
        headers: {
            "Authorization": `Bearer ${token}`
    }})).json()

}


const getAccountTickets = async (token) => {

    const count = (await (await fetch("https://api.lvlup.pro/v4/tickets?limit=10&afterId=0", {
        headers: {
            "Authorization": `Bearer ${token}`
    }})).json()).count;

    return await (await fetch(`https://api.lvlup.pro/v4/tickets?limit=${count}&afterId=0`, {
        headers: {
            "Authorization": `Bearer ${token}`
    }})).json()

}


const getTicketInfo = async (token, id) => await (await fetch(`https://api.lvlup.pro/v4/tickets/${id}`, {
    headers: {
        "Authorization": `Bearer ${token}`
}})).json()


const getWalletInfo = async (token) => await (await fetch("https://api.lvlup.pro/v4/wallet", {
    headers: {
        "Authorization": `Bearer ${token}`
}})).json()


const getAccountPayments = async (token) => {

    const count = (await (await fetch("https://api.lvlup.pro/v4/payments?limit=10&afterId=0", {
        headers: {
            "Authorization": `Bearer ${token}`
    }})).json()).count;

    return await (await fetch(`https://api.lvlup.pro/v4/payments?limit=${count}&afterId=0`, {
        headers: {
            "Authorization": `Bearer ${token}`
    }})).json()

}

const getAccountOrders = async (token) => {

    const count = (await (await fetch("https://api.lvlup.pro/v4/orders?limit=10&afterId=0", {
        headers: {
            "Authorization": `Bearer ${token}`
    }})).json()).count;

    return await (await fetch(`https://api.lvlup.pro/v4/orders?limit=${count}&afterId=0`, {
        headers: {
            "Authorization": `Bearer ${token}`
    }})).json()

}


const getReferralInfo = async (token) => await (await fetch("https://api.lvlup.pro/v4/me/referral", {
    headers: {
        "Authorization": `Bearer ${token}`
}})).json()


module.exports = {getMainInfo, getAccountLogs, getAccountTickets, getTicketInfo, getWalletInfo, getAccountPayments, getAccountOrders, getReferralInfo}