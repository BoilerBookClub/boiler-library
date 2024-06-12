import React, { useEffect, useRef, useState } from 'react';
import jsQR from 'jsqr';

const BarcodeScanner = ({ isActive, onBarcodeDetected }) => {
  const [error, setError] = useState(null);
  const [scanningResult, setScanningResult] = useState(null);
  const videoRef = useRef(null);
  const intervalIdRef = useRef(null);

  const handleStartScan = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } catch (err) {
      setError('Error accessing camera: ' + err.message);
    }
  };

  const handleScan = () => {
    const video = videoRef.current;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const code = jsQR(imageData.data, canvas.width, canvas.height);

    if (code) {
      onBarcodeDetected(code.data);
      setScanningResult(code.data);
      clearInterval(intervalIdRef.current);
      stopVideoStream();
    } else {
      setScanningResult('Nothing found');
    }
  };

  const stopVideoStream = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject;
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
  };

  useEffect(() => {
    if (isActive) {
      handleStartScan();
      intervalIdRef.current = setInterval(handleScan, 1000);
    } else {
      clearInterval(intervalIdRef.current);
      stopVideoStream();
    }
  }, [isActive]);

  return (
    <div>
      {error && <p>{error}</p>}
      <video ref={videoRef} autoPlay playsInline style={{ width: '100%' }} />
      {scanningResult && <p>{scanningResult}</p>}
    </div>
  );
}

export default BarcodeScanner;
