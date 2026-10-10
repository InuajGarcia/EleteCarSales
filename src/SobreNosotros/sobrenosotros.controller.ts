import { Controller, Get, Param } from "@nestjs/common";
import { SobreNosotrosService } from "./sobrenosotros.service.js";

@Controller('sobreNosotros')
export class SobreNosotrosController {
    constructor(private readonly SobreNosotrosService: SobreNosotrosService) {}

    //CRUD
    @Get()
    getSobreNosotros(){
        return this.SobreNosotrosService.getSobreNosotros();
    }

}