export const checkImage =(file)=>{
    const types = ['image/png', 'image/jpeg']
    let err = ''
    if(!file)  {
      err = 'file does not exist.'
      return err
    }
  
    if(file.size > 1024*1024) {
      err = 'the larget image size is 1mb'
      return err
    }
    if(!types.includes(file.type))
    err = "The image type is png/jpeg"
    return err;
  }
  
  export const ImageUpload= async(file)=>{
     const formData= new FormData()
     formData.append('file', file)
     formData.append('upload_preset', 'ftxijxsj')
     formData.append('cloud_name', 'dss4gkqck')
  
     const res = await fetch('https://api.cloudinary.com/v1_1/dss4gkqck/image/upload', {
  
      method: "POST",
      body: formData
     })


  
     const data = await res.json()
    
     return {public_id: data.public_id, url: data.url};
  
  }