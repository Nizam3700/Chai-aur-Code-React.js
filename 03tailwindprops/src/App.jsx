import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Project on Profile</h1>
    <div className="flex">
     <Card username={"Nizamuddin"} about_bio="Good coder and Learner, He also digital Marketing" 
     profile_img ="https://media.istockphoto.com/id/1291318636/photo/put-more-in-get-more-out.jpg?s=612x612&w=0&k=20&c=KRvn1x6r9x9GmYMLpW6AVZzkvOA0bmn14fKle-O6CVc="/>
     <Card username={"Gayazuddin"} about_bio="Working in AK's Amma Hospital as (PRO) from 1 year"
     profile_img="https://png.pngtree.com/thumb_back/fh260/background/20230320/pngtree-handsome-young-man-on-luzern-lake-s-shore-wooden-summer-sky-photo-image_21704064.jpg"/>
     <Card username={"Akram"} 
     about_bio="He is VIP, Now improving the skills as Chef veg & Non veg"
     profile_img="https://i.pinimg.com/736x/12/ac/60/12ac606896dfc98f4806b7acababed67.jpg"
     />
     <Card username={"Salma"}
     about_bio={"She is working in office as Data Analytic"}
     profile_img={"https://m.economictimes.com/thumb/msid-93546832,width-1200,height-900,resizemode-4,imgsize-71738/working-women.jpg"}/>
     </div>
    </>
  )
}

export default App
