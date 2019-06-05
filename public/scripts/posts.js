axios.get('http://localhost:3000/novels/allnovels')
.then((respose)=>{
    console.log(respose);


    
})
.catch((err)=>{
    console.log(err);
})