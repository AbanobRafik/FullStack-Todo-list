export interface Iregister {
  name: "username" | "email" | "password";
  placeholder: string;
  type: string;
  validation: {
    required?: string;
    minLength?: {
      value: number;
      message: string;
    };
    pattern?: {
      value: RegExp;
      message: string;
    };
  };
}

export interface Ilogin {
  name: "identifier" | "password";
  placeholder: string;
  type: string;
  validation?: {
    required: string;
    minLength?: {
      value: number;
      message: string;
    };
    pattern?: {
      value: RegExp;
      message: string;
    };
  };
}

export interface ITodo {
  id?: number;
  documentId ?: string
  title: string;
  description?: string;
}

export interface IerrorResponse {
  error: {
    message?: string;
  };
}
