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
            <h1>{novel.title}</h1>
            <h2>{novel.genre}</h2>
            <p>{novel.status}</p>
        </div>
    )
}
