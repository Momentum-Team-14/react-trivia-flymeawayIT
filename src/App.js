import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
const [catID, setCatID] = useState(false)
  
return (
  <>
      <h1>The Trivia Game</h1>
      <ContentDisplay catID={catID} setCatID={setCatID} />
    </>
  );
}

const ContentDisplay = ({quiz, setQuiz}) => {
  if (!quiz) {
    return(<DisplayCategories setQuiz={setQuiz} />)
  }
  return(<takeQuiz setQuiz={setQuiz} />)
}

const takeQuiz = ({setCatID}) => {
  return(
    <>
    <div><button onClick={() => {setCatID(false)}}> Return to Categories </button></div>
    </>
  )
}
const DisplayCategories = ({setCatID}) => {
  const [categories, setCategories] = useState([])
  
  useEffect(() => {
  console.log('useEffect runs')
  axios
  .get('https://opentdb.com/api_category.php')
  .then((res) => setCategories(res.data.trivia_categories))
  }, [])

  return (
    <>
      <h2>Select a Category</h2>
      <div className='cat-list'>
        {console.log('categories runs')}
        {categories.map((cat) => (
        <div><button key={cat.id} onClick={() => {setCatID(false)}}> 
        {cat.name} </button>
        </div>
        ))} 
      </div>
    </>
  )
}

export default App;
