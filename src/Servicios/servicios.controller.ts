import { Controller, Get, Param } from "@nestjs/common";
import { ServiciosServices } from "./servicios.service.js";


@Controller('services')
export class ServiciosController{
    constructor(private readonly ServiciosServices: ServiciosServices) {}


    //Crud
    @Get()
    getServicios(){
        return this.ServiciosServices.getServicios();
    }
}