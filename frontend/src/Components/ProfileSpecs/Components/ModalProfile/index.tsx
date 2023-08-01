import { FaEdit } from 'react-icons/fa'
import './style'
import { ColorBackgroundProfile, Content, Header, InputLabel } from './style'
import Modal from '../../../Modal';
import ColorsProfile from '../ColorsProfile';
import dark from '../../../../themes/dark';
import { useState, useEffect } from "react"
import { UserServices } from '../../../../Services/User/UserServices';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserAll } from '../../../../Services/User/UserTypes';

interface IProps {
  visible: boolean,
  closeModal(): void,
  user: UserAll,
}

function ModalProfile(props: IProps) {
  const [selectedColor, setSelectedColor] = useState('')
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [nickname, setNickname] = useState('')
  const [bio, setBio] = useState('')
  const [profilePic, setProfilePic] = useState('')

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


  function selectColor(color: string) {
    setSelectedColor(color)
  }

  const updateUser = async () => {
    await UserServices.updateUser({name, last_name: lastName, nickname, bio, profile_pic: profilePic, background_profile: selectedColor})
    notifySuccess("Os dados foram atualizados")
    props.closeModal()
  }

  const uploadImage = async (e: any) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setProfilePic(base64 as string);
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

  const updateCancel = () => {
    setName('')
    setLastName('')
    setNickname('')
    setBio('')
    setProfilePic('')
    setSelectedColor('')
    props.closeModal()
    notifyWarning("Os dados não foram atualizados")
  }

  useEffect(() => {
    setName(props.user.name)
    setLastName(props.user.last_name)
    setNickname(props.user.nickname)
    setBio(props.user.bio)
    setProfilePic(props.user.profile_pic)
    setSelectedColor(props.user.background_profile)
  },[])

  return (
    <Modal visible={props.visible} closeModal={updateCancel}>
      <form onSubmit={updateUser}>
        <Header>
          <img src={!profilePic ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRollXOZasY3SXaAepxsp8OTyPdBBU9luHkvbU-9TpqpA&s" : profilePic} alt="" />
          <label htmlFor="profile-pic"><FaEdit type="file" style={{cursor: "pointer"}}/></label>
          <input type="file" id='profile-pic' style={{display: "none", visibility: "hidden"}} onChange={e => uploadImage(e)} />
        </Header>
        <Content>
          <ColorBackgroundProfile>
            {Object.entries(dark.backgrounds).map(entry => 
              <ColorsProfile selected={selectedColor === entry[1]} handleColorSelected={() => selectColor(entry[1])} color={entry[1]}/>
            )} 
          </ColorBackgroundProfile>
          <div className='user-profile'>
            <InputLabel>
              <label htmlFor="">Name:</label>
              <input value={name} type="text" onChange={e => setName(e.target.value)}/>
            </InputLabel>
            <InputLabel>
              <label htmlFor="">Last name:</label>
              <input value={lastName} type="text" onChange={e => setLastName(e.target.value)} />
            </InputLabel>
            <InputLabel>
              <label htmlFor="">Nickname:</label>
              <input value={nickname} type="text" onChange={e => setNickname(e.target.value)} />
            </InputLabel>
            <InputLabel>
              <label htmlFor="">Bio:</label>
              <input value={bio} type="text" onChange={e => setBio(e.target.value)} />
            </InputLabel>
            <button type="submit">Submit</button>
          </div>
        </Content>
      </form>
    </Modal>
  )
}

export default ModalProfile