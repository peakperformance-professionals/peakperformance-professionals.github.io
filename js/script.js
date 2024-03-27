function includeHTML(fileName, id) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', fileName, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById(id).innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}

function includeHeader(fileName, id, title) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', fileName, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var html = xhr.responseText.replace ("{{title}}", title);
            document.getElementById(id).innerHTML = html;
        }

    };
    xhr.send();
}

function insertAll(title) {
    includeHeader('header.html', 'header', title);
    includeHTML('footer.html', 'footer');
}

