import { RepuestosService } from "./repuestos.service.js";
import { RepuestosController } from "./repuestos.controller.js";
import { Module } from "@nestjs/common";

@Module({
    controllers: [RepuestosController],
    providers: [RepuestosService]
})

export class RepuestosModule{}