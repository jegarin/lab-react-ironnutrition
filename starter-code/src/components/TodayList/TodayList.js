import React from 'react'

const TodayList = ({todayList}) => {
  const list = todayList.map((product) => {
    return (
      <li>{product.name}</li>
    )
  })
  
  return (
    <div>
      <h1>Today's Foods</h1>
      <ul>
        {list}
      </ul>
      <p>Total cal</p>
    </div>
  )
}

export default TodayList