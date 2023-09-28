const cardData =[
    {
        heading: "card 1",
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
    }
]
const postContainer = document.querySelector('.container');

const postMethods = () => {
cardData.map((postData) => {
const postElement = document.createElement('div');
postElement.classList.add('card');
postElement.innerHTML=`
<h3 class="head">${postData.heading}</h3>
<p class="body">${postData.body}</p>
`
postContainer.appendChild(postElement);
})
};



postMethods();
