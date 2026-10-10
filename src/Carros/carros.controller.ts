import { Controller, Get, Param, Delete, Post , Body, Put} from "@nestjs/common";
import { CarrosService } from "./carros.service.js";
import type { ServerResponse } from "./carros.service.js";
import { CarroDTOCreate } from "./CarrosDTO/carro.dto.create.js";
import { CarroDTOUpdate } from "./CarrosDTO/carro.dto.update.js";
import { identity } from "lodash";

@Controller('carros')
export class CarrosController {

    constructor(private readonly CarroService: CarrosService) {}


    //Definir el crud

    //Ver
    @Get()
    getCatalogo() {
        return this.CarroService.getCatalogo();
    }

    getCarro(@Param("id") id:string) {
        return this.CarroService.getCarro(id);
    }


    //Crear
    @Post()
    createCarro(@Body() CarroDTOCreate : CarroDTOUpdate): ServerResponse{
        return this.CarroService.createCarro(CarroDTOCreate)
    }

    //Actualizar
    @Put(':id')
    updateCarro(@Param('id') id: string, @Body() CarroDTOUpdate: CarroDTOUpdate): ServerResponse{
        return this.CarroService.updateCarro(CarroDTOUpdate)
    }


    //Borrar
    @Delete(':id')
    deleteCarro(@Param('id') id: string): ServerResponse {
        return this.CarroService.deleteCarro(id)
    }


}
