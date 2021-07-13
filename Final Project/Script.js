let cards=[
    {
        image:"https://i.pinimg.com/originals/d7/bd/93/d7bd934adc5e5a50da570cb1bc98e946.jpg",
        value:1,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/originals/d7/bd/93/d7bd934adc5e5a50da570cb1bc98e946.jpg",
        value:1,
        status:"closed"
    },
    {
        image:"https://flxt.tmsimg.com/assets/p8205710_p_v13_ao.jpg",
        value:2,
        status:"closed"
    },
    {
        image:"https://flxt.tmsimg.com/assets/p8205710_p_v13_ao.jpg",
        value:2,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/originals/01/e8/aa/01e8aa52b1fed0eaa3840d105c328fed.jpg",
        value:3,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/originals/01/e8/aa/01e8aa52b1fed0eaa3840d105c328fed.jpg",
        value:3,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/640x/c2/15/15/c215156bc1b330248b58381cf63ad9ad.jpg",
        value:4,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/640x/c2/15/15/c215156bc1b330248b58381cf63ad9ad.jpg",
        value:4,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/474x/1d/5c/ac/1d5cacb281df063ed6cc086ebc4d5daf.jpg",
        value:5,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/474x/1d/5c/ac/1d5cacb281df063ed6cc086ebc4d5daf.jpg",
        value:5,
        status:"closed"
    },
        
]

console.log(cards);
let temp;
for(let i=cards.length-1;i>=0;i--) {
    let j=Math.floor(Math.random()*(i+1));

    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;
}

let cardsCopy=cards;


function displayCards(data){
    let cardsString="";

    data.forEach(function(card,index){
        cardsString+=`
        
           <div class="card" style="background-image:url('${card.image}')">
                <div class=" overlay ${card.status}" onclick="openCard(${index})"></div>
           </div>
        
        `;
    });

    document.getElementById('cards').innerHTML=cardsString;
}

displayCards(cards);

let cardCount=1;
let val1=null,val2=null;
let score=0;

function openCard(index){
   console.log(cards);
    cards[index].status="opened";
    if(cardCount===1){
        val1=cards[index].value;
        cardCount++;
    }
    else if(cardCount===2){
        val2=cards[index].value;

        if(val1===val2){
            score++;
            document.getElementById('score').innerHTML=score;

            val1=null;
            val2=null;
            cardCount=1;
        }
        else {
            alert("Game Over!!");
            location.reload();
        }
    }

    displayCards(cards);
}