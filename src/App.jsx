import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [quote, setQuote] = useState('');


  const fetchQuote = async () => {
    try {
      const res = await axios.get('https://dummyjson.com/quotes');
      const quotes = res.data.quotes;
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const selectedQuote = quotes[randomIndex];
      setQuote(selectedQuote.quote);
      setAuthor(selectedQuote.author);
    } catch (err) {
      console.log('Failed to fetch data:', err);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'serif', textAlign: 'center' }}>
      <blockquote style={{ fontSize: '1.5rem', fontStyle: 'italic' }}>
        {quote}
      </blockquote>

      <button
        onClick={fetchQuote}
        style={{
          marginTop: '2rem',
          padding: '0.5rem 1rem',
          fontSize: '1rem',
          cursor: 'pointer',
          borderRadius: '6px',
          backgroundColor: '#eee',
        }}
      >
        New Quote
      </button>
    </div>
  );
};

export default App;
