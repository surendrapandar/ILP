import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [file, setFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!file) {
      console.error("No file selected");
      return;
    }

    const url = 'http://localhost:5000/upload';
    const formData = new FormData();
    formData.append('file', file);

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
      onUploadProgress: function (progressEvent: any) {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        setUploadProgress(percentCompleted);
      }
    };

    axios.post(url, formData, config)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error uploading file: ", error);
      });
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>React File Upload with Progress</h1>
        <input type="file" onChange={handleChange} />
        <button type="submit">Upload</button>
        <progress value={uploadProgress} max="100"></progress>
      </form>
    </div>
  );
}

export default App;
