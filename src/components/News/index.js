import React from 'react'

export default ({
  handlerRequest,
  data
}) => {

  return (
    <div>
      test news
      <button onClick={handlerRequest}>request</button>
      {Object.keys(data).length !== 0 &&
        data.map((i) => (
          <div key={i.createDate}>
            <h2>{i.title}</h2>
            <h4>{i.content}</h4>
          </div>
        ))}
    </div>
  )
}