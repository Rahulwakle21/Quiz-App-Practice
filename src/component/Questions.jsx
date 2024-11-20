import React from 'react'

const Questions = ({question,onAnsClick}) => {
  return (
    <div className='question-comp'>
      <h2>{question.question}</h2>
      <ul className='options'>
        {
            question.ansOption.map((opt)=>{
               return(
                <>
                 <li key={opt.text}>
                    <button onClick={()=>onAnsClick(opt.isCorrect)}>
                        {opt.text}
                    </button>
                </li>
                </>
               )
            })
        }
      </ul>
    </div>
  )
}

export default Questions
