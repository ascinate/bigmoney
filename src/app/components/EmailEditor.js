'use client';

import React, { useRef } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import to disable SSR
const EmailEditor = dynamic(() => import('react-email-editor'), { ssr: false });

const EmailEditorClient = () => {
  const emailEditorRef = useRef(null);

  const exportHtml = () => {
    emailEditorRef.current?.editor.exportHtml((data) => {
      const { design, html } = data;
      console.log('Exported HTML:', html);
      console.log('Exported Design:', design);
    });
  };

  const saveDesign = () => {
    emailEditorRef.current?.editor.saveDesign((design) => {
      console.log('Saved Design:', design);
    });
  };

  return (
    <div>
      <button onClick={exportHtml} style={{ marginRight: '10px' }}>
        Export HTML
      </button>
      <button onClick={saveDesign}>
        Save Design
      </button>
      <div style={{ height: '600px' }}>
        <EmailEditor ref={emailEditorRef} />
      </div>
    </div>
  );
};

export default EmailEditorClient;
