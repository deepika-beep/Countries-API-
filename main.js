let searchBtn = document.getElementById('search-btn')
let countryInp = document.getElementById('country-inp')

searchBtn.addEventListener('click',()=> {
  let countryName = countryInp.value;
  let finalUrl =`https://restcountries.com/v3.1/name/${countryName}?fullText=true`
console.log(finalUrl)
fetch(finalUrl)
.then((response) =>response.json())
.then((response) =>{
  console.log(response[0])
   console.log(response[0].capital[0])
    console.log(response[0].flags.svg)
    console.log(response[0].name.common)
    console.log(response[0].continents[0])
console.log(Object.keys(response[0].currencies)[0])
console.log(Object.values(response[0].languages))
console.log(Object.values(response[0].languages).toString().split(',').join(', '))

result.innerHTML = `<img src="${response[0].flags.svg}" class='flag-img'>
<h2>${response[0].name.common}</h2>
<div class = 'wrapper'>
<div class = 'data-wrapper'>
<h4>Capital:</h4>
<span>${response[0].capital[0]}</span>
</div>
</div>

</div>
<div class = 'wrapper'>
<div class = 'data-wrapper'>
<h4>Continent:</h4>
<span>${response[0].continents[0]}</span>
</div>
</div>

<div class = 'wrapper'>
<div class = 'data-wrapper'>
<h4>Population:</h4>
<span>${response[0].population}</span>
</div>
</div>
`
}).catch(() => {
  if(countryName == ''){
    result.innerHTML =`<h3>cannot be empty</h3>`
  }else{
    result.innerHTML = `<h3>enter a valid name</h3>`
  }
})

})
