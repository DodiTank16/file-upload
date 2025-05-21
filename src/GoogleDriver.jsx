import React, { useState, useEffect } from "react";
import useDriverPicker from "react-google-drive-picker";

const GoogleDriver = () => {
  const [openPicker, data] = useDriverPicker();
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState("");

  const handleOpenPicker = () => {
    openPicker({
      clientId: import.meta.env.REACT_APP_GOOGLE_CLIENT_ID,
      developerKey: import.meta.env.REACT_APP_GOOGLE_DEVELOPER_KEY,
      viewId: "DOCS",
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: false,

      // customViews: customViewsArray, // custom view

      callbackFunction: (data) => {
        if (data.action === "cancel") {
          console.log("User clicked cancel/close button");
        }
        console.log("data", data);
        setSelectedFile(data?.docs?.[0]?.embedUrl);
        setFileName(data?.docs?.[0]?.name);
      },
    });
  };
  useEffect(() => {
    if (data) {
      data?.docs?.map((doc) => console.log("doc", doc.name));
    }
  }, [data]);

  const displayFileInfo = () => {
    if (!selectedFile) return null;
    return (
      <div>
        <img src={selectedFile} alt={fileName} />
        <p>File Name: {fileName}</p>
      </div>
    );
  };

  return (
    <div>
      <button
        aria-label="upload"
        onClick={handleOpenPicker}
        // classesName={classes.btnDrive}
        size="large">
        {/* <img
          src={icon}
          alt="google drive icon"
          // classesName={classes.imgStyle}
        />{" "} */}
        Google Drive
      </button>

      {displayFileInfo()}
    </div>
  );
};

export default GoogleDriver;
