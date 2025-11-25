  // adapted from https://raw.githubusercontent.com/bradyjoslin/webcrypto-example/master/script.js
  
  // for large strings, use this from https://stackoverflow.com/a/49124600
  const buff_to_base64 = (buff) => btoa(
  new Uint8Array(buff).reduce(
      (data, byte) => data + String.fromCharCode(byte), ''
    )
  );
  
  const base64_to_buf = (b64) =>
    Uint8Array.from(atob(b64), (c) => c.charCodeAt(null));
  
  const enc = new TextEncoder();
  const dec = new TextDecoder();
  
  const getPasswordKey = (password) =>
    window.crypto.subtle.importKey("raw", enc.encode(password), "PBKDF2", false, [
      "deriveKey",
    ]);
  
  const deriveKey = (passwordKey, salt, keyUsage) =>
    window.crypto.subtle.deriveKey(
      {
        name: "PBKDF2",
        salt: salt,
        iterations: 250000,
        hash: "SHA-256",
      },
      passwordKey,
      { name: "AES-GCM", length: 256 },
      false,
      keyUsage
    );
  
  async function encryptData(secretData) {
    if (password=="") {
        password = window.prompt("Password for Cloud Sync?");
        localStorage.setItem("password", password)
    }
    try {
      const salt = window.crypto.getRandomValues(new Uint8Array(16));
      const iv = window.crypto.getRandomValues(new Uint8Array(12));
      const passwordKey = await getPasswordKey(password);
      const aesKey = await deriveKey(passwordKey, salt, ["encrypt"]);
      const encryptedContent = await window.crypto.subtle.encrypt(
        {
          name: "AES-GCM",
          iv: iv,
        },
        aesKey,
        enc.encode(secretData)
      );
  
      const encryptedContentArr = new Uint8Array(encryptedContent);
      let buff = new Uint8Array(
        salt.byteLength + iv.byteLength + encryptedContentArr.byteLength
      );
      buff.set(salt, 0);
      buff.set(iv, salt.byteLength);
      buff.set(encryptedContentArr, salt.byteLength + iv.byteLength);
      const base64Buff = buff_to_base64(buff);
      return base64Buff;
    } catch (e) {
      console.log(`Error - ${e}`);
      return "";
    }
  }
  
  async function decryptData(encryptedData) {
    if (password=="") {
        password = window.prompt("Password for Cloud Sync?");
        localStorage.setItem("password", password)
    }
    try {
      const encryptedDataBuff = base64_to_buf(encryptedData);
      const salt = encryptedDataBuff.slice(0, 16);
      const iv = encryptedDataBuff.slice(16, 16 + 12);
      const data = encryptedDataBuff.slice(16 + 12);
      const passwordKey = await getPasswordKey(password);
      const aesKey = await deriveKey(passwordKey, salt, ["decrypt"]);
      const decryptedContent = await window.crypto.subtle.decrypt(
        {
          name: "AES-GCM",
          iv: iv,
        },
        aesKey,
        data
      );
      return dec.decode(decryptedContent);
    } catch (e) {
      console.log(`Error - ${e}`);
      alert("Key decryption failed. Reload page to try again, or continue, and enter a new key when prompted.")
      password = ""
      localStorage.setItem("password", "")
      return "";
    }
  }


/*

For exported files:
Add the following to the head before the declared js with the right relative address

<script src="../../js/encryption.js?v=2024-02-16c"></script>

Then, add edit the declared js to read like follows

//
// Load defaults
//

if (localStorage.api_key) {
  api_key = localStorage.api_key
} else {
  api_key = ""
  localStorage.setItem('api_key',api_key)
}

// user decrypt
if (localStorage.api_key=="") {
    (async () => {
        api_key = await decryptData("qvnZvZGyEAb+R67qcsmhwllPVzJ2g2WPiGBTAM7Erzc5zPYtgFiGTAPYjM2M3B0VWPr+RDvvc0Tx711Wf9s/LNPQ+NZdM+v55ZYnMqKShTtNf+jQxnkbAUTw5v1g2Zs=")
    })()
}

*/
