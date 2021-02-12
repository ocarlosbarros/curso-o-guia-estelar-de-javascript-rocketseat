/***
 * Buscando e contando dados em Array
 * 
 * Baseado no Array de livros por Categoria abaixo, faça os seguintes desafios
 *  * Contar o número de categorias e o número de livros em cada categorias
 *  * Contar o número de autores
 *  * Mostrar livros do autor Augusto Cury
 *  * Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
 * 
 */

const booksByCategory = [
    {
        category:'Riqueza',
        books:[
        {
            title:"Os segredos da mente milionária",
            author:'T. Harv Eker',
        },
        {
            title:"O homem mais rico da Babilônia",
            author:'George S. Clason',
        },
        {
            title:"Pai rico, pai pobre",
            author:'Robert T. Kiyosaki e Sharon L. Lechter',
        }
    ]
    },
    {
        category:'Inteligência Emocional',
        books:[
            {
                title: 'Você é Insubstituível',
                author:'Augusto Cury',
            },
            {
                title: 'Ansiedade - Como enfrentar o mal do século',
                author:'Augusto Cury',
            },
            {
                title: 'Os 7 Hábitos das pessoas altamente eficazes',
                author:'Stephen R. Covey'
            }
        ]
    },
    {
        category: 'HQS e Mangás',
        books:[
        {
            title: 'Hunter X Hunter - Vol 1',
            author: 'Yoshihiro Togashi',
        },
        {
            title: 'Demon Slayer - Kimetsu No Yaiba Vol. 1',
            author: 'Koyoharu Gotouge',
        }
    ]
    }
]

function countCategories( booksByCategory ){
    numberCategories = booksByCategory.length
    return numberCategories;
}

function showNumberBooksByCategory(){
    for ( let category of booksByCategory ){
        console.log(`Total de livros da categoria ${category.category}`);
        console.log(category.books.length)
    }
}

function countAuhtors(){
    let authors = [];

    for ( let category of booksByCategory ){

        for ( let book of category.books ){
            if(authors.indexOf(book.author) == -1 ){
                authors.push(book.author);
            }
        }
    }
    console.log("Total de autores " + authors.length)
}

function booksOfAuthor(author){
    let books = [];

    for ( let category of booksByCategory ){

        for ( let book of category.books ){
            if(book.author == author ){
                books.push(book.title);
            }
        }
    }
    console.log(`Livros do autor ${author}: ${books.join(", ")}`);
}


console.log(countCategories(booksByCategory));
showNumberBooksByCategory();
countAuhtors();
booksOfAuthor('Augusto Cury');