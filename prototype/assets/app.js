const tokenStatus = document.getElementById('tokenStatus');
const refreshTokenButton = document.getElementById('refreshToken');

let token = localStorage.getItem('token');
let expiryTime = localStorage.getItem('expiryTime');

function updateTokenStatus() {
  if (token && expiryTime && new Date().getTime() < expiryTime) {
    tokenStatus.textContent = `Token Status: Valid (expires ${new Date(expiryTime).toLocaleString()})`;
  } else {
    tokenStatus.textContent = 'Token Status: Expired';
    token = null;
    expiryTime = null;
    localStorage.removeItem('token');
    localStorage.removeItem('expiryTime');
  }
}

updateTokenStatus();

refreshTokenButton.addEventListener('click', () => {
  const newToken = generateToken();
  const newExpiryTime = new Date().getTime() + 3600000; // Expires in 1 hour

  localStorage.setItem('token', newToken);
  localStorage.setItem('expiryTime', newExpiryTime);

  token = newToken;
  expiryTime = newExpiryTime;

  updateTokenStatus();
});

function generateToken() {
  return 'dummy-token-' + Math.random().toString(36).substring(2, 15);
}

setInterval(updateTokenStatus, 60000); // Check every minute