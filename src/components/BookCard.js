import React from 'react'

const BookCard = ({book, isLibrary, onClick}) => {
    const disabled = (book.owners.length - book.using.length > 0) || !isLibrary 

    return (
        <div className="d-inline-block">
            <div style = {{ backgroundColor: disabled ? "rgb(250, 250, 250)" : "#f0eae4" }} 
                className={"text-left p-3 m-3 rounded-4 bw2 shadow h-75 " + (disabled ? "grow" : "")}
                onClick={() => disabled && onClick()}>

                
                <div className="text-center mb-4" ><img alt='Cover' src={book.image} width={150} className={"shadow"}/></div>
                <p style={{ fontSize:'12px', backgroundColor: "#8ac5ed", marginTop: '-15px', marginBottom: '5px' }} className={"text-center p-1 rounded-4 bw2 shadow h-75"}>{book['genre']}</p>
                {/*below this*/}
                <b><p style={{ fontSize:'16px', marginBottom: '3px', maxWidth: '150px', wordWrap: 'break-word' }}>{book.title}</p></b>
                <p style={{ fontSize:'12px', marginTop: '0', marginBottom: '5px', wordWrap: 'break-word'}}>{book.author}</p>

                { isLibrary &&
                    <footer className={((book.owners.length - book.using.length > 0) ? "text-success" : "text-danger")}>
                        <div className="text-center" ><b>{book.owners.length - book.using.length} / {book.owners.length}</b></div>
                    </footer>
                }
            </div>
        </div>
    );
}

export default BookCard;