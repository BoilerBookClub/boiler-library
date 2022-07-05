import React from 'react'

const BookCard = ({book, isLibrary, onClick}) => {
    const disabled = (book.copies - book.using.length > 0) || !isLibrary 

    return (
        <div className="d-inline-block">
            <div style = {{ backgroundColor: (disabled) ? "#FFFFFF" : "#f0eae4" }} 
                className={"text-center p-3 m-2 rounded border bw2 shadow h-75 " + (disabled ? "grow" : "")} 
                onClick={() => disabled && onClick()}>

                <p style={{ fontSize:'12px' }}>{book['genre']}</p>
                <img alt='Cover' src={book.image} width={70} className="mb-4"/>
                <h3>{book['title']}</h3>
                <h6>{book['author']}</h6>

                { isLibrary &&
                    <footer className={((book.copies - book.using.length > 0) ? "text-success" : "text-danger")}>
                        <b>Available: {book.copies - book.using.length} / {book.copies}</b>
                    </footer>
                }
            </div>
        </div>
    );
}

export default BookCard;