function onCreate(event) {
    event.preventDefault();

    let data = JSON.stringify({
        author: String(document.getElementById("cauthor").value),
        title: String(document.getElementById("ctitle").value),
        numberOfPages: String(document.getElementById("cnumberOfPages").value)
    });
    fetch("http://localhost:2403/textbooks/", {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(response =>
            alert(
                `Success create:\n  Author: ${response.author}\n  Title: ${response.title}\n  Number of Pages: ${response.numberOfPages}`
            )
        )
        .then(response =>
            console.log(
                `Success create:\n  Author: ${response.author}\n  Title: ${response.title}\n  Number of Pages: ${response.numberOfPages}`
            )
        )
        .catch(error => console.error("Error:", error));
}

function onRead() {
    fetch("http://localhost:2403/textbooks/", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(result => {
            let resultTBody = document.createElement("tbody");
            result.map(function(nthAudioBook) {
                resultTBody.appendChild(parseTextBookToTableRow(nthAudioBook));
            });

            let table = document.getElementById("rTBody").parentElement;
            table.replaceChild(resultTBody, document.getElementById("rTBody"));
            resultTBody.id = "rTBody";
            console.log(`Success read!`);
        })
        .catch(error => console.error("Error:", error));
}

function onPrepareUpdate(event) {
    event.preventDefault();

    fetch("http://localhost:2403/textbooks/", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(response => {
            let ids = document.createElement("select");
            ids.className = "form-control";
            response.map(function(nthTextBook) {
                let id = document.createElement("option");
                id.innerHTML = nthTextBook["id"];
                ids.appendChild(id);
            });
            let form = document.getElementById("uid").parentElement;
            form.replaceChild(ids, document.getElementById("uid"));
            ids.id = "uid";
        })
        .catch(error => console.error("Error:", error));
}

function onUpdate(event) {
    event.preventDefault();

    let data = JSON.stringify({
        author: String(document.getElementById("uauthor").value),
        title: String(document.getElementById("utitle").value),
        numberOfPages: String(document.getElementById("unumberOfPages").value)
    });

    fetch(
        "http://localhost:2403/textbooks/" +
            document.getElementById("uid").value,
        {
            method: "PUT",
            body: data,
            headers: { "Content-Type": "application/json" }
        }
    )
        .then(response => response.json())
        .then(response =>
            alert(
                `Success update:\n  Author: ${response.author}\n  Title: ${response.title}\n  Number of Pages: ${response.numberOfPages}`
            )
        )
        .then(response =>
            console.log(
                `Success update:\n  Author: ${response.author}\n  Title: ${response.title}\n  Number of Pages: ${response.numberOfPages}`
            )
        )
        .catch(error => console.error("Error:", error));
}

function onDelete(event) {
    event.preventDefault();
    fetch(
        "http://localhost:2403/textbooks/" +
            document.getElementById("did").value,
        {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        }
    )
        .then(response => response.json())
        .then(response =>
            console.log("Success delete:", JSON.stringify(response))
        )
        .then(function() {
            onRead();
        })
        .catch(error => console.error("Error: ", error));
}

function parseTextBookToTableRow(TextBooks) {
    let row = document.createElement("tr");

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
