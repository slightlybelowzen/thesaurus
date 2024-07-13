import { type Dictionary } from './types';

export async function fetchWordInformation(
  word: string
): Promise<Dictionary | Error> {
  const response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  );
  if (response.ok) {
    const data = await response.json();
    return data[0] as Dictionary;
  } else {
    return new Error('No results found');
  }
}
