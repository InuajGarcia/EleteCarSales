import { Module } from "@nestjs/common";
import { CarrosController } from "./vehiculos.controller.js";
import { CarrosService } from "./vehiculos.service.js";
import { ModuleCompiler } from "@nestjs/core/injector/compiler.js";

@Module({
    controllers: [CarrosController],
    providers: [CarrosService]
})

export class CarroModule{}