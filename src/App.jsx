import { useState, useMemo } from 'react';
import './App.css';
import Star from './Components/Star';

function App() {
  const [rating, setRating] = useState(0);
  const [hoverElement, setHoverElement] = useState(0);

  const starArray = useMemo(() => Array.from({ length: 10 }, (_, i) => i + 1), []);

  const getStarStyle = (index) => ({
    color: (hoverElement ? index < hoverElement : index < rating) ? 'yellow' : null,
  });

  return (
    <div style={{ display: 'flex', gap: '5px' }} onMouseLeave={() => setHoverElement(0)}>
      {starArray.map((_, i) => (
        <Star
          key={i + 1}
          onHover={() => setHoverElement(i + 1)}
          onToggle={() => setRating(i + 1)}
          style={getStarStyle(i)}
          value={i + 1}
        />
      ))}
    </div>
  );
}

export default App;
