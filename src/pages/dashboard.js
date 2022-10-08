import React from 'react'

const Dashboard = () => {

  // view all the messages
  // Count of all messages
  // List of old messages
  // Ability to delete old messages from database 

  // Messages have 4 states: unread, read, resolved, unresolved, important 
  

  // Timetable / Calendar 

  //skeleton done. tabs should work with href change to hashlink of component to render. so rest
  //are hidden and selected is shown. Can also e done with state
  //const [openTab, setOpenTab] = useState(1) something like this 
  //then each a tag will have function like 
  //  <a
  //    className={"blah blah blah " + (openTab === 1 ? "text-white bg-" + color + "-600" : "text-" + color + "-600 bg-white")}
  //      onClick={e => {e.preventDefault();  setOpenTab(1); }}
  //      data-toggle="tab" href="#link1" or Link to="#link1"role="tablist" >
  //      
  //then we can set our maps like so 
  //  <div className={openTab === 1 ? "block" : "hidden"} id="link1">
  //    {blahblah.map()..........}
  //   <div className={openTab === 2 ? "block" : "hidden"} id="link2">
  //    {blahblah.map()..........}



  return (
    <div className='h-screen'>

      <h1 className='w-full text-5xl underline decoration-pink my-10 py-10'>Welcome to the dashboard</h1>
      <div class="sm:hidden">
    <select id="tabs" class="bg-pink border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-pink/75 focus:border-pink/50 block w-full p-2.5">
        <option>Unread</option>
        <option>Read</option>
        <option>Resolved</option>
        <option>Unresolved</option>
        <option>Important</option>
    </select>
</div>
<ul class="hidden text-sm font-medium text-center text-white rounded-lg divide-x divide-gray-200 shadow sm:flex ">
    <li class="w-full">
        <a href="#" class="inline-block p-4 my-1 w-full bg-pink focus:ring-4 focus:ring-pink  focus:text-pink focus:bg-white hover:text-gray-400 hover:bg-pink/75 active rounded" aria-current="page">Unread</a>
    </li>
    <li class="w-full">
        <a href="#" class="inline-block p-4 my-1 w-full bg-pink focus:ring-4 focus:ring-pink  focus:text-pink focus:bg-white hover:text-gray-400 hover:bg-pink/75 rounded">Read</a>
    </li>
    <li class="w-full">
        <a href="#" class="inline-block p-4 my-1 w-full bg-pink  focus:ring-4 focus:ring-pink  focus:text-pink focus:bg-white hover:text-gray-400 hover:bg-pink/75 rounded">Resolved</a>
    </li>
    <li class="w-full">
        <a href="#" class="inline-block p-4 my-1 w-full bg-pink focus:ring-4 focus:ring-pink  focus:text-pink focus:bg-white hover:text-gray-400 hover:bg-pink/75 rounded">Unresolved</a>
    </li>
    <li class="w-full">
        <a href="#" class="inline-block p-4 my-1 w-full bg-pink focus:ring-4 focus:ring-pink  focus:text-pink focus:bg-white hover:text-gray-400 hover:bg-pink/75 rounded">Important</a>
    </li>
</ul>
     
    </div>
  )
}

export default Dashboard