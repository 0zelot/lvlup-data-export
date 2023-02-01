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


module.exports = {getMainInfo, getAccountLogs, getAccountTickets, getTicketInfo}