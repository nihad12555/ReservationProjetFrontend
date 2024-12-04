interface UserDTO {
    id: number;
    name: string;
    email: string;
    role: string;
  }
interface UserLoginDTO {
    email: string;
    password: string;
  }

interface UserRegisterDTO {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }
 
  export {
    UserDTO,
    UserLoginDTO,
    UserRegisterDTO,
  }
