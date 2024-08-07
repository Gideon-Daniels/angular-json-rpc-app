import { Component } from '@angular/core';
import { JsonRpcService } from './json-rpc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
})
export class AppComponent {
  title = 'json-rpc-client';
  result = '';

  constructor(private jsonRpcService: JsonRpcService) {}

  addNumbers() {
    this.jsonRpcService.callMethod('add', [1, 2]).subscribe((data) => {
      console.log(data);
      this.result = data.result;
    });
  }
}
