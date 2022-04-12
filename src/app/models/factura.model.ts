export class Factura {
    constructor(
        public  id: number,
        public  subPedido_id: number,
        public  num_factura: string,
        public  nota: string,
        public  fecha: any,
        public  importe: any,
        public  archivo: string,
        public  created_at:     any,
        public  updated_at:     any   
    ){}
}
