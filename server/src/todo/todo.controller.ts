import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    Patch,
    Post,
    Req,
    Res,
    UseGuards,
  } from '@nestjs/common';
  import { AuthService } from 'src/auth/auth.service';
  import { JWTGuard } from 'src/auth/guards/jwt.guard';
import { ToDoService } from './todo.service';
import { CreateToDoDto } from './dto/create-todo.dto';
  
  @Controller('todo')
  export class ToDoController {
    constructor(
      private readonly toDoService: ToDoService,
      private readonly authService: AuthService,
    ) {}
  
    @UseGuards(JWTGuard)
    @Get()
    @HttpCode(HttpStatus.OK)
    async getAllCosts(@Req() req, @Res() res) {
      const token = req.token;
  
      const user = await this.authService.getUserByTokenData(token);
      const costs = await this.toDoService.findAll();
      const filteredCosts = costs.filter(
        (cost) => cost.userId === user._id.toString(),
      );
  
      return res.send(filteredCosts);
    }
  
    @UseGuards(JWTGuard)
    @Post()
    @HttpCode(HttpStatus.OK)
    async createCost(@Body() createToDoDto: CreateToDoDto, @Req() req) {
      const user = await this.authService.getUserByTokenData(req.token);
  
      return await this.toDoService.create({
        ...createToDoDto,
        userId: user._id as string,
      });
    }
  
    // @UseGuards(JWTGuard)
    // @Patch(':id')
    // @HttpCode(HttpStatus.OK)
    // async updateCost(
    //   @Body() updateCostDto: UpdateCostDto,
    //   @Param('id') id: string,
    // ) {
    //   return await this.costsService.update(updateCostDto, id);
    // }
  
    @UseGuards(JWTGuard)
    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    async deleteCost(@Param('id') id: string) {
      return await this.toDoService.delete(id);
    }
  }
