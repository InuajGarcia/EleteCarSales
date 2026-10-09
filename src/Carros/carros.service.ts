import { Injectable } from "@nestjs/common";

// Aqui se hace toda la logica

//Componentes de Carro
export interface Carro{
    id?: string
    nombre?: string
    precio?: number
    imagen?: string
    foto?: string
    informacionAdicional?: string
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
        const status: number = carro != undefined ? 202: 400;
        const message: string = status == 200 ?
                                        "Carro encontrado correctamente!":
                                        "No se encontro el item" 
        return {data: carro ?? [], message, status}

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