import { Controller, Get } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
  constructor(private todoService: TodoService) {}

  // http get verb
  @Get()
  getTodos() {
    console.log(this.todoService.query());
  }
}
