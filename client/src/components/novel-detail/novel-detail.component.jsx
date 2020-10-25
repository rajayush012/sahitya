import React,{useEffect, useState} from 'react'
import './novel-detail.styles.scss'
import Axios from 'axios';

export default function NovelDetail(props) {
    const [novel,setNovel] = useState('null')
    
    const {novelid} = props
    useEffect(() => {
        Axios
        .get(`http://localhost:8000/novels/${novelid}`)
        .then(res=> res.data)
        .then(res =>{
            setNovel(res.novel)
            })
    }, [])
    
    return (
        <div className='novel-detail'>
            <h1>Title - {novel.title}</h1>
            <h2>Genre - {novel.genre}</h2>
            <p>Status - {novel.status}</p>
            <hr />
            <p>{novel.contents && novel.contents.splice(-1)[0].content}</p>
            <p>Suggestions: 
            </p>
        </div>
    )
}
