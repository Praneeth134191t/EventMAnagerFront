import { Injectable , EventEmitter} from '@angular/core';

@Injectable()
export class ModalServiceService {
	 closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

}