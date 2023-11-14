import { type } from "os";

export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
}

export type FormValues = {
  email: string;
  password: string;
  confirmPassword?: string;
};

export type Option ={
  value: string;
  label: string;
}

 interface Language {
  search: string;
  gptSearchPlaceHolder: string;
}

export interface LanguageOptions {
  [key: string]: Language;
}