import { Controller, Get, Param, Delete, Post , Body, Put} from "@nestjs/common";
import { CarrosService } from "./vehiculos.service.js";
import type { ServerResponse } from "./vehiculos.service.js";
import { CarroDTOCreate } from "./dto/create-vehiculo.dto.js";
import { CarroDTOUpdate } from "./dto/update-vehiculo.dto.js";

@Controller('vehiculos')
export class CarrosController {

    constructor(private readonly CarroService: CarrosService) {}


    //Se determinan las acciones del CRUD

    //Ver
    @Get()
    getCatalogo() {
        return this.CarroService.getCatalogo();
    }

    @Get(':id')
    getCarro(@Param("id") id:string) {
        return this.CarroService.getCarro(id);
    }


    //Crear
    @Post()
    createCarro(@Body() CarroDTOCreate : CarroDTOCreate): ServerResponse{
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
