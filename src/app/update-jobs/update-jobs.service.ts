import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UpdateJobsService {

    constructor(private http: Http) { }
    setData() {
        const url = 'http://localhost:5000/write';
        this.http.request(url).subscribe();
    }

    connectFirebase() {
        const url = 'https://scraping-db.firebaseio.com/DB.json';
        return this.http.get(url).map(
            (res: Response) => {
                return res.json();
            }
        ).toPromise();
    }
}
