import { useRef, useState } from "react";
import "./styles.css";

const SelectFileButton = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const fileInput = useRef();

  // const onFileUpload = () => {
  //   const formData = new FormData();
  //   formData.append("myFile", selectedFile, selectedFile?.name);

  //   console.log(selectedFile);

  //   axios.post("api/uploadfile", formData);
  // };

  const selectFile = (e) => {
    fileInput.current.click();
    setSelectedFile(e.target.files[0]);
  };

  const fileData = () => {
    if (selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>
          <p>File Name: {selectedFile.name}</p>
          <p>File Type: {selectedFile.type}</p>
          <p>Last Modified: {selectedFile.lastModifiedDate.toDateString()}</p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };

  return (
    <div className="btn_container">
      <input type="file" onChange={selectFile} ref={fileInput} />
      {fileData()}
    </div>
  );
};

export default SelectFileButton;
