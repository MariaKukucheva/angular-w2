import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.css',
  imports     : [CommonModule],
})

export class AppComponent {
  title = 'angular-w2-2201681061';

   public index = 0;

   public tempTitle: any = { value: '' };
   public tempNote: any = { value: '' };
   public tempAuthor: any = { value: '' };
   
   public br=1;
   public tempStar=0;
   public message;

  books=true;
  showQuestion=false;
  thankYou=false;


  public bookCollection = [
    {
      title: 'Убийство в Ориент експрес',
      notes: 'В тази криминална загадка на Агата Кристи, детективът Еркюл Поаро се изправя пред сложен случай на убийство във влака "Ориент експрес"',
      author: 'Агата Кристи',
      rating: 0,
      br:0
    }, 
    {
      title: 'Гордост и предразсъдъци', 
      notes: 'В тази класическа романтична комедия на Джейн Остин, семейството Бенет се изправя пред предизвикателствата на обществото в ранното 19-о вековие. ',
      author: 'Джейн Остин',
      rating: 0,
      br:0
    },
    {
      title: 'Война и мир', 
      notes: 'Тази епична руска класика на Лев Толстой проследява съдбите на няколко аристократични семейства през периода на Наполеоновите войни. ', 
      author: 'Лев Толстой',
      rating: 0,
      br:0
    },
    {
      title: 'Лорд на мухите',
      notes: 'В тази алегорична антиутопия, деца оцеляват след самолетна катастрофа на безлюден остров, където започват да създават своеобразно общество. "Лорд на мухите" изследва теми като човешката природа, властта и дружеството чрез проницателна и потресаваща история.', 
      author: 'Уилям Голдинг',
      rating: 0,
      br:0
    },
    {
      title: '1984', 
      notes: 'Джордж Оруел', 
      author: 'В този научно-фантастичен роман, Оруел представя свят, управляван от тоталитарен режим, където наблюдението и манипулацията на индивидуалността са повсеместни'     ,
      rating: 0,
      br:0}
  ];

  public processInputBookNote(input) {
    this.tempNote = input.target;
  }

  public processInputBookTitle(input) {
    this.tempTitle = input.target;
  }
  public processInputBookAuthor(input) {
    this.tempAuthor = input.target;
  }

  public processNextBook(star) {
    this.updateRating(star);
    
    this.processSaveBookData();

    this.resetTempData();

    this.index++;

    if (this.index >= this.bookCollection.length) {
      this.final();      
    }
    
  }
  
  private updateRating(rating) {

    if (this.bookCollection[this.index].rating >0) {
          this.tempStar = this.bookCollection[this.index].rating * (this.bookCollection[this.index].br);
          this.bookCollection[this.index].br++;
          this.bookCollection[this.index].rating = (this.tempStar+rating)/(this.bookCollection[this.index].br);
       }  
       else{
          this.bookCollection[this.index].rating=rating; 
          this.bookCollection[this.index].br++;
       }

    console.log(this.bookCollection[this.index]);
    this.tempStar=0;
  }

  public processSaveBookData() {
    const editedTitle = this.tempTitle.value;
    const editedNote = this.tempNote.value;
    const editedAuthor = this.tempAuthor.value;
  
    if(editedTitle !== '') {
      this.bookCollection[this.index].title = editedTitle;
    }
    if(editedNote !== '') {
      this.bookCollection[this.index].notes = editedNote;
    }
    if(editedAuthor !== '') {
      this.bookCollection[this.index].author = editedAuthor;
    }
  }
  

  private resetTempData() {
    this.tempTitle.value  = '';
    this.tempNote.value   = '';
    this.tempAuthor.value = '';

  }

  public final()
  {     
    this.showQuestion=true;
    this.books=false;       
  }

  public ok(){   
    this.books=false;  
    this.showQuestion=false;
    this.thankYou=true;
  }

  public repeat(){
    this.index = 0; 
    this.books=true;  
    this.showQuestion=false;
    this.thankYou=false;
  }
}