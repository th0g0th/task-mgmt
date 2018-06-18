import { HttpHeaders } from "@angular/common/http";

export class Constants {

    static HTTP_OPTIONS = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };

    static BASED_REQUEST_URL = '/api';
}
