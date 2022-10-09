import React, {useState} from 'react'

const DashboardMessage = ({data}) => {
    const [toggle, setToggle] = useState([false, ""])
    const [chosenMessage, setChosenMessage] = useState({})


    // select Message and Set Toggler

    const handleShowMessage = ( id) => {
        setToggle([!toggle[0], id])
        const filteredMessage = data.filter(message => message._id === toggle[1] ) 
        setChosenMessage(filteredMessage[0])


    }

  return (
    <div className='flex flex-column md:flex-row h:screen'>
            <div>
                <h1>Messages</h1>
                <ul>
                {data.map( message => {     
                    return <li key={message._id}>
                        <h3>{message.subject}</h3>
                        <h4>{message.email}</h4>
                        <button onClick={ () => handleShowMessage(message._id) } >See More</button>
                    </li>
                }) 

                }
                </ul>
            </div>


            <div>

                {toggle[0] && 
                
                <div>
                        <h1>{chosenMessage?.name} {chosenMessage?.surname}</h1>
                        <h2>{chosenMessage?.subject}</h2>
                        <p>{chosenMessage?.message}</p>

                        <p>{chosenMessage?.email}</p>                    
                        <p>{chosenMessage?.phone}</p>                    
                </div>
                
                }

            </div>

        

        
    
    </div>
  )
}

export default DashboardMessage