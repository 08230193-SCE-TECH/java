function showdata(name, amt){
    console.log('Hello' + name + '\n You are saving' + amt);



}

function getdata(callbring){
    const prompt = require('prompt-sync')();
    var name = prompt('Enter your name: ');
    var amt = prompt('Enter the amount you want to save: ');
    callbring(name, amt);
}
getdata(showdata);

