export class Item {
    constructor(
        public  id: number,
        public pedido_id: number,
        public rubro_id: number,
        public marca: string,
        public descripcion: string,
        public cantidad: any,
        public precio: any,
        public estado: string,
        public  created_at:     any,
        public  updated_at:     any   
    ){}
}

