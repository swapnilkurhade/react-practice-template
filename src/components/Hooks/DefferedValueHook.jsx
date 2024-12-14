

import React, { useState, useDeferredValue, useMemo } from 'react';

function ExpensiveFilter({ query }) {
  // Simulate expensive filtering
  const items = useMemo(() => {
    console.log('Filtering items...');
    return Array(10000)
      .fill(null)
      .map((_, index) => `Item ${index}`)
      .filter((item) => item.toLowerCase().includes(query.toLowerCase()));
  }, [query]);

  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function DefferedValueHook() {
  const [search, setSearch] = useState('');
  const deferredSearch = useDeferredValue(search); // Delay the update

  return (
    <div>
      <input
        type="text"
        placeholder="Type to search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <p>Search Term: {search}</p>
      <ExpensiveFilter query={deferredSearch} />
    </div>
  );
}

export default DefferedValueHook;

