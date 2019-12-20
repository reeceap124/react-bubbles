import React, { useState, useEffect } from "react";
import {axiosAuth} from '../utils/axiosAuth'

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(() => {
    axiosAuth()
    .get('/colors')
    .then(res=>{
      console.log('get colors res', res)
      setColorList(u=> [...u, ...res.data])
    })
    .catch(err=> console.log('get colors err', err))
  }, [])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
