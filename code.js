
const button = document.getElementById("button")
button.addEventListener("click", getImgXJour)

function afficherImg(url){
    const img = document.getElementById("img");
    img.src=url;
}

function getImgXJour(){
    const date = document.getElementById("date").value
    const oReq = new XMLHttpRequest();


    oReq.onreadystatechange = () => {
        if (oReq.readyState === 4 && oReq.status == 200) {
            const response = JSON.parse(oReq.responseText);
            afficherImg(response.url)
        }
      }
      

    const link ="https://api.nasa.gov/planetary/apod?api_key=VIOQ2zJ8xXLVCHu0NiIyNu4RyygOgdrqJVNuD1hV&date=" + date


    oReq.open("GET", link, true);
    oReq.send()


}