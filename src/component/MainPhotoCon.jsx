import React from 'react'
import ImageCard from './ImageCard'

const MainPhotoCon = () => {
  let userImgUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMvEbKIGsZCbu1m-rgbPgukFUgHg2SiDfuLw&s'
  let imgLink = 'https://images.pexels.com/photos/28082020/pexels-photo-28082020/free-photo-of-man-standing-in-green-jacket.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
  let imgLink3 = 'https://cdn.pixabay.com/photo/2023/09/03/12/16/lizard-8230594_640.png'
  return (
    <div id='gallery-con' className='w-full px-8 pb-8'>
      <ImageCard userImg={userImgUrl} imgUrl={imgLink3}/>
      <ImageCard userImg={userImgUrl} imgUrl={imgLink}/>
      <ImageCard userImg={userImgUrl} imgUrl={imgLink}/>
      <ImageCard userImg={userImgUrl} imgUrl={imgLink3}/>
      <ImageCard userImg={userImgUrl} imgUrl={imgLink3}/>
      <ImageCard userImg={userImgUrl} imgUrl={imgLink}/>
      <ImageCard userImg={userImgUrl} imgUrl={imgLink3}/>
      <ImageCard userImg={userImgUrl} imgUrl={imgLink}/>
      <ImageCard userImg={userImgUrl} imgUrl={imgLink3}/>
      <ImageCard userImg={userImgUrl} imgUrl={imgLink}/>
    </div>
  )
}

export default MainPhotoCon

