import React from 'react'

const DashboardMessage = (data) => {
  return (
    <div className='flex flex-column md:flex-row h:screen'>
            <div>
                <h1>Messages</h1>
                <ul>
                {data.map( message => {     
                    return <li >
                        <h3>{message.subject}</h3>
                        <h4>{message.email}</h4>
                    </li>
                }) 

                }
                </ul>
            </div>


            <div>
                
            </div>

        

        
    
    </div>
  )
}

export default DashboardMessage