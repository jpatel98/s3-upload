const imageForm = document.querySelector("#imageForm")
const imageInput = document.querySelector("#imageInput")

imageForm.addEventListener("submit", async event => {
    event.preventDefault()
    const file = imageInput.files[0]

    // get secure url from our server
    const { url } = await fetch("/get-s3-url").then(res => res.json())

    // post the image directly to the s3 bucket
    await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "multipart/form-data"
        },
        body: file
    })

    // Just want the path prior to the ? in the url
    const imageUrl = url.split('?')[0]
    const img = document.createElement("img")
    img.src = imageUrl
    document.body.appendChild(img)
})