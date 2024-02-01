/* eslint-disable react/button-has-type */
import React, {
  useEffect
} from 'react'
import axios from 'axios'
import {
  useDispatch
} from 'react-redux'
import {
  addTodo
} from 'redux/todoSlice'
import TodoList from 'component/test/TodoList'

function ReduxEX() {
  const dispatch = useDispatch()
  return (
    <div>
      <h2 style={{ marginTop: '30px' }}>Redux 讀改資料</h2>
      <TodoList />
      <button onClick={() => dispatch(addTodo('test'))}>add</button>
    </div>
  )
}

function AxiosEx() {
  const [data, setData] = React.useState([])

  useEffect(() => {
    axios.get('/data/dataList.json').then((response) => {
      setData(response.data.titleData)
    })
  }, [])

  return (
    <div>
      <h2 style={{ marginTop: '30px' }}>Axios</h2>
      {data.map((item, index) => (
        <p key={`${index.toString()}`}>
          {item.title}
          {' '}
          :
          {' '}
          {item.txt}
        </p>
      ))}
    </div>
  )
}

function ViewA() {
  return (
    <>
      <h1>ViewA</h1>
      <AxiosEx />
      <ReduxEX />
    </>
  )
}

export default ViewA
