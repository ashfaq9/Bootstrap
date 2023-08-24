import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Registration from './registration'
import Bootstrap from './boootsrap'
import Autocomplete from './autocomplete/autocomplete'
import Edit from './edit'
import View from './view'
import img from './dark.png'
import img2 from './asba.jpg'
import img3 from './razi.jpg'
import img4 from './fayiz.jpg'
import Localinsert from './localview/localinsert'
import Localedit from './localview/localedit'

import Localview from './localview/localview'
import CountrySelect from './autocomplete/countryselect'
import Singleview from './localview/singleview'
export default function router() {

  const Pdetails=[{
    id:11,
    name:"Shaheed",
    title:"Web Developer",
    place:"Puttur",
    image:<img src={img} className="img-fluid" alt="..."></img>
},{
    id:12,
    name:"Asba",
    title:"React Developer",
    place:"Uppinangady",
    image:<img src={img2} className="img-fluid" alt="..."></img>
},{
    id:13,
    name:"Razi",
    title:"Software Developer",
    place:"Sullia",
    image:<img src={img3} className="img-fluid" alt="..."></img>
},
{
  id:14,
  name:"Fayiz",
  title:"Software Developer",
  place:"Padil",
  image:<img src={img4} className="img-fluid" alt="..."></img>
}
];
console.log({Pdetails})
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Registration/>}></Route>
        <Route exact path='/boootsrap' element={<Bootstrap Pdetails={Pdetails}/>}></Route>
        <Route exact path='/autocomplete' element={<Autocomplete/>}></Route>
        <Route exact path='/boootsrap/edit/:id' element={<Edit/>}></Route>
        <Route exact path='/boootsrap/view/:id' element={<View  Pdetails={Pdetails}/>}></Route>
        <Route exact path='/localview/localview' element={<Localview  Pdetails={Pdetails}/>}></Route>
        <Route exact path='/localview/localviewinsert' element={<Localinsert  Pdetails={Pdetails}/>}></Route>
        <Route exact path='/countryselect' element={<CountrySelect  Pdetails={Pdetails}/>}></Route>
        <Route exact path='view/:id' element={<Singleview/>}></Route>
        <Route exact path='/localview/localview/edit/:id' element={<Localedit/>}></Route>

      </Routes>
      </BrowserRouter>
    </div>
  )
}
