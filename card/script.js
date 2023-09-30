const cardData =[
    {        heading: "card 1",
        body: "this is body 1"
    },
    {
        heading: "card 2",
        body: "this is body 2"
    },{
        heading: "card 3",
        body: "this is body 3"
    },{
        heading: "card 3",
        body: "this is body 3"
    },{
        heading: "card 4",
        body: "this is body 4"
    },{
        heading: "card 5",
        body: "this is body 5"
    },{
        heading: "card 6",
        body: "this is body 6"
    },{
        heading: "card 7",
        body: "this is body 7"
    }]
const postContainer = document.querySelector('.container');
const postMethods = () => {
    cardData.map((data) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
        <h3 class="head">${data.heading}</h3>
        <p class="body">${data.body}</p>
        `
        postContainer.appendChild(card)
    })
}
postMethods();
