import React, { useState, useEffect } from 'react';
import { useTheme } from '@/react-app/hooks/useTheme';

interface DocumentPageProps {
  title: string;
  filePath: string;
}

export default function DocumentPage({ title, filePath }: DocumentPageProps) {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const theme = useTheme();

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
    <div className={`min-h-screen font-sans ${theme === 'dark' ? 'bg-primary-dark text-primary-light' : 'bg-primary-light text-primary-dark'}`}>
      <main className="p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className={`text-4xl md:text-5xl font-black mb-8 pb-4 border-b-2 ${theme === 'dark' ? 'text-highlight-dark border-emerald-500/30' : 'text-highlight-light border-emerald-500/30'}`}>
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
      </main>
    </div>
  );
}
