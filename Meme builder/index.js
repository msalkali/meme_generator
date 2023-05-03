const generateMemeBtn = document.querySelector(".meme-generator .generate-meme-button");
const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-generator .meme-title");
const memeAuthor = document.querySelector(".meme-generator .meme-author");


const generateMeme =() =>{
    fetch("https://meme-api.herokuapp.com/gimme/wholesomememes")
    .then((response)=>response.json())
    .then(data=>{
        updateDetails(data.url,data.title,data.author);
    }
    )
}

const updateDetails= (url, title, author)=>{
memeImage.setAttribute("src", url);
memeTitle.innerHTML= title;
memeAuthor.innerHTML = `meme created by: ${author}`;
};



generateMemeBtn.addEventListener("click",generateMeme);

