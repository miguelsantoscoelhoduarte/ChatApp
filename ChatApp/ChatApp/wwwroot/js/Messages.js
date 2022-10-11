
function BuildMessages() {
    for (let i = 0; i < 5; i++) {
        let ol = document.createElement('ol');
        ol.className = 'list-group';

        let li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';

        let img = document.createElement('img');
        img.setAttribute('src', 'https://www.w3schools.com/bootstrap5/img_avatar1.png');
        img.setAttribute('alt', 'Logo');
        img.setAttribute('width', '40');
        img.className = 'rounded-pill';

        let div = document.createElement('div');
        div.className = 'ms-2 me-auto';
        div.textContent = 'Cras justo odio';

        let div2 = document.createElement('div');
        div2.className = 'fw-bold';
        div2.textContent = 'Subheading';

        let span = document.createElement('span');
        span.className = 'badge bg-primary rounded-pill';
        span.textContent = '14';

        ol.appendChild(li);
        li.appendChild(img);
        li.appendChild(div);
        div.appendChild(div2);
        li.appendChild(span);
        document.body.appendChild(ol);
    }
}

window.onload = function () {
    BuildMessages();
};