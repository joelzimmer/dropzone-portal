import { useState } from 'react';
import { Portal } from 'react-portal';
import { useDropzone } from 'react-dropzone';
import './App.css';

function App() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isDivOpen, setIsDivOpen] = useState(false);
  const {getRootProps, getInputProps, open, acceptedFiles} = useDropzone();

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div className="App">
      <div className="Header">
        <button id="open-popover-button" onClick={() => setIsPopoverOpen(true)}>Open Popover</button>
        <button id="open-div-button" onClick={() => setIsDivOpen(true)}>Open Div</button>
        <button onClick={() => open()}>Just Open</button>
      </div>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
      {isPopoverOpen && (
        <Portal node={document.getElementById('open-popover-button')}>
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
      <div className="Popover" style={{ display: isDivOpen ? 'block' : 'none', top: 0, background: '#ccc' }}>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <button onClick={() => {
                open();
                // setIsDivOpen(false);
              }}>Upload</button>
            </div>
          </div>

    </div>
  );
}

export default App;
