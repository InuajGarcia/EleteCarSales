import { Injectable } from "@nestjs/common";
import { CarroDTOCreate } from "./dto/create-vehiculo.dto.js";
import { CarroDTOUpdate } from "./dto/update-vehiculo.dto.js";
import isEqual from "lodash.isequal"

// Logica de transferencia de datos

//Componentes de Carro
export interface Carro{
    id?: string;
    marca?: string;
    modelo?: string;
    año?: number;
    moneda?: string;
    kilometraje?: string;
    categoria?: string;
    color?: string;
    descripcion?: string;
    imagen?: string;
    disponible?: boolean;
    destacado?: boolean;
    createdAt?: string;
    updatedAt?: string;
}

//Estructura de la respuesta del servidor (Devuelve Mensaje, status y ect)
export interface ServerResponse {
    data: Carro |Array<Carro>
    message: string;
    status: number;
}

//Definicion de service
@Injectable()
export class CarrosService{
    private items: Array<Carro> = []

    //Metodos

    //Get
    getCatalogo(): ServerResponse {
        //Respuesta
        const status: number = this.items.length > 0 ? 200 : 404;
        const message: string = status == 200?
                                "Carros encontrados correctamete!":
                                "No se encontraron items"
        return {data: this.items, status, message}
    }


    //Get (Carro)
    getCarro(id:string): ServerResponse{
        //Buscar un ITEM(carro) que coincida con el ID
        const carro:Carro | undefined = this.items.find(item => {
            return item.id == id;
        });

        //Respuesta
        const status: number = carro != undefined ? 202: 404;   
        const message: string = status == 202 ?
                                        "Carro encontrado correctamente!":
                                        "No se encontro el item" 
        return {data: carro ?? [], message, status}

    }

    //POST
    createCarro(CarroDTOCreate : CarroDTOCreate): ServerResponse { //Que el crear carro usa los objetos de CarroDTO y ServerResponse
        const len: number = this.items.length;
        const newID: string = `${len+1}`;
        this.items.push({id: newID, ... CarroDTOCreate});

        //Respuestas
        const status: number = this.items.length > len ? 200 : 500;
        const message: string = status == 200 ?
                                "Carro creado exitosamente!":
                                "Error inesperado..."
        return {data: this.items, message, status}
    }

    //PUT (update)
    updateCarro(id: string, CarroDTOUpdate: CarroDTOUpdate): ServerResponse {
        const items: Array<Carro> = this.items;
        const idx: number = this.items.findIndex(item => {
            return item.id == CarroDTOUpdate.id;
        })
        this.items[idx] = {... this.items[idx], ... CarroDTOUpdate};

        //Respuesta
        const status: number = !isEqual(items, this.items) ? 200 : 500;
        const message: string = status == 200 ?
                                "Carro actualizado exitosamente":
                                "Error inesperado..."
        return {data: this.items, message, status}
    }



     //DELETE
    deleteCarro(id: string): ServerResponse {
        const len: number = this.items.length;
        const filtered: Array<Carro> = this.items.filter(item => {
            return item.id != id;
        })
        this.items = filtered;

        //Respuesta
        const status: number = this.items.length < len ? 200 : 500;
        const message: string = status == 200 ?
                                "Carro eliminado del catalogo!":
                                "Error inesperado..."
        return {data: this.items, message, status}
    }

}

//Los apuntes son tambien para yo anotar segun yo anoto :P