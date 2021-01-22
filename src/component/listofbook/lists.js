import React from 'react';
import Person from '../representational/component';


const BookList=(props)=>{
    console.log(props)
    return (
       props.books.map((book,index)=>{
            return (
            <Person 
            Book_Name={book.bookName}
            Writer={book.writer}
            delete={()=>{props.delete(index)}}
            inputname={(event)=>props.inputname(event,index)}
            />
    
            );
          })
    );
}
export default BookList;