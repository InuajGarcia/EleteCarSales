import { Controller, Get, Param } from "@nestjs/common";
import { UsuarioService } from "./usuario.service.js";

@Controller('usuario')
export class UsuarioController {
    constructor(private readonly UsuarioService: UsuarioService) {}

    //CRUD
    @Get()
    getUsuario(){
        return this.UsuarioService.getUsuario();
    }

    
}