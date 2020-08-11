const foot = (prev, next) => {
    const footer = document.createElement("footer")
    footer.innerHTML = `
    <p>
    <a href="${prev}">back</a>
    <a href="/">home</a>
    <a href="${next}">next</a>
    </p>
    `
    document.body.appendChild(footer)
}