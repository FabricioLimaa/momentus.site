import React, { useState, useEffect } from 'react';

interface DocumentPageProps {
  title: string;
  filePath: string;
}

export default function DocumentPage({ title, filePath }: DocumentPageProps) {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(filePath)
      .then(response => response.text())
      .then(text => {
        setContent(text);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching document:', error);
        setContent('Failed to load document.');
        setLoading(false);
      });
  }, [filePath]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-8 pb-4 border-b-2 border-emerald-500/30">
          {title}
        </h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <pre className="whitespace-pre-wrap text-lg leading-relaxed">
            {content}
          </pre>
        )}
      </div>
    </div>
  );
}
