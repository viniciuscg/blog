import { FaRegImage } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import { UserAll } from '../../../../Services/User/UserTypes'
import './style'
import { Container, Wrapper, InputLabel, UploadImg } from './style'
import { useState } from "react"
import { PostServices } from '../../../../Services/Post/PostServices'
import { toast } from 'react-toastify';

interface IProps {
  user: UserAll
}

function CreatePost({user}: IProps) {
  const [img, setImg] = useState('')
  const [text, setText] = useState('')
  const [msgErrorCreatePost, setMsgErrorCreatePost] = useState('')

  
  const notifySuccess= (msg: string) => toast.success(msg, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

  const notifyWarning = (msg: string) => toast.warn(msg, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

  const createPost = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      await PostServices.createPost({text, img})
      notifySuccess("Post realizado")
      
    } catch (error: any) {
      setMsgErrorCreatePost(error.message)
      notifyWarning(msgErrorCreatePost)
    }
  }

  const uploadImage = async (e: any) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setImg(base64 as string);
  };

  const convertBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const clearImg = () => {
    setImg('')
  }

  return (
    <form onSubmit={createPost}>
      <Wrapper>
        <Container>
          <img src={user.profile_pic} alt="" />
          <textarea value={text} onChange={e => setText(e.target.value)} wrap="hard" name="reading_text" maxLength={5000} rows={1} placeholder="What's on your mind..." />
          <InputLabel>
            <label htmlFor="profile-pic"><FaRegImage type="file" style={{cursor: "pointer"}}/></label>
            <input type="file" id='profile-pic' style={{display: "none", visibility: "hidden"}} onChange={e => uploadImage(e)} />
          </InputLabel>
        </Container>
        {img ?
          <UploadImg>
            <span onClick={clearImg}><IoMdClose/></span>
            <img src={img} alt="" />
          </UploadImg>
          :
          <UploadImg>
          </UploadImg>
        }
        <button type='submit'>Post</button>
      </Wrapper>
    </form>
  )
}

export default CreatePost

