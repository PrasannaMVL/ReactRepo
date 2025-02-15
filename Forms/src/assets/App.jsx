import { useRef, useState } from "react";
import Card from "./card";
import {useForm} from 'react-hook-form'


//BMI Index Calculation
function App() {
    let [users, setUsers] = useState([])
    let {register, handleSubmit, reset} = useForm();
    function bmiSubmitHandler(data) {
        setUsers([...users, data])
        reset()
    }
    return(
        <>
            <form action="" className="gap-1 mt-2 w-full m-2 flex justify-center" onSubmit={handleSubmit(bmiSubmitHandler)}>
            <input {...register('name')} type="text" placeholder="Name" className="p-2 outline-none border"/>
                <input {...register('weight')} className="p-2 outline-none border" type="text" placeholder="weight in kilograms"></input>
                <input {...register('height')} className="p-2 outline-none border" type="text" placeholder="height in metres squared"></input>
                <input {...register('img')} type="text" placeholder="Image" className="p-2 outline-none border"/>
                <input type="Submit" value="Calculate BMI" className="p-2 outline-none bg-black text-white px-4 rounded-md"></input>
            </form>
            <div className="mx-auto flex gap-3 flex-wrap h-screen w-full items-center justify-center">
                {
                    users.length > 0 ? users.map(user => <Card weight={user.weight} height={user.height} img={user.img}/>) : <h1>No Users</h1>
                }
            </div>
        </>
    )
}
//Using react-hoot-form - useForm()
// function App() {
//     const {register, handleSubmit, reset} = useForm()
//     function submitHandler(data){
//         console.log(data);
//         reset()
//     }
//     return(
//         <div>
//             <form action="" onSubmit={handleSubmit(submitHandler)}>
//             <input type="text" {...register('task')} className='outline-none border m-2 p-2 rounded' placeholder="task" />
//             <button className="bg-black text-white p-2 border rounded">Add Task</button>
//             </form>
//         </div>
//     )
// }

// //Using controller components - useState
// function App() {
//     let [value, setValue] = useState({task: ""})
//     function submitHandler(e){
//         e.preventDefault();
//         console.log(value)
//     }
//     return(
//         <div>
//             <form action="" onSubmit={submitHandler}>
//                 <input type="text" className='outline-none border m-2 p-2 rounded' placeholder="task" onChange={(event) => setValue({task: event.target.value})} />
//                 <button className="bg-black text-white p-2 border rounded">Add Task</button>
//             </form>
//         </div>
//     )
// }


//This is using useRef
// function App(){
//     let taskInput = useRef()
//     function handleSubmit(e) {
//         e.preventDefault();
//         console.log(taskInput.current.value)
//     }
//     return (
//         <div>
//         <form className="" onSubmit = {handleSubmit}>
//             <input ref= {taskInput} className='outline-none border m-2 p-2 rounded' type="task" placeholder='task'/>
//             <button className="bg-black text-white p-2 border rounded">Add Task</button>
//         </form>
//         </div>
//     )
// }

export default App;