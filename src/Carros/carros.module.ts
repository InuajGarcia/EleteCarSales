import { Module } from "@nestjs/common";
import { CarrosController } from "./carros.controller.js";
import { CarrosService } from "./carros.service.js";
import { ModuleCompiler } from "@nestjs/core/injector/compiler.js";

@Module({
    controllers: [CarrosController],
    providers: [CarrosService]
})

export class CarroModule{}