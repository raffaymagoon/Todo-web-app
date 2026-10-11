function addTask() {
    var input = document.getElementById("myInput");
    var task = input.value.trim();

    if (task !== "") {
        var li = document.createElement("li");
        li.textContent = task;

        var deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = function() {
            li.remove();
        };

        li.appendChild(deleteBtn);
        document.getElementById("myUL").appendChild(li);
        input.value = "";
    }
}