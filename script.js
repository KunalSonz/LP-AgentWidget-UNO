//const { get } = require("https");

const searchForm = document.querySelector('.form');
const container = document.querySelector('.movieDisca');



// const renderMovie = async (mName) => {
//   let uri = 'https://www.omdbapi.com/?apikey=cf60bf6d&t=';

//   if(mName){
//     uri += mName;
//   }

//   const res = await fetch(uri);
//   const movies = await res.json();
  
//   console.log(res);
//   console.log(res.url);
//   console.log(movies);

//   let template = `
//   <div class="movieDiscb">
//   <p>Title : </p><p>${movies.Title}</p>
//   </div>
//   <div class="movieDiscb">
//     <p>Year : </p><p>${movies.Year}</p>
//   </div>
//   <div class="movieDiscb">
//     <p>Director : </p><p>${movies.Director}</p>
//   </div>
//   <div class="movieDiscb">
//     <p>imdbRating :</p><p>${movies.imdbRating}</p>
//   </div>
//   `
//   container.innerHTML = template;
// }

const renderMovie = async (mName) => {
  let uri = 'https://demo.techmbs.in/LP_POC/Api/LPService/ordermgment?ac_id=2020011131';

  if(mName){
    uri += mName;
  }

  const res = await fetch(uri, {
    mode:'cors',
    headers:{
      'Access-Control-Allow-Origin':'*'
    }
  });
  const movies = await res.json();
  
  console.log(res);
  console.log(res.url);
  console.log(movies);

  let template = `
  <div class="movieDiscb">
  <p>Title : </p><p>${movies.Title}</p>
  </div>
  <div class="movieDiscb">
    <p>Year : </p><p>${movies.Year}</p>
  </div>
  <div class="movieDiscb">
    <p>Director : </p><p>${movies.Director}</p>
  </div>
  <div class="movieDiscb">
    <p>imdbRating :</p><p>${movies.imdbRating}</p>
  </div>
  `
  container.innerHTML = template;
}



searchForm.addEventListener('submit' , (e) => {
  e.preventDefault();
  mName = searchForm.term.value.trim();
  //console.log(mName);
  renderMovie(mName);

})


window.addEventListener('DOMContentLoaded', () => {
  renderMovie();

});


  

