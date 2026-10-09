import { Controller, Get, Param, Delete } from "@nestjs/common";
import { CarrosService } from "./carros.service.js";
import type { ServerResponse } from "./carros.service.js";

@Controller('carros')
export class CarrosController {

    constructor(private readonly CarroService: CarrosService) {}


    //Definir el crud

    @Get()
    getCatalogo() {
        return this.CarroService.getCatalogo();
    }

    getCarro(@Param("id") id:string) {
        return this.CarroService.getCarro(id);
    }

    @Delete(':id')
    deleteCarro(@Param('id') id: string): ServerResponse {
        return this.CarroService.deleteCarro(id)
    }


}
