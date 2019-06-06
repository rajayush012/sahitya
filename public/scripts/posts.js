var novs = [];

axios.get('http://localhost:3000/novels/allnovels')
.then((respose)=>{
    console.log(respose);
    respose.data.novs.forEach((item)=>{
        novs.push(item);
        var st = "";
        if(item.status==='complete'){
          st = "green-st";
        }else{
          st = "red-st";
        }
        document.getElementById('lidisp').innerHTML+=`<a class="m-5" href="/novels/${item._id}" style="text-decoration:none">
        <div class="card">
          <div class="card-body">
            <h2 class="car-title">${item.title}</h2>
            <p class="card-subtitle lead">by - ${item.mainauthor.name}</p> 
            <p class="">Idea - ${item.idea}</p>    
            <p class="">Status - <span class="${st}">${item.status}</span></p>

          </div>
        </div>
      </a>`
    });
    

})
.catch((err)=>{
    console.log(err);
})


function filterNovels(element){
    var x = element.value;
    
    document.getElementById('lidisp').innerHTML = "";
    var i = 0;
    novs.forEach((item)=>{
      if(item.status==='complete'){
        st = "green-st";
      }else{
        st = "red-st";
      }
      
        if(item.genre === x || x === 'all'){
        document.getElementById('lidisp').innerHTML+=`<a class="m-5" href="/novels/${item._id}" style="text-decoration:none">
        <div class="card">
          <div class="card-body">
            <h2 class="car-title">${item.title}</h2>
            <p class="card-subtitle lead">by - ${item.mainauthor.name}</p> <!--add XHR Req here for username-->
            <p class="">Idea - ${item.idea}</p>
            <p class="">Status - <span class="${st}">${item.status}</sapn></p>
          </div>
        </div>
      </a>`
        }
        
    });

}

