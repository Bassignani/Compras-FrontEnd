export class EmpresaBanco {
    constructor(
        public  id: number,
        public  empresa_id: number,
        public  banco: string,
        public  num_cuenta: string,
        public  cbu: string,
        public  tipo_cuenta: string,
        public  alias: string,
        public  descripcion: string,
        public  created_at:     any,
        public  updated_at:     any   
    ){}
}
