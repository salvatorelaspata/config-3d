// import { useState } from 'react'
// import AWS from 'aws-sdk'
// import { useEffect } from 'react'

// const S3_BUCKET = 'import.meta.env.VITE_AWS_BUCKET_NAME'

// AWS.config.update({
//   accessKeyId: 'import.meta.env.VITE_AWS_ACCESS_KEY_ID',
//   secretAccessKey: 'import.meta.env.VITE_AWS_SECRET_ACCESS_KEY',
// })

// const myBucket = new AWS.S3({
//   params: { Bucket: S3_BUCKET },
// })

export const Uploader = () => {
  // const [progress, setProgress] = useState(0)
  // const [selectedFile, setSelectedFile] = useState(null)
  // useEffect(() => {
  //   myBucket.listBuckets(function (err, data) {
  //     if (err) {
  //       console.log('Error', err)
  //     } else {
  //       console.log('Success', data.Buckets)
  //     }
  //   })
  // }, [])

  // const handleFileInput = e => {
  //   setSelectedFile(e.target.files[0])
  // }

  // const uploadFile = file => {
  //   const params = {
  //     ACL: 'public-read',
  //     Body: file,
  //     Bucket: S3_BUCKET,
  //     Key: file.name,
  //   }
  //   myBucket
  //     .putObject(params)
  //     .on('httpUploadProgress', evt => {
  //       setProgress(Math.round((evt.loaded / evt.total) * 100))
  //     })
  //     .send(err => {
  //       if (err) console.log(err)
  //     })
  // }

  return (
    <div>
      Uploader
      {/* <div>Native SDK File Upload Progress is {progress}%</div>
      <input type='file' onChange={handleFileInput} />
      <button onClick={() => uploadFile(selectedFile)}> Upload to S3</button> */}
    </div>
  )
}
