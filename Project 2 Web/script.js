// script.js

var storedObjects = JSON.parse(sessionStorage.getItem("objects")) || [];

function createObject() {
    var objectName = document.getElementById("objectName").value;
    var objectDescription = document.getElementById("objectDescription").value;
    var objectCategory = document.getElementById("objectCategory").value;
    var objectDate = document.getElementById("objectDate").value;

    var newObject = {
        name: objectName,
        description: objectDescription,
        category: objectCategory,
        date: objectDate
    };

    storedObjects.push(newObject);
    sessionStorage.setItem("objects", JSON.stringify(storedObjects));

    window.location.href = "object-list.html";
}

function updateObject(index) {
    var objectToUpdate = storedObjects[index];

    sessionStorage.setItem("objectToUpdate", JSON.stringify(objectToUpdate));
    sessionStorage.setItem("indexToUpdate", index);

    window.location.href = "update-object.html";
}

function deleteObject(index) {
    storedObjects.splice(index, 1);
    sessionStorage.setItem("objects", JSON.stringify(storedObjects));
    window.location.reload();
}

function saveUpdatedObject() {
    var updatedObject = JSON.parse(sessionStorage.getItem("objectToUpdate"));
    var indexToUpdate = sessionStorage.getItem("indexToUpdate");

    updatedObject.name = document.getElementById("updatedObjectName").value;
    updatedObject.description = document.getElementById("updatedObjectDescription").value;
    updatedObject.category = document.getElementById("objectCategory").value;
    updatedObject.date = document.getElementById("updatedObjectDate").value;

    storedObjects[indexToUpdate] = updatedObject;

    sessionStorage.setItem("objects", JSON.stringify(storedObjects));

    window.location.href = "object-list.html";
}
