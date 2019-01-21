import React from 'react';

const inputForm = (props) => {
  return(
  <div className="container">
    <div className="row">
      <div className="col">
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">snake_case</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
            value={props.snake_case}
            onChange={props.convertToCamel}>
            </textarea>
        </div>
      </div>
      <div className="col">
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">camelCase</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
            value={props.camelCase}
            onChange={props.convertToSnake}>
          </textarea>
        </div>
      </div>
    </div>
  </div>
  );
}

export default inputForm;
