function generateRandomState(length = 16) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const randomValues = new Uint8Array(length);
    crypto.getRandomValues(randomValues);
    for (let i = 0; i < length; i++) {
      result += chars.charAt(randomValues[i] % chars.length);
    }
    return result;
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('login-button').addEventListener('click', () => {
      const state = generateRandomState();
      localStorage.setItem('line_login_state', state);
  
      const clientId = 'YOUR_CHANNEL_ID';
      const redirectUri = encodeURIComponent('https://haruru8.github.io/LINE_api_html/');
      const scope = 'openid profile';
      const nonce = generateRandomState();
  
      const loginUrl = `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}&scope=${scope}&nonce=${nonce}`;
  
      window.location.href = loginUrl;
    });
  });
  