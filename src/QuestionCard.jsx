import React, { useState } from "react";

const QuestionCard = ({title="", body="", uuid="", category=""}) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = (e) => {
    e.preventDefault();
    setShowAnswer(!showAnswer);
  }

  let content = body;
  let imageURL = '';

  if (body.includes('<a href=')) {
    const urlMatch = body.match(/<a href="([^"]*)" target="_blank">([^<]+)<\/a>/);
    if (urlMatch && urlMatch[1]) {
      imageURL = urlMatch[1];
      content = body.replace(urlMatch[0], urlMatch[2]);
    }
  }

  return (
    <>
      <div>
        <div className="card my-2">
          <div className="card-body">
            <div className="card-text">
              <p>
                <small><span className="badge bg-secondary">{category}</span></small>
              </p>
              {imageURL && <img src={imageURL} alt="Content visual representation" style={{ maxWidth: '100%' }} />}
              <p className="card-text">
                {content}
              </p>
            </div>
            {
              showAnswer ? (
                <>
                  <p><strong>{title}</strong></p>
                  <a href="#" onClick={toggleAnswer}>Hide the answer</a>
                </>
              ) : (
                <a href="#" onClick={toggleAnswer}>See the answer</a>
              )
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default QuestionCard;