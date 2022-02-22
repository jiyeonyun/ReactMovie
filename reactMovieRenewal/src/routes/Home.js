import { useState,useEffect } from 'react';
import Header from '../components/header';
import { Group_obj, Group_key_arr } from "../atom/navbar";
import Music from '../components/music';

function Home(){
  return (
        <div>
        <Header />
        <div className='contentsWrap'>
                {
                    Group_key_arr.map((key) => {
                        return (
                          <div key={key}>
                          <Music key={key} Group_obj={Group_obj}/>
                          </div>
                        )
                    })
                }
        </div>
            </div>
      )
              }

export default Home;