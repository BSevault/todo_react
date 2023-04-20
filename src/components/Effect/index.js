import React, { useState, useEffect } from 'react';
import useAlert from '../../hooks/useAlert';

function Effect () {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  useEffect( () => setCount2(count2+1), [count])

  useAlert("Mon composant Effect est détruit", count2);

  return (
    <div>
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}>
        Cliquez ici
      </button>
      <p>Test : {count2} </p>
    </div>
  );
}

export default Effect