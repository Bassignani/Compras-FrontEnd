export class Cheque {
    constructor(
        public  id: number,
        public  pago_id: number,
        public  banco: string,
        public  num_cheque: string,
        public  fecha: any,
        public  valor: any,
        public  created_at:     any,
        public  updated_at:     any   
    ){}
}

