import { Controller, Get, Param } from "@nestjs/common";
import { RepuestosService } from "./repuestos.service.js";

@Controller('repuestos')
export class RepuestosController {
    constructor(private readonly RepuestosService: RepuestosService) {}

    @Get()
    getCatalogo() {
        return this.RepuestosService.getRepuestos();
    }
}