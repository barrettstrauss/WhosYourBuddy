import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function Result(props) {

  return (
    <ReactCSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div>
        You buddy at work is <strong>{props.quizResult}</strong>!

      <br/>

      <button onClick={window.location.reload()}>Get A New Buddy</button>
      </div>
    </ReactCSSTransitionGroup>
  );

}

Result.propTypes = {
  quizResult: React.PropTypes.string.isRequired,
};

export default Result;
