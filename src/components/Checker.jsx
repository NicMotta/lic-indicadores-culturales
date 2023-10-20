export default function Checker ({code, storage, redirect, login}) {
  const storageCode = localStorage.getItem(storage);

  if (!storageCode) {
    window.location.href = login;
  }

  if (storageCode !== code) {
    window.location.href = redirect;
  }
};