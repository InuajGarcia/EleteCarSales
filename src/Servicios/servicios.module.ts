import { Module } from "@nestjs/common";
import { ServiciosServices } from "./servicios.service.js";
import { ServiciosController } from "./servicios.controller.js";

@Module({
    controllers: [ServiciosController],
    providers: [ServiciosServices]
})

export class ServiciosModule{}