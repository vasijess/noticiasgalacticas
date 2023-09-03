class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"})
        shadow.appendChild(this.build())
        shadow.appendChild(this.styles())
        }

        build() {
            const componentRoot = document.createElement("div")
            componentRoot.setAttribute("class", "card")

            //canto esquerdo
            const cardLeft = document.createElement("div")
            cardLeft.setAttribute("class", "card___left")

            const author = document.createElement("span")
            author.textContent = "By " + (this.getAttribute("author") || "Anonymous")

            const linkTitle = document.createElement("a")
            linkTitle.textContent = this.getAttribute("title")
            linkTitle.href = this.getAttribute("link-url")

            const newsContent = document.createElement("p")
            newsContent.textContent = this.getAttribute("content")

            cardLeft.appendChild(author)
            cardLeft.appendChild(linkTitle)
            cardLeft.appendChild(newsContent)
            
            //canto direito
            const cardRight = document.createElement("div")
            cardRight.setAttribute("class", "card___right")

            const newsImage = document.createElement("img")
            newsImage.src = this.getAttribute("photo") || "assets/default.jpg"
            newsImage.alt = "Foto da Noticia"
            cardRight.appendChild(newsImage)

            componentRoot.appendChild(cardLeft)
            componentRoot.appendChild(cardRight)

            return componentRoot
        }

        styles () {

            const style = document.createElement("style")
            style.textContent = `
            .card {
                width: 80%;
                -webkit-box-shadow: 7px 10px 9px -3px rgba(0,0,0,0.75);
                -moz-box-shadow: 7px 10px 9px -3px rgba(0,0,0,0.75);
                box-shadow: 7px 10px 9px -3px rgba(0,0,0,0.75);
            
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
            
            .card___left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
            }
            
            a {
                margin-top: 10px;
                font-size: 25px;
                color: black;
                text-decoration: none;
                font-weight: bold;
            }
            
            p {
                color: rgb(92, 90, 90);
            }
            
            span {
                font-weight: 400;
            }

            @media (max-width: 768px) {
                .card {
                    flex-direction: column; /* Altera para uma disposição de coluna em telas menores */
                    align-items: center; /* Centraliza os elementos verticalmente */
                    width: 100%; /* Usa a largura total da tela */
                }
            
                .card___left {
                    padding-left: 0; /* Remove o recuo à esquerda */
                }
            }
            `

    return style
    }
 }

customElements.define('card-news', CardNews)