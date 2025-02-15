function Card({name, weight, height, img}){
    return (
        <div className="bg-neutral-100  w-40 text-center rounded-lg p-3">
                <img className="w-16 h-16 rounded-full inline object-cover" src={img}></img>
                <h1 className="mt-2">{name}</h1>
                <p className="text-sm text-neutral-800 overflow-hidden text-ellipsis">BMI is: {Math.floor(weight/height)}</p>
        </div>
    )
}

export default Card;