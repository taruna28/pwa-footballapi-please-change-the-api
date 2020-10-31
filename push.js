const webPush = require("web-push");
//izinkan notifikasi chrome di winodows 10
//windows,setiap browser berbeda key
// const vapidKeys = {
//     publicKey : "BC0Lwah9zBysxZ1XDcMmEuu1tyRvjJze2mbtJU2OqVfQPANyCdo2c5TVTxWdAonSduCSS8dK1ZAO0v-KqaSUha8",
//     privateKey : "sntV9LWsZbCOS_TDwymW3v-Bc8YBclQb7NZ4S4HqyhA"
// }

const vapidKeys = {
    publicKey : "BHWFqWZct2F6YAqN6bmPxDknDecXPoTMA8qOvDLhxkKfqdB1LakrUqaZIBJRs8PnRpe87U0mUhLoqGWnka5xrcA",
    privateKey : "VjB5lxIy5pCiSyB4bUWHo2-dFaHziKCSEzRGNU6PXwc"
}
// const subscription = {
//     endpoint : "https://fcm.googleapis.com/fcm/send/e7pU7L3NoW0:APA91bFpMCcER8ABdc0aPceAuvZ_7BaJd-DQIeIJJaEqWn-yVxoMyo0wynlL8fnk-32MtK1muZUA0UkpC0A1dan8-24rKmPUu49tkXz27A8G78L0wMI_ORIKE923XIwTUUjuPF1BlD28",
//     keys : {
//         p256dh : "BMFnA3K+uKuXBUJtUtkqp8+YgkekuSlQb1EgzsReWO9XvSF8QviI26z4UQAQaGGW3MatRxQ14DCs4Ywl4g4LMuk=",
//         auth : "8L+ZHtUw6ayEVMvZ/ER7OA=="
//     }
// }
const subscription = {
    endpoint : "https://fcm.googleapis.com/fcm/send/efy8pSZtFw4:APA91bFPS3xVkAeIVx7FYPEQNp8uC3DLhHJx9czvIZKMASrtg-8yuiXYWt4MQt2LTAeJElI3y7mtvKD3myjte4YRwt_tFNIrR_-KWRm7HSuXlGFxoa_KTQrfMBjUGRFJSVazf5N2RgLe",
    keys : {
        p256dh : "BIujnA7w/BGMQ/dE7q37rrrR9/GVlD7qfRfDscmHLORWMZIeAZgLVzEfFIOtRlI3JxtaDezUr2jsDLaOEnwv0wg=",
        auth : "a8HNPp1k2HBeh7bEsrDbSw=="
    }
}

const options = {
    gcmAPIKey : "1074651338084",
    TTL : 60
}
webPush.setVapidDetails('mailto:taruna.rachmad@gmail.com',vapidKeys.publicKey,vapidKeys.privateKey)

let payloads = "selamat,push notification ,subscription berhasil di gunakan"

webPush.sendNotification(
    subscription,
    payloads,
    options
)
//never pause