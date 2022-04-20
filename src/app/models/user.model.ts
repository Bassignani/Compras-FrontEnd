export class User {
    constructor(
        public  id: number,
        public  empresa_id: number,
        public  name: string,
        public  secondname: string,
        public  lastname: string,
        public  dni: string,
        public  cuil: string,
        public  direccion: string,
        public  telefono: string,
        public  email: string,
        public  password: string, 
        public  password_confirmation: string,
        public  created_at:     any,
        public  updated_at:     any   
    ){}
}
