let form = document.querySelector('form');
let image = [];

form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    let inp = document.querySelector('input');
    const YOUR_ACCESS_KEY = 'xPLxRjcnyE66qSj3pGmdhBDmYI76e3S3MnHiINm_5PQ'
    let response = await fetch(`https://api.unsplash.com/search/photos?query=${inp.value}&client_id=${YOUR_ACCESS_KEY}`);
    let result = await response.json()
    data = '';

    console.log(result);

    result.results.forEach(item => {
        data += `<img src=${item.urls.thumb}>`
        
        
    });

    document.querySelector('.div').innerHTML = data
    
   console.log(result);

})