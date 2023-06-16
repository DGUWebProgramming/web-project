import React from 'react'
import { Link } from 'react-router-dom'

import { MiniInfo } from '../index'
import './index.css'

//localStorage에서 최근 본 공연 일부 몇 개 가져오기

const RecentlyViewed = () => {
  const visitedKeys = Object.keys(localStorage).filter(key =>
    key.includes('performanceDetail-')
  )
  const visitedKeysId = visitedKeys.map(key => key.split('-')[1])
  visitedKeys.reverse()
  console.log(visitedKeys)
  const recentId = visitedKeysId[visitedKeysId.length - 1]
  let visitedData = visitedKeys.map(
    key => JSON.parse(localStorage.getItem(key)).dbs.db
  )
  visitedData = visitedData.slice(Math.max(visitedData.length - 5, 0))
  return (
    <div className='recentlyViewed-container'>
      <div className='rv-title'>최근 본 공연 목록</div>
      <div className='miniInfoList'>
        {visitedData.map(data => (
          <Link to={`/detail/${recentId}`}>
            <MiniInfo performance={data[0]}></MiniInfo>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default RecentlyViewed
