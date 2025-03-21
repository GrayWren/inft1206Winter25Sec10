const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgs=["images/pic1.jpg","images/pic2.jpg","images/pic3.jpg","images/pic4.jpg","images/pic5.jpg"]
/* Declaring the alternative text for each image file */
const alts=["Closeup of a human eye","Flowing sandstone","Purple and white flowers","Hieroglyphics","Moth with black spots on its wings" ]
/* Looping through images */
for (let i =0; i<5; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', imgs[i]);
    newImage.setAttribute('alt', alts[i]);
    thumbBar.appendChild(newImage);
    thumbBar.addEventListener("click",b=>{
        displayedImage.src=b.target.src
        displayedImage.alt=b.target.alt
    })
}


/* Wiring up the Darken/Lighten button */
function darken(){
    if(btn.getAttribute("class")=="dark"){
        console.log("Darken")
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";

    }else if(btn.getAttribute("class")=="light"){
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
    }
}
btn.addEventListener("click" ,darken);
