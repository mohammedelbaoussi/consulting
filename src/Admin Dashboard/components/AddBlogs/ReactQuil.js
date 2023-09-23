import { useCallback, useEffect, useRef } from 'react';
import ReactQuill from 'react-quill'
import { useDispatch } from 'react-redux';

import 'react-quill/dist/quill.snow.css'
import { onChangeQuill } from '../../../features/reactQuill/reactQuillSlice';


const Quill = ({body, setBody}) => {

    const modules = { toolbar: {container}}
    const quillRef = useRef()

    const dispatch = useDispatch()

    //Custorm image

    const handleChangeImage = useCallback(()=>{
        const input = document.createElement('input')
        input.type = 'file'
        input.accept = 'image/*'
        input.click()

        input.onchange = async()=>{

            const files = input.files

            const photo = await dispatch(onChangeQuill(files))
            const quill = quillRef.current
            const range = quill?.getEditor().getSelection()?.index

            if(range !== undefined){
                quill?.getEditor().insertEmbed(range, 'image', `${photo.payload.url}`)
            }
           
        }
    }, [dispatch])

    useEffect(()=>{
        const quill = quillRef.current
        if(!quill) return

        let toolbar = quill.getEditor().getModule('toolbar')
        toolbar.addHandler('image', handleChangeImage)
    }, [handleChangeImage])
    return ( 

            <ReactQuill
            theme="snow"
            modules={modules}
            placeholder= "write somethings..."
            onChange={e => setBody(e)}
            value={body}
            ref={quillRef}
            />

     );
}

let container = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],

  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  [{ 'direction': 'rtl' }],                         // text direction

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }],

  ['clean', 'link', 'image', 'video']            
]
 
export default Quill;