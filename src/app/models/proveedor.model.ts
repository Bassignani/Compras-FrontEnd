export class Proveedor {
    constructor(
        public  id: number,
        public  nombre: string,
        public  cuit: string,
        public  direccion: string,
        public  telefono1: string,
        public  telefono2: string,
        public  razon_social: string,
        public  provincia: string,
        public  localidad: string,
        public  comentario: string,
        public  codigo: string,
        public  email: string,
        public  calificacion: string,
        public  created_at:     any,
        public  updated_at:     any   
    ){}
}
