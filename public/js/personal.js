
const form = document['persona-form']
// console.log('-----------',form)
form.addEventListener('submit', (event)=>{
    event.preventDefault()
    const {title, descriptions, location, imgLink} = event.target
    console.log('-----------',title)
   const bady = JSON.stringify({title: title.value, descriptions:descriptions.value , location: location.value, imgLink: imgLink.value })
    fetch('/personal', {
        method: 'POST',
        body: bady ,
        headers: {
            'Content-Type': 'application/json'

        }

    })
})




