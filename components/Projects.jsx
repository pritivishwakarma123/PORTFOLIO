import React from 'react'
import waetherimg from "../img/weatther.jpeg"
import joke  from "../img/joke.jpeg"
import quiz from "../img/quiz.jpeg"
const Projects = () => {
  return (
    <div className='project' id='projects'>
    <h1>Projects</h1>
    <div className='card'>
      <img src={waetherimg} alt='Weather API' />
      <div className='card-content'>
        <h2>1: Weather API</h2>
        <p>The Weather App is a React.js-based application that provides real-time weather information for any city worldwide. By integrating with a weather API, the app fetches and displays current weather data, including temperature, humidity, wind speed, and weather conditions.</p>
      </div>
    </div>
    <div className='card'>
      <img src={joke} alt='Random Joke Generator' />
      <div className='card-content'>
        <h2>2: Random Joke Generator</h2>
        <p>This project is a fun and interactive web application that retrieves random jokes from a public API using JavaScript. The jokes are displayed in a sleek and responsive interface designed with HTML and CSS. Users can generate a new joke with a single click, thanks to the seamless integration of the API. This project showcases skills in API consumption, DOM manipulation, and responsive design.</p>
      </div>
    </div>
    <div className='card'>
      <img src={quiz} alt='JavaScript Quiz' />
      <div className='card-content'>
        <h2>3: JavaScript Quiz</h2>
        <p>This project is an interactive quiz application built with React.js, designed to test and improve users' knowledge of JavaScript. The app features a dynamic set of questions, with multiple-choice answers that users can select. After submitting the quiz, users receive instant feedback on their answers, along with their overall score. The quiz is designed with a responsive and user-friendly interface, ensuring a smooth experience on both desktop and mobile devices. This project demonstrates proficiency in React components, state management, and conditional rendering.</p>
      </div>
    </div>
  </div>
  )
}

export default Projects
