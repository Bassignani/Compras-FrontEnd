export class Pago {
    constructor(
        public  id: number,
        public factura_id: number,
        public tipo: string,
        public valor: any,
        public descripcion: string,
        public  created_at:     any,
        public  updated_at:     any   
    ){}
}
