import { Controller, Get, Param, Delete, Post , Body, Put} from "@nestjs/common";
import { CarrosService } from "./vehiculos.service.js";
import type { ServerResponse } from "./vehiculos.service.js";
import { CarroDTOCreate } from "./dto/create-vehiculo.dto.js";
import { CarroDTOUpdate } from "./dto/update-vehiculo.dto.js";

@Controller('carros')
export class CarrosController {

    constructor(private readonly CarroService: CarrosService) {}


    //Definir el crud

    //Ver
    @Get(':id')
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
        return this.CarroService.updateCarro(id, CarroDTOUpdate)
    }


    //Borrar
    @Delete(':id')
    deleteCarro(@Param('id') id: string): ServerResponse {
        return this.CarroService.deleteCarro(id)
    }


}
