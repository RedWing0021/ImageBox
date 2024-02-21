import React,{useState} from 'react'
import { useEffect } from 'react'
// note imp to import usestate
import './Gallery.css'

// import Img1 from '../img/ib2.jpg'
// import Img2 from '../img/imagebox1.jpg'

import './Navbar'
import { getDownloadURL,listAll, ref } from 'firebase/storage'
import { storage } from './config'
export const Gallery = () => {

  // let data=[
  //   {
  //     id:1,
  //     imgSrc:Img1,

  //   },
  //   {
  //     id:2,
  //     imgSrc:Img1,

  //   },{
  //     id:3,
  //     imgSrc:Img2,

  //   }
  // ]
  const [imgUrl,setImgUrl]=useState([])

  
//  useEffect(()=>{
//   listAll(ref(storage,"files/")).then(imgs=>{
//     console.log(imgs)
//     imgs.items.forEach((val)=>{
//       getDownloadURL(val).then(url=>{
//         setImgUrl(data=>[...data,url])
//       })
//     })
//   })
//  },[])

useEffect(() => {
  listAll(ref(storage, "files/")).then((imgs) => {
      Promise.all(imgs.items.map((item) => getDownloadURL(item)))
          .then((urls) => {
              setImgUrl(urls);
          })
          .catch((error) => {
              console.log("Error fetching download URLs:", error);
          });
  });
}, []);



  const [model,setModel]= useState(false);
  const [tempimgSrc,setTempImgSrc]= useState('');

  const getImg =(Src)=>{
    setTempImgSrc(Src);
    setModel(true);
  }

  return (
    <div>
    <div className={model ? "model open":"model"} onClick={()=> setModel(false)}>
      <img src={tempimgSrc} />
    </div>
    <div className='gallery'>
    
      {
        // data.map((item,index)=> {
        //   return(
            
        //     <div className='pics' key={index} onClick={()=>getImg(item.imgSrc)}>
        //       <img src={item.imgSrc} style={{width: '100%'}}/>
        //     </div>
        //   )
        // })


        // imgUrl.map(dataval=>{
        // return(
        // <div className='pics' key={index} onClick={()=>getImg(dataval)}>
        //   <img src={dataval} style={{width: '100%'}}/>
        // </div>)
        // })

        imgUrl.map((dataval,index)=><div className='pics' key={index} onClick={()=>getImg(dataval)}>
          <img src={dataval} width={"100%"}/>
        </div>)


      }
    </div>
    </div>
  )
}
