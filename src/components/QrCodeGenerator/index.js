import React from "react";
import QRCode from "react-qr-code";

const QrCodeGenerator = (props) => {
  const { value, size } = props;

  return (
    <QRCode
      size={size}
      //style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
      className="w-full max-w-full"
      value={value}
      viewBox={`0 0 ${size} ${size}`}
    />
  );
};
export default QrCodeGenerator;
