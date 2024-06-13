import { Fragment, useEffect, useReducer, useState } from "react"
// import { IMAGE_PATH } from '../../constant/path'
const HomeLayout = () => {

//   const [data, setData] = useState(['asdfasdfas', 'asdfasdfasdfasdfsa'])
//   useEffect(() => {
//     setData(null)
//   }, [])

  // Types
  const INCREASE = 'increase'
  const RESET = 'reset'

  // Reducer
  const inititalCount = 0


  const handleCounter = (state, action) => {
    switch (action.type) {
      case INCREASE:
        return state + action.payload
        break;
      case RESET:
        return inititalCount
        break;
      default:
        return state
    }
  }

  const [count, setCount] = useReducer(handleCounter, inititalCount)

  // 
  const increaseAction = () => {
    return setCount({
      type: INCREASE,
      payload: 10
    })
  }

  const resetAction = () => {
    return setCount({
      type: RESET
    })
  }


  return <Fragment>
    <h1>Home Layout!!! - {count}</h1>
    <button onClick={() => increaseAction()}>Increase</button>
    <button onClick={() => resetAction()}>Reset</button>
    {data && data.map((e) => {
      return <div>{e}</div>
    })}
    {/* <img src={${IMAGE_PATH}logo512.png} alt="Logo" /> */}
  </Fragment>
}

export default HomeLayout