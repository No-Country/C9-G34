import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/conect";
import { v4 as uuidv4 } from 'uuid';

async function useUploadImage(uploadFile, idPost) {
  const [file] = uploadFile.files;

  if (file && file.type.includes("image")) {
    const storageRef = ref(storage, `Post-${idPost}/${uuidv4()}`);

    await uploadBytes(storageRef, file);

    const url = await getDownloadURL(storageRef);

    return url;
  } else {
    return "No es imagen";
  }
}

export default useUploadImage;