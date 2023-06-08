import React, { useState } from 'react'

function Home() {

  const [client,setClient] = useState({email:'',password:''})
  const [isLogIn,setIsLogIn] = useState(false)
  const [showForm,setShowForm] = useState(false)
  const [todo,setTodo] = useState('')
  const [taskArray,setTaskArray] = useState([])

  const handleShowForm = () =>{
    setShowForm(true)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    let gettingValue = new FormData(e.target)
    setClient({email:gettingValue.get('email')})
    setClient({password:gettingValue.get('password')})
    console.log(client)
    setIsLogIn(true)
    console.log(isLogIn)
    setShowForm(false)

  }


  const handleTODO = (e) =>{
    e.preventDefault()
    setTaskArray([...taskArray,todo])
    e.target[0].value = ""
  }

  const handleLogOut = () =>{
    setShowForm(false)
    setIsLogIn(false)
    setTaskArray([])
  }

  return (
    <div className='home'>
      
      {
        showForm ? 
          <form onSubmit={handleFormSubmit} className='form'>
            <label htmlFor='email'>Enter Email</label>
            <input type='text' name='email' id='email' placeholder='xyz@gmail.com' required/>
            <label htmlFor='email'>Enter Password</label>
            <input type='password' name='password' id='password' placeholder='****' required/>
            <button type='submit'>Submit</button>
          </form>

          : 

          isLogIn === false
             ? <h3>Please <span onClick={handleShowForm}>LOGIN</span></h3>  
             : <div>
                <h2>Welcome to TODO App</h2>
                <form onSubmit={handleTODO}>
                  <label htmlFor='todo'>Enter Some Task</label>
                  <input placeholder='Enter the task you want for the day' onChange={(e)=>{setTodo(e.target.value)}}/>
                  <button type='submit' className='submit'>ADD TASK</button>
                </form>
                <div className='toShowTask'>
                  {
                    taskArray.map((item,index)=>{
                      return (
                        <div key={index}> 
                          <h4>{item}</h4>
                          <button onClick={()=>{
                              taskArray.splice(index,1)
                              setTaskArray(taskArray => [...taskArray])
                          }}>Delete</button>
                        </div>
                        
                      )
                    })
                  }
                </div>
                <h4>You can <button id='logoutButton' onClick={handleLogOut} className='logout'>logout</button> if you are done</h4>

             </div> 
        
      }
      
      
    </div>
  )
}

export default Home