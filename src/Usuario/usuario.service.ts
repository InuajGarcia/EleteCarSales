import { Injectable } from "@nestjs/common";
import { Server } from "http";
import { UsuarioDTOCREATE } from "./UsuarioDTO/usuario.dto.create.js";
import { UsuarioDTOUPDATE } from "./UsuarioDTO/usuario.dto.update.js";
import { isEqual } from "lodash";
//Contenido de Usuario
export interface Usuario{
    id?: string
    nombre?: string
    correoElectronico?: string
    contraseña?: string
    numeroTelefonico?: string
}

//Respuestas
export interface ServerResponse {
    data: Usuario | Array<Usuario>
    message: string
    status: number
}

//Respuesta y sistema CRUD
@Injectable()
export class UsuarioService{
    private items: Array<Usuario>

    //Metodos
    getUsuario(): ServerResponse {
        const status: number = this.items.length > 0 ? 200 : 404;
        const message: string = status == 200?
                                "Se ha encontrado el usuario correctamente":
                                "No se ha encontrado el usuario"

        return {data: this.items, status, message}
    }

    //Patch
    patchUsuario(UsuarioDTO: UsuarioDTOUPDATE): ServerResponse {
        //Pasar la informacion actual a UsuarioDTO
        const items: Array<Usuario> = this.items;
        const idx: number = this.items.findIndex(item => {
            return item.id == UsuarioDTO
        })
        this.items[idx] = {... this.items[idx], ... UsuarioDTO};

        //Construccion de la respuesta
        const status: number = !isEqual(items, this.items) ? 200 : 500;
        const message: string = status == 200 ?
                                "item actualiizado exitosamente!":
                                "Erorr inesperado..."
        return {data: this.items, message, status}


    }
}