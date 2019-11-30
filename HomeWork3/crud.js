function onCreate(event) {
    event.preventDefault();

    var data = JSON.stringify({
        author: String(document.getElementById("cauthor").value),
        title: String(document.getElementById("ctitle").value),
        numberOfPages: String(document.getElementById("cnumberOfPages").value)
    });
    console.log(data);
    xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function() {
        if (this.readyState === 4) {
            alert(this.responseText);
            document
                .getElementById("createForm")
                .dispatchEvent(new Event("submit"));
        }
    });

    xhr.open("POST", "http://localhost:2403/textbooks/");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
}

function onRead() {
    xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
        if (this.readyState === 4) {
            result = JSON.parse(this.response);
            var resultTBody = document.createElement("tbody");
            result.map(function(nthTextBook) {
                resultTBody.appendChild(parseTextBookToTableRow(nthTextBook));
            });

            var table = document.getElementById("rTBody").parentElement;
            table.replaceChild(resultTBody, document.getElementById("rTBody"));
            resultTBody.id = "rTBody";
            console.log("success read");
        }
    });

    xhr.open("GET", "http://localhost:2403/textbooks/");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
}

function onPrepareUpdate(event) {
    event.preventDefault();
    xhrids = new XMLHttpRequest();
    xhrids.withCredentials = true;

    xhrids.addEventListener("readystatechange", function() {
        if (this.readyState === 4) {
            result = JSON.parse(this.response);
            var ids = document.createElement("select");
            ids.className = "form-control";
            result.map(function(nthTextBook) {
                var id = document.createElement("option");
                id.innerHTML = nthTextBook["id"];
                ids.appendChild(id);
            });
            var form = document.getElementById("uid").parentElement;
            form.replaceChild(ids, document.getElementById("uid"));
            ids.id = "uid";
        }
    });
    xhrids.open("GET", "http://localhost:2403/textbooks/");
    xhrids.setRequestHeader("Content-Type", "application/json");
    xhrids.send();
}

function onUpdate(event) {
    event.preventDefault();

    var data = JSON.stringify({
        author: String(document.getElementById("uauthor").value),
        title: String(document.getElementById("utitle").value),
        numberOfPages: String(document.getElementById("unumberOfPages").value)
    });
    console.log(data);
    xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open(
        "PUT",
        "http://localhost:2403/textbooks/" +
            document.getElementById("uid").value
    );
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
}

function onDelete(event) {
    event.preventDefault();
    xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
        if (this.readyState === 4) {
            console.log(this.responseText);
            onRead();
        }
    });

    xhr.open(
        "DELETE",
        "http://localhost:2403/textbooks/" +
            document.getElementById("did").value
    );
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
}

function parseTextBookToTableRow(TextBooks) {
    var row = document.createElement("tr");

    id = document.createElement("th");
    id.innerText = TextBooks["id"];
    row.appendChild(id);

    author = document.createElement("td");
    author.innerText = TextBooks["author"];
    row.appendChild(author);

    title = document.createElement("td");
    title.innerText = TextBooks["title"];
    row.appendChild(title);

    numberOfPages = document.createElement("td");
    numberOfPages.innerText = TextBooks["numberOfPages"];
    row.appendChild(numberOfPages);

    return row;
}

(function() {
    document.getElementById("cbutton").addEventListener("click", onCreate);
    document
        .getElementById("readDeletebutton")
        .addEventListener("click", onRead);
    document.getElementById("ubutton").addEventListener("click", onUpdate);
    document
        .getElementById("pubutton")
        .addEventListener("click", onPrepareUpdate);
    document.getElementById("dbutton").addEventListener("click", onDelete);
})();
