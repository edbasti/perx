import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  dataSource: any;
  data: any;
  
  displayedColumns= ["id", "title", "image"];

  constructor() { }

  ngOnInit(): void {
    this.data = {
      data: [
        {
          "id": "1",
          "type": "books",
          "links": {
            "self": "http://www.example.com/books/1"
          },
          "attributes": {
            "urn": "urn:perx:nginterview::123456789:question/1",
            "created_at": "2019-06-05T17:42:58.876Z",
            "updated_at": "2019-06-05T17:42:58.876Z",
            "content": "The Great Gatsby",
            "properties": null,
            "display_properties": {
              "type": "Hard cover",
              "image": "https://images-na.ssl-images-amazon.com/images/I/51vv75oglyL._SL160_.jpg"
            }
          },
          "relationships": {
            "authors": {
              "links": {
                "self": "http://www.example.com/books/1/relationships/authors",
                "related": "http://www.example.com/books/1/authors"
              }
            },
            "publishers": {
              "links": {
                "self": "http://www.example.com/books/1/relationships/publishers",
                "related": "http://www.example.com/books/1/publishers"
              }
            }
          }
        },
        {
          "id": "2",
          "type": "books",
          "links": {
            "self": "http://www.example.com/books/2"
          },
          "attributes": {
            "urn": "urn:perx:nginterview::123456789:question/2",
            "created_at": "2019-06-05T17:42:58.898Z",
            "updated_at": "2019-06-05T17:42:58.898Z",
            "content": "Moby Dick",
            "properties": null,
            "display_properties": {
              "type": "Hard cover",
              "image": "https://images-na.ssl-images-amazon.com/images/I/41h1CVFjjdL._SL160_.jpg"
            }
          },
          "relationships": {
            "authors": {
              "links": {
                "self": "http://www.example.com/books/2/relationships/authors",
                "related": "http://www.example.com/books/2/authors"
              }
            },
            "publishers": {
              "links": {
                "self": "http://www.example.com/books/2/relationships/publishers",
                "related": "http://www.example.com/books/2/publishers"
              }
            }
          }
        },
        {
          "id": "3",
          "type": "books",
          "links": {
            "self": "http://www.example.com/books/3"
          },
          "attributes": {
            "urn": "urn:perx:nginterview::123456789:question/3",
            "created_at": "2019-06-05T17:42:58.936Z",
            "updated_at": "2019-06-05T17:42:58.936Z",
            "content": "Hamlet",
            "properties": null,
            "display_properties": {
              "type": "Soft cover",
              "image": "https://images-na.ssl-images-amazon.com/images/I/51dhOwUuI3L._SL160_.jpg"
            }
          },
          "relationships": {
            "authors": {
              "links": {
                "self": "http://www.example.com/books/3/relationships/authors",
                "related": "http://www.example.com/books/3/authors"
              }
            },
            "publishers": {
              "links": {
                "self": "http://www.example.com/books/3/relationships/publishers",
                "related": "http://www.example.com/books/3/publishers"
              }
            }
          }
        },
        {
          "id": "4",
          "type": "books",
          "links": {
            "self": "http://www.example.com/books/4"
          },
          "attributes": {
            "urn": "urn:perx:nginterview::123456789:question/4",
            "created_at": "2019-06-05T17:42:58.953Z",
            "updated_at": "2019-06-05T17:42:58.953Z",
            "content": "Lolita",
            "properties": null,
            "display_properties": {
              "type": "Soft cover",
              "image": "https://images-na.ssl-images-amazon.com/images/I/41beWU7rn8L._SL160_.jpg"
            }
          },
          "relationships": {
            "authors": {
              "links": {
                "self": "http://www.example.com/books/4/relationships/authors",
                "related": "http://www.example.com/books/4/authors"
              }
            },
            "publishers": {
              "links": {
                "self": "http://www.example.com/books/4/relationships/publishers",
                "related": "http://www.example.com/books/4/publishers"
              }
            }
          }
        },
        {
          "id": "5",
          "type": "books",
          "links": {
            "self": "http://www.example.com/books/5"
          },
          "attributes": {
            "urn": "urn:perx:nginterview::123456789:question/5",
            "created_at": "2019-06-05T17:42:58.974Z",
            "updated_at": "2019-06-05T17:42:58.974Z",
            "content": "Wuthering Heights",
            "properties": null,
            "display_properties": {
              "type": "Soft cover",
              "image": "http://ecx.images-amazon.com/images/I/51-6ApKTHaL._SL160_.jpg"
            }
          },
          "relationships": {
            "authors": {
              "links": {
                "self": "http://www.example.com/books/5/relationships/authors",
                "related": "http://www.example.com/books/5/authors"
              }
            },
            "publishers": {
              "links": {
                "self": "http://www.example.com/books/5/relationships/publishers",
                "related": "http://www.example.com/books/5/publishers"
              }
            }
          }
        },
        {
          "id": "6",
          "type": "books",
          "links": {
            "self": "http://www.example.com/books/6"
          },
          "attributes": {
            "urn": "urn:perx:nginterview::123456789:question/6",
            "created_at": "2019-06-05T17:42:58.994Z",
            "updated_at": "2019-06-05T17:42:58.994Z",
            "content": "Anna Karenina",
            "properties": null,
            "display_properties": {
              "type": "Soft cover",
              "image": "http://ecx.images-amazon.com/images/I/51vPf2CfSEL._SL160_.jpg"
            }
          },
          "relationships": {
            "authors": {
              "links": {
                "self": "http://www.example.com/books/6/relationships/authors",
                "related": "http://www.example.com/books/6/authors"
              }
            },
            "publishers": {
              "links": {
                "self": "http://www.example.com/books/6/relationships/publishers",
                "related": "http://www.example.com/books/6/publishers"
              }
            }
          }
        },
        {
          "id": "7",
          "type": "books",
          "links": {
            "self": "http://www.example.com/books/7"
          },
          "attributes": {
            "urn": "urn:perx:nginterview::123456789:question/7",
            "created_at": "2019-06-05T17:42:59.010Z",
            "updated_at": "2019-06-05T17:42:59.010Z",
            "content": "Gulliver's Travels",
            "properties": null,
            "display_properties": {
              "type": "Soft cover",
              "image": "https://images-na.ssl-images-amazon.com/images/I/61TNd4Ta8NL._SL160_.jpg"
            }
          },
          "relationships": {
            "authors": {
              "links": {
                "self": "http://www.example.com/books/7/relationships/authors",
                "related": "http://www.example.com/books/7/authors"
              }
            },
            "publishers": {
              "links": {
                "self": "http://www.example.com/books/7/relationships/publishers",
                "related": "http://www.example.com/books/7/publishers"
              }
            }
          }
        },
        {
          "id": "8",
          "type": "books",
          "links": {
            "self": "http://www.example.com/books/8"
          },
          "attributes": {
            "urn": "urn:perx:nginterview::123456789:question/8",
            "created_at": "2019-06-05T17:42:59.037Z",
            "updated_at": "2019-06-05T17:42:59.037Z",
            "content": "The Stories of Anton Chekhov",
            "properties": null,
            "display_properties": {
              "type": "Hard cover",
              "image": "https://images-na.ssl-images-amazon.com/images/I/51Oq8JfXh4L._SL160_.jpg"
            }
          },
          "relationships": {
            "authors": {
              "links": {
                "self": "http://www.example.com/books/8/relationships/authors",
                "related": "http://www.example.com/books/8/authors"
              }
            },
            "publishers": {
              "links": {
                "self": "http://www.example.com/books/8/relationships/publishers",
                "related": "http://www.example.com/books/8/publishers"
              }
            }
          }
        },
        {
          "id": "9",
          "type": "books",
          "links": {
            "self": "http://www.example.com/books/9"
          },
          "attributes": {
            "urn": "urn:perx:nginterview::123456789:question/9",
            "created_at": "2019-06-05T17:42:59.134Z",
            "updated_at": "2019-06-05T17:42:59.134Z",
            "content": "David Copperfield",
            "properties": null,
            "display_properties": {
              "type": "Hard cover",
              "image": "http://ecx.images-amazon.com/images/I/51-GTHVUv7L._SL160_.jpg"
            }
          },
          "relationships": {
            "authors": {
              "links": {
                "self": "http://www.example.com/books/9/relationships/authors",
                "related": "http://www.example.com/books/9/authors"
              }
            },
            "publishers": {
              "links": {
                "self": "http://www.example.com/books/9/relationships/publishers",
                "related": "http://www.example.com/books/9/publishers"
              }
            }
          }
        }
      ]
    };
    const mappedData = this.data.data.map((item: any) => {
      return {
        id: item.id,
        title: item.attributes.content,
        image: item.attributes.display_properties.image
      }
    })
    this.dataSource = mappedData;
    this.dataSource = new MatTableDataSource(mappedData);
  }

  doFilter(e: KeyboardEvent) {
    const element = e.currentTarget as HTMLInputElement;
    
    this.dataSource.filter = element?.value.trim().toLocaleLowerCase();
  }

}
