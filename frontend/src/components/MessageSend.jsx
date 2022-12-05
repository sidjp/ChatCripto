import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const MessageSend = ({
  inputHendle,
  newMessage,
  sendMessage,
}) => {
  return (
    <div className="message-send-section">
      {
        <div className="message-type">
          <textarea
            onChange={inputHendle}
            name="message"
            onKeyPress={inputHendle}
            id="message"
            placeholder="Aa"
            className="form-control"
            value={newMessage}
            wrap="soft"
          />
        </div>
      }

      {
        <div onClick={sendMessage} className="file">
          <FaPaperPlane />
        </div>
      }

      <div className="emoji-section"></div>
    </div>
  );
};

export default MessageSend;