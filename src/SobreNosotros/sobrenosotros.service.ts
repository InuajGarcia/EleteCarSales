import { Injectable } from "@nestjs/common"

export interface SobreNosotros {
    titulo?: string
    descripcion?: string
    añosExperiencia?: string
    vehiculosDisponibles?: number
    clientesSatisfechos?: number
}

export interface ServerResponse {
    data: SobreNosotros | Array<SobreNosotros>
    message: string
    status: number
}

@Injectable()
export class SobreNosotrosService {
    private items: Array<SobreNosotros>

    //Metodos
    getSobreNosotros(): ServerResponse {
        const status: number = this.items.length > 0 ? 200 : 404;
        const message: string = status == 200?
                                "Se ha encontrado la informacion de la empresa exitosamente":
                                "No se ha encontrado informacion de la empresa"

        return {data: this.items, status, message}
    }

}