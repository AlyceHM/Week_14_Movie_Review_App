//a component that holds all the movies on the app

import React from "react" 
import Movies from "./Movies"

export default class MovieList extends React.Component {
   
    render() {


    
        return(
            
                <div className = "movieList container">

                    <Movies {...
                    {id: 1,
                    key: 1,
                    title: "Clueless",
                    image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2KgavuSioQw2615d7L4Sen77-NLROig5P4g&usqp=CAU" alt="Movie Promo"></img>,
                    summary: "Cher Horowitz surfs the highs and lows of high school and mid 90's fashion.",
                    released: "1995",
        }
    } />

                    <Movies {...
                    {id: 2,
                    key: 2,
                     title: "Reality Bites",
                    image: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdWW0P7vDi-z0DGXqmMdX_2IF8joeWjKgzTw&usqp=CAU" alt="movie promo"></img>,
                    summary: "Close twenty-something friends navigate relationships and careers after college.",
                    released: "1994",
        }
    } />
                </div>
        
          
        )

    }
}
