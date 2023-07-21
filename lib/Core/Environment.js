let Token;

export function setApiKey(apikey) {
  Token = apikey;
}

export function getApiKey() {
  return Token;
}

export default {
  setApiKey,
  getApiKey
}