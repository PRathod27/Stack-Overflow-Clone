import React from 'react'
// import QuestionsDetails from 'QuestionDetails.jsx' 
import './QuestionDetails'
import { Link, useParams } from "react-router-dom";
import Avatar from '../../components/Avatar/Avatar'
import { deleteAnswer } from "../../actions/question";
import moment from 'moment'
import { useSelector, useDispatch } from "react-redux";




const DisplayAnswer = ({question, handleShare }) => {
  const User = useSelector((state) => state.currentUserReducer);
  const { id } = useParams();
  const dispatch = useDispatch();
  const handleDelete = (answerId, noOfAnswers) => {
    dispatch(deleteAnswer(id, answerId, noOfAnswers - 1));
  };
  return (
    <div>
          {
           question.answer?.map((ans, index) => (
           <div key={index} className='display-ans'>
                 <p>{ans.answerBody}</p>
                    <div className="question-actions-user">
                        <div>
                          <button type= 'button' onClick={handleShare}>Share</button>  
                          <button type= 'button'   onClick={() => handleDelete(ans._id, question.noOfAnswers)}>Delete</button>  
                        </div>
                        <div>
                            <p>answerd on {moment(ans.answerOn).fromNow()}</p>
                                <Link to = {`/Users/${ans.UsersId}`} className = 'user-link' style={{color :'#0086d8'}}>
                                 <Avatar backgroundColor = "orange">{ans.userAnswered.charAt(0).toUpperCase()}</Avatar>
                                           <div className=''>
                                                {ans.userAnswered}
                        </div>
                               </Link>           

                        </div>
                    </div>    
              </div>
           ))
          }
    </div>
  )
}

export default DisplayAnswer