import { useState } from 'react';
import { Portal } from 'react-portal';
import { useDropzone } from 'react-dropzone';
import './App.css';

function App() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const {getRootProps, getInputProps, open, acceptedFiles} = useDropzone();

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div className="App">
      <header>
        <button id="open-button" onClick={() => setIsPopoverOpen(true)}>Open Popover</button>
      </header>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
      {isPopoverOpen && (
        <Portal node={document.getElementById('open-button')}>
          <div className="Popover">
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <button onClick={() => {
                open();
                setIsPopoverOpen(false);
              }}>Upload</button>
            </div>
          </div>
        </Portal>
      )}

    </div>
  );
}

export default App;
