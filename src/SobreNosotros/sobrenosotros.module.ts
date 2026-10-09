import { Module } from "@nestjs/common";
import { SobreNosotrosService } from "./sobrenosotros.service.js";
import { SobreNosotrosController } from "./sobrenosotros.controller.js";

@Module({
    controllers: [SobreNosotrosController],
    providers: [SobreNosotrosService]
})

export class SobreNosotrosModule{}