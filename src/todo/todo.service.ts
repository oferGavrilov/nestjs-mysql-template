import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
  query() {
    return ['Todo1', 'Todo2'];
  }
}
