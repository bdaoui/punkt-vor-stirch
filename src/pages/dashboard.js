import React, {useState, useEffect} from 'react'

const Dashboard = () => {

  const [openTab, setOpenTab] = useState(1)


  const options = [
    {value: 1, text: "Unread"},
    {value: 2, text: "Read"},
    {value: 3, text: "Resolved"},
    {value: 4, text: "Unresolved"},
    {value: 5, text: "Important"}
  ]


  const [selected, setSelected] = useState(options[0].value)
  

useEffect( () =>{
  console.log( selected)
  setOpenTab(selected)
}, [selected])


  const handleChange =  async (e) => {
    setSelected(e.target.value);

  }


 
 return (
    <div>

      <h1 className='w-full text-5xl underline decoration-pink my-10 py-10'>Welcome to the dashboard</h1>
      <div class="sm:hidden">
        <select id="tabs" class="bg-pink border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-pink/75 focus:border-pink/50 block w-full p-2.5"  onChange={handleChange} value={selected} >
            {/* <option value="1">Unread</option>
            <option value="2">Read</option>
            <option value="3">Resolved</option>
            <option value="4">Unresolved</option>
            <option value="5">Important</option> */}
            {options.map(option => (
              <option key={option.value} value={option.value} >
                {option.text}
              </option>
            ))}
        </select>
    </div>

<ul class="hidden text-sm font-medium text-center text-white rounded-lg divide-x divide-gray-200 shadow sm:flex ">
    
    <li class="w-full">
        <button class="inline-block p-4 my-1 w-full bg-pink focus:ring-4 focus:ring-pink  focus:text-pink focus:bg-white hover:text-gray-400 hover:bg-pink/75 active rounded  " aria-current="page"    onClick={e => {e.preventDefault();  setOpenTab(1); }}>Unread</button>
    </li>

    <li class="w-full">
    <button class="inline-block p-4 my-1 w-full bg-pink focus:ring-4 focus:ring-pink  focus:text-pink focus:bg-white hover:text-gray-400 hover:bg-pink/75 active rounded" aria-current="page"    onClick={e => {e.preventDefault();  setOpenTab(2); }}>Read</button>
    </li>
    <li class="w-full">
    <button class="inline-block p-4 my-1 w-full bg-pink focus:ring-4 focus:ring-pink  focus:text-pink focus:bg-white hover:text-gray-400 hover:bg-pink/75 active rounded" aria-current="page"    onClick={e => {e.preventDefault();  setOpenTab(3); }}>Resolved</button>
    </li>
    <li class="w-full">
    <button class="inline-block p-4 my-1 w-full bg-pink focus:ring-4 focus:ring-pink  focus:text-pink focus:bg-white hover:text-gray-400 hover:bg-pink/75 active rounded" aria-current="page"    onClick={e => {e.preventDefault();  setOpenTab(4); }}>Unresolved</button>
    </li>
    <li class="w-full">
    <button class="inline-block p-4 my-1 w-full bg-pink focus:ring-4 focus:ring-pink  focus:text-pink focus:bg-white hover:text-gray-400 hover:bg-pink/75 active rounded" aria-current="page"    onClick={e => {e.preventDefault();  setOpenTab(5); }}>Important</button>
    </li>
</ul>

    
    <div className='h-screen bg-pink/75' id="1" >
      <p className={openTab == 1? "block" : "hidden"} > Hellow is this working?  </p>
      <p className={openTab == 2? "block" : "hidden"}>Hello World  1</p>
      <p className={openTab == 3? "block" : "hidden"}>Hello World  2</p>
      <p className={openTab == 4? "block" : "hidden"} >Hello World  3</p>
      <p className={openTab == 5? "block" : "hidden"}>Hello World  4</p>
  
    </div>
    
     
    </div>
  
  )
}

export default Dashboard