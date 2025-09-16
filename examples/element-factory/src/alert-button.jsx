import { useState } from 'react';

export const AlertButton = ({ handleSubmit = () => {}, defaultMessage }) => {
  const [message, setMessage] = useState(defaultMessage);

  return (
    <div>
      <label>
        Message
        <input
          type="text"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </label>

      <button onClick={() => handleSubmit(message)}>Trigger Alert</button>
    </div>
  );
};
