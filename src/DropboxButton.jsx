import { useState } from "react";
import DropboxChooser from "react-dropbox-chooser";

const API_KEY = import.meta.env.VITE_DROPBOX_APP_KEY;

const DropboxButton = () => {
  const [url, setUrl] = useState("");
  const [fileName, setFileName] = useState("");

  const handleSuccess = (files) => {
    console.log(files);
    setUrl(files[0].thumbnailLink);
    setFileName(files[0].name);
    console.log("files", files);
  };

  return (
    <>
      <DropboxChooser
        appKey={API_KEY}
        success={handleSuccess}
        cancel={() => console.log("close")}
        multiselect={false}
      />
      <br />
      <br />
      {url && <img src={url} alt={fileName} width="50%" />}
      {fileName && <h3>{fileName}</h3>}
    </>
  );
};

export default DropboxButton;
