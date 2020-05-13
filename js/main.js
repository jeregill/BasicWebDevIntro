const stringifiedMessages = '[{"submittedBy":"Bob","message":"Hello World!"},{"submittedBy":"Jane","message":"Last Friday I saw a spotted striped blue worm shake hands with a legless lizard."},{"submittedBy":"John","message":"On a scale from one to ten, whats your favorite flavor of random grammar?"},{"submittedBy":"Joseph","message":"It dawned on her that others could make her happier, but only she could make herself happy."},{"submittedBy":"Carol","message":"Someone I know recently combined Maple Syrup & buttered Popcorn thinking it would taste like caramel popcorn. It didn’t and they don’t recommend anyone else do it either."},{"submittedBy":"Susie","message":"Lets all be unique together until we realise we are all the same."},{"submittedBy":"Jeff","message":"Improve your goldfishs physical fitness by getting him a bicycle."}]';
const trashIconHTML = '<i class="material-icons" onclick="deleteMessage(this.parentNode.parentNode)">delete</i>';


window.addEventListener('load', ()=> {
    let messages = JSON.parse(stringifiedMessages);
    loadTableData(messages);
    document.getElementById('message-input').addEventListener('input', areFieldsEmpty);
    document.getElementById('name-input').addEventListener('input',areFieldsEmpty);
});

function loadTableData(messages) {
    messages.forEach(message => {
        writeToTable(message);
    })
}

function writeToTable(messageObj) {
    const table = document.getElementById('messages-body');
    let row = table.insertRow();
    let messageVal = row.insertCell(0);
    messageVal.innerHTML = messageObj.message;
    let submittedByVal = row.insertCell(1);
    submittedByVal.innerHTML = messageObj.submittedBy;
    let trashIcon = row.insertCell(2);
    trashIcon.innerHTML = trashIconHTML;
}

function submitMessage(){
    let message = document.getElementById('message-input').value;
    let name = document.getElementById('name-input').value;
    const newMessage = {"message": message, "submittedBy": name };
    writeToTable(newMessage);
    clearInput();
}

function clearInput() {
    document.getElementById('message-input').value = '';
    document.getElementById('name-input').value ='';
    areFieldsEmpty();
}


function areFieldsEmpty(){
    document.getElementById('submit-button').disabled = !(document.getElementById('message-input').value &&
        document.getElementById('name-input').value);
    document.getElementById('clear-button').disabled = !(document.getElementById('message-input').value ||
        document.getElementById('name-input').value);
}

function showMessages() {
    document.getElementById('messages-div').style.display = 'block';
}
function hideMessages() {
    document.getElementById('messages-div').style.display = 'none';
}

function clearMessages() {
    document.getElementById('messages-body').innerHTML= '';
}

function deleteMessage(row) {
    const table = document.getElementById('messages-table');
    table.deleteRow(row.rowIndex);
}