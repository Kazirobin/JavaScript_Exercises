const data =[
    {
        head:'head 1',
        body:'this is body 1'
    },
    {
        head:'head 2',
        body:'this is body 2'
    },
    {
        head:'head 3',
        body:'this is body 3'
    },
    {
        head:'head 4',
        body:'this is body 4'
    },
    {
        head:'head 5',
        body:'this is body 5'
    },
    {
        head:'head 6',
        body:'this is body 6'
    },
    {
        head:'head 7',
        body:'this is body 7'
    }
]
const container = document.querySelector('.container');
const post = () => {
    data.map((postData) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
        <h3 class="head">${postData.head}</h3>
        <p class="body">${postData.body}</p>
        `
        container.appendChild(card)
    })
}
post();