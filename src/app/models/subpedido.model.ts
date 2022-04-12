export class Subpedido {
    constructor(
        public  id: number,
        public  pedido_id: number,
        public  proveedor_id: number,
        public  fecha_compra: any,
        public  fecha_entrega: any,
        public  total: any,
        public  created_at:     any,
        public  updated_at:     any   
    ){}
}
