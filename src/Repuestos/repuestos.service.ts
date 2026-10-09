import { Injectable } from "@nestjs/common";
import { Server } from "http";

"CREACION DE LA LOGICA DEL CARRO"

//Componentes
export interface Repuesto{
    id?: string
    nombre?: string
    precio?: string
    foto?: string
    idCarro?: string // DE QUE CARRO ES LA LISTA DE REPUESTOS
}

//Respuestas
export interface ServerResponse {
    data: Repuesto | Array<Repuesto>
    message: string;
    status: number;
}

//Respuesta de los CRUD
@Injectable()
export class RepuestosService{
    private items: Array<Repuesto>

    //Metodos
    getRepuestos(): ServerResponse {
        const status: number = this.items.length > 0 ? 200 : 404;  // SI EL LARGO DE ESTOS ITEMS ES MAYOR A 0 DAR 200, SI NO HAY NADA DAR 404
        const message: string = status == 200?
                                "Se han encontrado los repuestos":
                                "No se han encontrado repuestos" 
        return {data: this.items, status , message}
    }

}