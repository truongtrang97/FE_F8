
import html from "./core.js"
const cars=['BMV','Merchede','porche']
const issuccess = null
const output=html`
<h1>${issuccess &&'Thanh cong'}</h1>
<ul>
${cars.map(car=>`<li>${car}</li>`).join('')}
</ul>
`
console.log(output)