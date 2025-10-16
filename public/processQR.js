export function processQRCodeData(qrData) {
  if (!qrData || typeof qrData !== "string") {
    console.error("Invalid QR data received:", qrData);
    return [];
  }

  // Split by comma, trim spaces from each part
  const parts = qrData.split(",").map(item => item.trim());

  // Example logging — remove or customize this for your use case
  console.log("✅ QR Code Parts:", parts);

  // You can also destructure if you know the format
  // const [id, name, subject, status] = parts;

  return parts;
}