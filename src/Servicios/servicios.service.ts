import { Injectable } from "@nestjs/common";

export interface Servicios{
    titulo?: string
    tituloRepuestos?: string
    infoRepuestos?: string
    tituloAsesoria?: string
    infoAsesoria?: string
    tituloFinanciacion?: string
    infoFinanciacion?: string
    tituloVentaYCompra?: string
    infoVentaYCompra?: string
}

export interface ServerResponse {
    data: Servicios | Array<Servicios>
    message: string
    status: number
}

@Injectable()
export class ServiciosServices{
    private items: Array<Servicios>

    //Metodos
    getServicios(): ServerResponse{
        const status: number = this.items.length > 0 ? 200 : 401;
        const message: string = status == 200?
                                "Se ha encontrado los servicios":
                                "No se han encontrado los servicios"
        
    return {data: this.items, status, message}
    }
}