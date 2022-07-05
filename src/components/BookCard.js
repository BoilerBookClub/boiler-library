import React from 'react'
import cover from '../assets/covertemplate.png'

const BookCard = ({book, onClick}) => {
    return (
        <div className="d-inline-block">
            <div style = {{ backgroundColor: "#FFFFFF" }} className='text-center p-3 m-2 rounded border bw2 shadow h-75 grow' onClick={onClick}>
                <img alt='Cover' src={cover} width={70} className="mb-4"/>
                <div>
                    <h3>{book['title']}</h3>
                    <p>By {book['author']}</p>
                    <p>{book['genre']}</p>
                </div>
            </div>
        </div>
    );
}

export default BookCard;