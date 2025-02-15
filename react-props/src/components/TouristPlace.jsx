function TouristPlace({place,price,image,visitIn}){
    return(
        <>
        <div>
            <p className="place">{place}</p>
        </div>
        <div className='container'>
            <img className ='image' src={image}></img>
            {
                <div className='price'>{price >= 12000 ? 'Place is costly' : 'Place is cheaper'}</div>
            }
            {
                 <p className="visit">{visitIn === 'Winter' ? 'winter visit' : 'summer visit'}</p>
            }
        </div>
        </>
    )
}

export default TouristPlace