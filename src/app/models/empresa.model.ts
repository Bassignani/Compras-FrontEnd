export class Empresa {
    constructor(
        public  id: number,
        public  nombre: string,
        public  cuit: string,
        public  razon_social: string,
        public  direccion: string,
        public  telefono1: string,
        public  telefono2: string,
        public  codigo: string,
        public  path_img: string,
        public  created_at:     any,
        public  updated_at:     any   
    ){}
}
