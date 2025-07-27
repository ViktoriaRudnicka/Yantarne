const audio = document.getElementById("audio")
const action = document.getElementById("action")
const soungTitle = document.getElementById("soung-title")

document.addEventListener("DOMContentLoaded", async () => {
    const data = await fetchSong()
    console.log(data);
    soungTitle.textContent = data.title

    audio.setAttribute("src", data.url)
    setInterval(async () => {
        const data = await fetchSong()
    console.log(data);
    soungTitle.textContent = data.title
    }, 5000)

})

let isPlaing = false
action.addEventListener("click", ()=>{
isPlaing ? audio.pause() : audio.play();
action.textContent = isPlaing ? "Play" : "Pause"
isPlaing = !isPlaing
})


async function fetchSong() {
    try {
        const respons = await axios.get("https://complex.in.ua/status-json.xsl?mount=/yantarne")
        const data = await respons.data
        return {
            url: data.icestats.source.listenurl,
            title: data.icestats.source.title
        }


    } catch (error) {
        console.log(error);

    }
}

