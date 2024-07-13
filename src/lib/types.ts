interface Definition {
  definition: string;
  antonyms: string[];
  synonyms: string[];
}

interface Meaning {
  definitions: Definition[];
  partOfSpeech: string;
  antonyms: string[];
  synonyms: string[];
}

export interface Dictionary {
  phonetic: string;
  word: string;
  sourceUrls: string[];
  meanings: Meaning[];
}
