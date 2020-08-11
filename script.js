const foot = (prev, next) => {
    const footer = document.createElement("footer")
    const header = document.createElement("header")
    const theHtml = `
    <p>
    <a href="${prev}">back</a>
    <a href="/">home</a>
    <a href="${next}">next</a>
    </p>
    `
    footer.innerHTML = theHtml
    header.innerHTML = theHtml
    document.body.appendChild(header)
    document.body.appendChild(footer)
}