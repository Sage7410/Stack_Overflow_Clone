import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './HomeMainbar.css'
import QuestionList from './QuestionList'
import { useSelector } from 'react-redux'

const HomeMainbar = () => {

  const location = useLocation()
  const user = null;
  const navigate = useNavigate()
  const checkAuth = () => {
    if(user === null){
      alert("login or singup to ask a question")
      navigate('/Auth')
    }else{
      navigate('/AskQuestion')
    }
  }

  const questionsList = useSelector(state => state.questionReducer)
  console.log(questionsList)

  //  var questionsList=[{
  //         _id: 1,
  //         upVotes: 3,
  //         downVotes: 2,
  //         no0fAnswers: 2,
  //         questionTitle: "What is a function?",
  //         questionBody: "It meant to be",
  //         questionTags: ["java", "node js", "react js", "mongodb"],
  //         userPosted: "mano",
  //         userId: 1,
  //         askedOn: "jan 1",
  //         answer: [{
  //           answerBody: "Answer",
  //           userAnswered: "kumar",
  //           answeredOn: "jan 2",
  //           userId: 2,
  //         }]
  //     },{
  //         _id: 2,
  //         upVotes: 3,
  //         downVotes: 2,
  //         no0fAnswers: 0,
  //         questionTitle: "What is a function?",
  //         questionBody: "It meant to be",
  //         questionTags: ["javascript", "R", "python"],
  //         userPosted: "mano",
  //         userId: 1,
  //         askedOn: "jan 1"
  //     },{
  //         _id: 3,
  //         upVotes: 3,
  //         downVotes: 2,
  //         no0fAnswers: 0,
  //         questionTitle: "What is a function?",
  //         questionBody: "It meant to be",
  //         questionTags: ["javascript", "R", "python"],
  //         userPosted: "mano",
  //         askedOn: "jan 1",
  //         answer: [{
  //           answerBody: "Answer",
  //           userAnswered: "kumar",
  //           answeredOn: "jan 2",
  //           userId: 2,
  //         }]
  //     }]
    
  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname === '/' ? <h1>Top Questions</h1> : <></>
        }
        <button onClick={checkAuth} className='ask-btn'>AskQuestion</button>
      </div>
      <div>
        {
          questionsList.data === null ?
          <h1>Loading...</h1> :
          <>
            <p>{ questionsList.data.lenght} questions</p>
            <QuestionList questionsList={questionsList.data}/>
          </>
        }
      </div>
    </div>
  )
}

export default HomeMainbar