import { useState } from 'react'
import AWS from 'aws-sdk'

const S3_BUCKET = import.meta.env.VITE_AWS_BUCKET_NAME

AWS.config.update({
  accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
  secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
})

const myBucket = new AWS.S3({
  params: { Bucket: S3_BUCKET },
})

export const Uploader = () => {
  console.log('import.meta.env', import.meta.env)

  const [progress, setProgress] = useState(0)
  const [selectedFile, setSelectedFile] = useState(null)

  const handleFileInput = e => {
    setSelectedFile(e.target.files[0])
  }

  const uploadFile = file => {
    const params = {
      ACL: 'public-read',
      Body: file,
      Bucket: S3_BUCKET,
      Key: file.name,
    }

    myBucket
      .putObject(params)
      .on('httpUploadProgress', evt => {
        setProgress(Math.round((evt.loaded / evt.total) * 100))
      })
      .send(err => {
        if (err) console.log(err)
      })
  }

  return (
    <div>
      <div>Native SDK File Upload Progress is {progress}%</div>
      <input type='file' onChange={handleFileInput} />
      <button onClick={() => uploadFile(selectedFile)}> Upload to S3</button>
    </div>
  )
}
