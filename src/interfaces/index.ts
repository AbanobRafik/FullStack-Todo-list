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
  };
}

export interface Ilogin {
  name: "email" | "password";
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
