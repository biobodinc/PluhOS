<script>
  function handleCredentialResponse(response) {
    // The 'response.credential' is the JWT ID token.
    console.log("Encoded JWT ID token: " + response.credential);
    
    // You must send this token to your backend server for verification
    // using a method like XMLHttpRequest or fetch.
    // Example: sendTokenToServer(response.credential);
  }
</script>