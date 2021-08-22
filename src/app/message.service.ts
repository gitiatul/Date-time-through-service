const time = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });


export class MessageService{
    messageAlert(){
        alert(time)
    }
   
}