import React from 'react'
import {useParams} from 'react-router-dom';
import NovelDetail from '../../components/novel-detail/novel-detail.component';

export default function NovelDetailPage(props) {
    const {novelid} = useParams()
    //console.log(novelid)
    return (
        <div className='novel-detail-page'>
            <NovelDetail novelid={novelid} />
        </div>
    )
}
