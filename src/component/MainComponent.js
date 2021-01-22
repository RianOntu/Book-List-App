import React,{Component} from 'react';
import BookList from './listofbook/lists';
import books from '../booklist/booklist'







class MainComponent extends Component{
    state={
                 books : books,
                 showBook:true
    
      };
    
     stateChange=(newBook)=>{
      this.setState({
        books: [{bookName:newBook,writer:"Jane Doe"},
                 {   bookName:"The Da Vinci",writer:"Dan Brown"}]
    
      });
    }
    deleteBook=(index)=>{
    
    let books=this.state.books;
    books.splice(index,1);
    this.setState({
    books:books
    });
    }
    changeWithInput=(event,index)=>{
    const book={...this.state.books[index]};
    book.bookName=event.target.value;
    const books=[...this.state.books];
    books[index]=book;
    
    this.setState({books:books});
    
    
    }
    toggleBooks=()=>{
    this.setState({showBook:!this.state.showBook});
    }
    render(){

       
            let books=null;
            if(this.state.showBook){
            
                        books=<BookList books={this.state.books} 
                        delete={this.deleteBook}
                        inputname={this.changeWithInput}/>
              
            }
     
    
    
    
    return (
      <div className="App">
       
        < h1>Hello !</h1>
        <button className="toggle" onClick={this.toggleBooks}>Toggle Books</button><br></br>
     
    {books}
    
      
        
      </div>
    );
    }
}

export default MainComponent;