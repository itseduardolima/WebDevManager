import { Alert, Space } from "antd";
import { useEffect, useState } from "react";

function Message({ type, msg }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!msg) {
      setVisible(false);
      return;
    }

    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [msg]);
  return (
    <div>
      {visible && (
        <Space
          direction="vertical"
          style={{
            marginBottom: "30px",
            width: "100%",
          }}
        >
          <Alert message={msg} type={type} showIcon />
        </Space>
      )}
    </div>
  );
}

export default Message;
