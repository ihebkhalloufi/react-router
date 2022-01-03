import { useState } from 'react';
import MainNavbar from './Components/MainNavbar';
import MovieCard from './Components/MovieCard';
import AddMovies from './Components/AddMovies';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import './App.css';
import MovieDetails from './Components/MovieDetails';
import { v4 as uuidv4 } from 'uuid';
function App() {
  const [movies, setMovies] = useState(
    
    [
     {
  id: uuidv4(),
  
    title: 'Venom: Let There Be Carnage',
    discription:'Distributed by Sony Pictures Releasing, it is the second film in Sonys Spider-Man Universe and the sequel to Venom 2018 In the film, Brock and the alien symbiote Venom must face serial killer Cletus Kasady Harrelson after he becomes the host of an offshoot of Venom named Carnage.',
    trailer:'https://youtu.be/-FmWuCgJmxo',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDAfIPtd8gdl6iYs0rHZDbpzEo98OkyLDa5GKbo9ePgwQhkgXBBFX37qfXsw1TWbuR_m0&usqp=CAU',
    date: 2021,
    rate: 4
    
},

{
  id: uuidv4(),
    title: 'Nobody',
    discription:'When two thieves break into his suburban home one night, Hutch declines to defend himself or his family, hoping to prevent serious violence. His teenage son, Blake (Gage Munroe, The Shack), is disappointed in him and his wife, Becca (Connie Nielsen, Wonder Woman), seems to pull only further away.',
    trailer:'https://youtu.be/wZti8QKBWPo',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0TOTPfB6qEuthoZ9OyjIwOqafQmbs8Ace8C8TFppn5h-iLk48Vdd_m48ilHmq808ksXU&usqp=CAU',
    date: 2021,
    rate: 4
},
{
  id: uuidv4(),
    title: 'Zootopia',
    discription:'Taking place in the titular city where anthropomorphic mammals coexist, it tells a story of an unlikely partnership between a rabbit police officer and a red fox con artist as they uncover a criminal conspiracy involving the disappearance of predators.',
    trailer:'https://youtu.be/jWM0ct-OLsM',
    image: 'https://is3-ssl.mzstatic.com/image/thumb/Video118/v4/8b/89/0e/8b890ec5-4ccd-573b-c079-4cd8fb1eda4f/pr_source.jpg/268x0w.jpg',
    date: 2016,
    rate: 5
},
{
  id:uuidv4(),
  discription:'Taking place in the titular city where anthropomorphic mammals coexist, it tells a story of an unlikely partnership between a rabbit police officer and a red fox con artist as they uncover a criminal conspiracy involving the disappearance of predators.',
  trailer:'https://youtu.be/JfVOs4VSpmA',
    title: 'Spider man no way home',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWTEEwl8NmwPJlBE7-8aBTqhikzZ7P6ykp6Q&usqp=CAU',
    date: 2022,
    rate: 5
},
{

  id:uuidv4(),
    title: 'Im legend',
    discription:'It is set in New York City after a virus, which was originally created to cure cancer, has wiped out most of mankind, leaving Neville as the last human in New York, other than nocturnal mutants. Neville is immune to the virus, and he works to develop a cure while defending himself against the hostile mutants',
    trailer:'https://youtu.be/dtKMEAXyPkg',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/Video/b7/ca/6a/mzi.xiydnopk.jpg/268x0w.jpg',
    date: 2007,
    rate: 4
},
{
  id:uuidv4(),
    title: 'Captain Marvel',
    discription:'As Captain Marvel, Carol has a straightforward superhero powerset: She s super strong and super durable, and she can fly and hang out in the vacuum of space without dying; you know, Superman stuff. But she can also absorb any kind of energy and release it as concentrated blasts, usually from her hands.',
    trailer:'https://youtu.be/Z1BCujX3pw8',
    image: 'https://thepowerzone.files.wordpress.com/2019/04/affiche-film-captain-marvel-2019.jpg?w=736',
    date: 2019,
    rate: 3
},
{
  id: uuidv4(),
    title: 'Prophetie',
    discription:'Quand la terre entière est menacée par de multiples catastrophes naturelles qu un auteur avait prédites dans ses écrits, un éditeur et une archéologue partent à la recherche de l écrivain dans l espoir d obtenir des réponses concernant la situation. Ils retrouvent bientôt son corps et une étrange baguette, permettant de voir l avenir  ',
    trailer:'https://youtu.be/AJ06-taMyuA',
    image: 'http://fr.web.img3.acsta.net/c_215_290/medias/nmedia/18/92/93/38/20225969.jpg',
    date: 2012,
    rate: 1
},
{
   id: uuidv4(),
    title: 'RESISTANCE',
    discription:'The story of mime Marcel Marceau as he works with a group of Jewish boy scouts and the French Resistance to save the lives of ten thousand orphans during World War II.',
    trailer:'https://youtu.be/8aZBQCH8IT0',
    image: 'https://m.media-amazon.com/images/M/MV5BMTUwNTE1OTQ5Ml5BMl5BanBnXkFtZTgwNzI5MzcwMzE@._V1_.jpg',
    date: 2011,
    rate: 2
}
])
const[newMovie,setNewMovie] = useState ({
  id: Math.random(),
  title: " ",
  image: " ",
  date: " ",
  rate: 0 ,
});

const[search,setSearch] = useState (" ");
const[rating , setRating] = useState(0);
const[toggle, setToggle] =useState (false)
const handleRating = (newRating) =>
setRating(newRating) ;
const handleSearch= (search) => {
  setSearch(search.target.value);
};
const handleModal = () => {
  setToggle(!toggle);
if ( newMovie.title.length !== 0 && newMovie.image.length !== 0 ) {
  setMovies ([...movies,newMovie]); setToggle(!toggle);
}
else {setToggle(!toggle)}
};
const handleAddMovie = (e) => {
(setNewMovie( e.target.title)) 
}
  return (
    
    <div className="App">
          <Router>
      <MainNavbar search={search} 
      handleSearch={handleSearch}
       rating={rating}
        handleRating={handleRating}
        handleModal={handleModal}/>
        <Switch>
          <Route path="/about/:id">
            <MovieDetails movies={movies}/>
            </Route>
            <Route exact path="/">
          <AddMovies 
    toggle={toggle} 
    handleModal={handleModal}
    newMovie={newMovie}
    handleAddMovie={handleAddMovie}/>
     <MovieCard movies={movies} search={search}/>
    </Route>
    
       </Switch>
       </Router></div>
  );
}

export default App;
