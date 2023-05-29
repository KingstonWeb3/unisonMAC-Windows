import bip39 from 'react-native-bip39';

export const generateSeedPhrase = async () => {
  try {
    const mnemonic = await bip39.generateMnemonic();
    return mnemonic;
  } catch (error) {
    console.error('Error generating seed phrase:', error);
    return null;
  }
};

export const validateSeedPhrase = (seedPhrase) => {
  return bip39.validateMnemonic(seedPhrase);
};
