import React from 'react'
import PostDate from '@components/Post/PostDate'
import ReadingTime from '@components/Post/ReadingTime'

const Metadata = ({ metadata: { date, numWords } }: MetadataProps): JSX.Element => {
  return (
    <>
      <PostDate date={date} />
      {numWords && !isNaN(numWords) && <ReadingTime numWords={numWords} />}
    </>
  )
}

export default Metadata
