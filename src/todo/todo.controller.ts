import { Controller  , Get} from '@nestjs/common';

@Controller('todos')
export class TodoController {


    // http get verb
    @Get()
    query() {
        return ['Todo1' , 'Todo2' ]
    }
}
