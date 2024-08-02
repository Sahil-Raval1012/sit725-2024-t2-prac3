
document.addEventListener('DOMContentLoaded', function() {
    const cardContainer = document.getElementById('card-container');

    const cardData = [
        { title: 'HTML', content: 'Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s' },
        { title: 'CSS', content: 'Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript, language contains coding called CSS files', imgSrc: 'https://miro.medium.com/v2/resize:fit:300/1*Aenej4dxqEZ9j7zsI9pSnw.png' },
        { title: 'JAVASCRIPT', content: 'JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior. Web browsers have a dedicated JavaScript engine that executes the client code.', imgSrc: 'https://quintagroup.com/cms/js/js-image/javascript-logo.png' },
    ];

    function createCard({ title, content, imgSrc }) {
        const card = document.createElement('div');
        card.className = 'col-md-4';
        card.innerHTML = `
            <div class="card">
                <img src="${imgSrc}" class="card-view" alt="${title}">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${content}</p>
                    <a href="#" class="btn btn-primary" onclick="onButtonClick('${'https://en.wikipedia.org/wiki/CSS'}')">learn more</a>
                </div>
            </div>
        `;
        return card;
    }
    cardData.forEach(data => {
        cardContainer.appendChild(createCard(data));
    });
    window.onButtonClick = onButtonClick;
});
