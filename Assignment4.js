//Given Data

const ratingData = [
    {restaurant: 'KFC', rating:5}, 
    {restaurant: 'Burger King', rating:4}, 
    {restaurant: 'KFC', rating:3}, 
    {restaurant: 'Domino', rating:2}, 
    {restaurant: 'Subway', rating:3},
     {restaurant: 'Domino', rating:1}, 
     {restaurant: 'Subway', rating:4}, 
     {restaurant: 'Pizza Hut', rating:5}

    ]
    ///a. Calculate the Average rating for all the restaurants.
 
    //capture restaurant names
    const restNames=ratingData.map(i=>i.restaurant)
   
    //take unique restaurant names
    const underScore=require('underScore')

    const uRestNames=underScore.uniq(restNames)

  //ratings for each unique restaurant

    const restaurantData=[]


    uRestNames.forEach(eachRestaurant=>{
        const restRatings=ratingData.filter(i=>i.restaurant===eachRestaurant)
                                    .map(i=>i.rating)

         //calculate avg ratings                           
     const noOfOccurences=restRatings.length

     const sum=restRatings.reduce((a,b)=>a+b)

     const avgRating=sum/noOfOccurences
     restaurantData.push({restaurant:eachRestaurant,
                        averageRating:avgRating})
    })
    
    console.log(restaurantData) 


    /// b.List of all restuarants with average rating greater than 4

    const restAvg4Plus= restaurantData.filter(i=>i.averageRating >4)
                                       .map(i=>i.restaurant)

    console.log(restAvg4Plus)  
    