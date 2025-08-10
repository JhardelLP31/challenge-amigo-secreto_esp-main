// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problem
let totalFriends = [];

function addFriend() {
    newFriend = document.getElementById('friend').value;
    let index = totalFriends.indexOf(newFriend);
    if (!index) {
        alert("Este nombre ya existe");
        clearInput();
        return;

    }
    if (newFriend == "") {
        alert("Debes ingresar un nombre");
        return;
    }
    totalFriends.push(newFriend);

    listFriend();
    clearInput();
}
function searchBoton(value) {
    document.getElementById('button-add').hidden = !value;
    document.getElementById('button-edit').hidden = value;
}

function listFriend() {
    enabledButon()
    let element = "";
    for (let index = 0; index < totalFriends.length; index++) {
        element += "<tr>";
        element += "<td>" + totalFriends[index] + "</td>";
        element += "<td style='text-align:center;'>";
        element += "<button class='btn btn-dark mx-2' title='Editar' onclick='searchEditFriend(\"" + totalFriends[index] + "\")'><i class='mdi mdi-file-edit text-primary mdi-18px'></i></button>"
        element += "<button class='btn btn-dark' title='Eliminar' onclick='deleteFriend(\"" + totalFriends[index] + "\")'><i class='mdi mdi-delete-forever text-danger mdi-18px'></i></button>"
        element += "</td>";
        element += "</tr>";
        //element += `<li>${totalFriends[index]}</li>`;
    }
    searchBoton(true);
    //document.getElementById('listaAmigos').innerHTML = element;
    document.getElementById('date').innerHTML = element;
}
function enabledButon() {
    const value = totalFriends.length === 0;
    document.getElementById('resetButton').disabled = value;
    document.getElementById('fetchButton').disabled = value;
}


function clearInput() {
    document.getElementById('friend').value = "";
    document.getElementById('friend').focus();
    searchBoton(true);

}

function searchEditFriend(cod) {
    document.getElementById('friend').value = cod;
    document.getElementById('searchFriend').value = cod;
    searchBoton(false);
}

function editFriend() {
    let friendSearching = document.getElementById('searchFriend').value;
    let newName = document.getElementById('friend').value;
    let index = totalFriends.indexOf(friendSearching);
    if (totalFriends[index] == newName) {
        alert("Este nombre ya existe");
        clearInput();
        return;
    }
    totalFriends[index] = newName;
    alert("amigo editado");
    listFriend();
    clearInput();

}

function allReset() {
    totalFriends = [];
    listFriend();
    if (totalFriends.length == 1) document.getElementById('resetButton').disabled = false;


}

function deleteFriend(cod) {
    let searchDelete = totalFriends.indexOf(cod);
    console.log(searchDelete);
    totalFriends.splice(searchDelete, 1);
    alert("Amigo eliminado");
    listFriend();

}

function fetchFriend() {
    let lengthFriends = Math.floor(Math.random() * totalFriends.length);    
    console.log(lengthFriends);
    ShowAlert("¡REVELACIÓN!", `El amigo secreto es ${totalFriends[lengthFriends]}`, "success");
    totalFriends.splice(lengthFriends, 1);
    listFriend();
    enabledButon();
}

function ShowAlert(tittle, text, icon) {
    Swal.fire({
        title: tittle,
        text: text,
        icon: icon,
        iconColor: '#6592ff',
        confirmButtonColor: '#3085d6',
        iconColor: '#3085d6',
        confirmButtonText: 'Aceptar',
    });
}


listFriend();
