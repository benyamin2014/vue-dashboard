/**
 * 工具类
 */
import Vue from 'vue'
import CryptoJS from 'crypto-js'
const modeObj = {
  'ECB': CryptoJS.mode.ECB,
  'CBC': CryptoJS.mode.CBC,
  'CFB': CryptoJS.mode.CFB,
  'CTR': CryptoJS.mode.CTR,
  'OFB': CryptoJS.mode.OFB
}
const padObj = {
  'Pkcs7': CryptoJS.pad.Pkcs7,
  'Iso97971': CryptoJS.pad.Iso97971,
  'AnsiX923': CryptoJS.pad.AnsiX923,
  'Iso10126': CryptoJS.pad.Iso10126,
  'ZeroPadding': CryptoJS.pad.ZeroPadding,
  'NoPadding': CryptoJS.pad.NoPadding
}

export default {// 加密
  encrypt(content, key, extend) {
    console.log(extend)
    var key = CryptoJS.enc.Utf8.parse(key)
    var srcs = CryptoJS.enc.Utf8.parse(content)
    var algorithm = extend.algorithm
    var cfg = { 'mode': modeObj[extend.mode], 'padding': padObj[extend.padding] }
    var iv = extend.iv
    if (iv) {
      console.log(iv)
      cfg.iv = CryptoJS.enc.Utf8.parse(iv)
    }
    console.log('c: ' + cfg)
    console.log(cfg)

    switch (algorithm) {
      case 'AES':
        var encrypted = CryptoJS.AES.encrypt(srcs, key, cfg)
        return encrypted.toString()
      case 'DES':
        var encrypted = CryptoJS.DES.encrypt(srcs, key, cfg)
        return encrypted.toString()
      case 'TripleDES':
        var encrypted = CryptoJS.TripleDES.encrypt(srcs, key, cfg)
        return encrypted.toString()
      case 'Rabbit':
        var encrypted = CryptoJS.Rabbit.encrypt(srcs, key, cfg)
        return encrypted.toString()
      case 'RC4':
        var encrypted = CryptoJS.RC4.encrypt(srcs, key, cfg)
        return encrypted.toString()
    }
  },
  // 解密
  decrypt(content, key, extend) {
    console.log(extend)
    var key = CryptoJS.enc.Utf8.parse(key)
    var srcs = content
    var algorithm = extend.algorithm
    var cfg = { 'mode': modeObj[extend.mode], 'padding': padObj[extend.padding] }
    var iv = extend.iv
    if (iv) {
      console.log(iv)
      cfg.iv = CryptoJS.enc.Utf8.parse(iv)
    }
    console.log('c: ' + cfg)
    console.log(cfg)

    switch (algorithm) {
      case 'AES':
        var decrypt = CryptoJS.AES.decrypt(srcs, key, cfg)
        return CryptoJS.enc.Utf8.stringify(decrypt).toString()
      case 'DES':
        var decrypt = CryptoJS.DES.decrypt(srcs, key, cfg)
        return CryptoJS.enc.Utf8.stringify(decrypt).toString()
      case 'TripleDES':
        var decrypt = CryptoJS.TripleDES.decrypt(srcs, key, cfg)
        return CryptoJS.enc.Utf8.stringify(decrypt).toString()
      case 'Rabbit':
        var decrypt = CryptoJS.Rabbit.decrypt(srcs, key, cfg)
        return CryptoJS.enc.Utf8.stringify(decrypt).toString()
      case 'RC4':
        var decrypt = CryptoJS.RC4.decrypt(srcs, key, cfg)
        return CryptoJS.enc.Utf8.stringify(decrypt).toString()
    }
  },

  // hashing
  hash(content, algorithm) {
    console.log(content)
    switch (algorithm) {
      case 'MD5':
        var decrypt = CryptoJS.MD5(content)
        console.log(decrypt)
        return decrypt.toString()
      case 'SHA1':
        var decrypt = CryptoJS.SHA1(content)
        return decrypt.toString()
      case 'SHA256':
        var decrypt = CryptoJS.SHA256(content)
        return decrypt.toString()
      case 'SHA512':
        var decrypt = CryptoJS.SHA512(content)
        return decrypt.toString()
      case 'SHA3':
        var decrypt = CryptoJS.SHA3(content)// { outputLength: 512 } 224, 256, 384, or 512 bits. The default is 512 bits.
        return decrypt.toString()
    }
  },
  // hmac
  hmac(content, key, algorithm) {
    console.log(content)
    var key = CryptoJS.enc.Utf8.parse(key)
    switch (algorithm) {
      case 'HmacMD5':
        var decrypt = CryptoJS.HmacMD5(content, key)
        console.log(decrypt)
        return decrypt.toString()
      case 'HmacSHA1':
        var decrypt = CryptoJS.HmacSHA1(content, key)
        return decrypt.toString()
      case 'HmacSHA256':
        var decrypt = CryptoJS.HmacSHA256(content, key)
        return decrypt.toString()
      case 'HmacSHA512':
        var decrypt = CryptoJS.HmacSHA512(content, key)
        return decrypt.toString()
    }
  }

}
