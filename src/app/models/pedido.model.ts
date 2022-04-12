export class Pedido {
    constructor(
        public  id: number,
        public user_id: number,
        public empresa_id: number,
        public user_recepcion_id: number,
        public fecha_entrega: any,
        public num_pedido: string,
        public estado: string,
        public urgencia: string,
        public  created_at:     any,
        public  updated_at:     any   
    ){}
}
